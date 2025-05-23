import React, { useState, useEffect } from "react";
import axios from "axios";
import WordList from "../components/WordList";

const WordListPage = () => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/words");
        setWords(response.data);
        setLoading(false);
      } catch (err) {
        setError("単語の取得に失敗しました");
        setLoading(false);
      }
    };

    fetchWords();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/words/${id}`);
      setWords(words.filter((word) => word._id !== id));
    } catch (err) {
      setError("単語の削除に失敗しました");
    }
  };

  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>単語リスト</h1>
      <WordList words={words} onDelete={handleDelete} />
    </div>
  );
};

export default WordListPage;
