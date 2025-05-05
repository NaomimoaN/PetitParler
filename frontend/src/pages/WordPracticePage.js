import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import WordList from "../components/WordList";
import WordForm from "../components/WordForm";
import NavBar from "../components/NavBar";

const WordPracticePage = () => {
  const API_BASE_URL = "http://localhost:5000";

  const [error, setError] = useState("");
  const [words, setWords] = useState([]);

  useEffect(() => {
    console.log("Fetching words from API...");
    axios
      .get(`${API_BASE_URL}/api/words`)
      .then((response) => {
        const data = response.data;
        console.log("API Response:", data);
        setWords(data);
        setError("");
      })
      .catch((err) => {
        console.error("Error fetching words:", err);
        setError("Failed to fetch words, please check the server");
        setWords([]);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`${API_BASE_URL}/api/words/${id}`)
      .then(() => {
        setWords(words.filter((word) => word._id !== id));
        setError("");
      })
      .catch((err) => {
        console.error("Error deleting word", err);
        setError("Failed to delete word, please try again");
      });
  };

  console.log("Current words state:", words);

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <WordList words={words} onDelete={handleDelete} />
      <WordForm />
    </div>
  );
};

export default WordPracticePage;
