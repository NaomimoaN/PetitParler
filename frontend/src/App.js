import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import WordList from "./components/WordList";
import WordForm from "./components/WordForm";
// APIのベースURLを設定
const API_BASE_URL = "http://localhost:5000";

function App() {
  const [error, setError] = useState("");
  const [words, setWords] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/words`)
      .then((response) => {
        const data = response.data;
        console.log("words:", data);
        setWords(data);
        setError("");
      })
      .catch((err) => {
        console.error("error message:", err);
        setError("データの取得に失敗しました。サーバーを確認してください。");
        setWords([]);
      });
  }, []);

  return (
    <div className="App">
      {error && <p style={{ color: "red" }}>{error}</p>}
      <WordList words={words} />
      <WordForm/>
    </div>
  );
}

export default App;
