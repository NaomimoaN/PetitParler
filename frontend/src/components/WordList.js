import React, { useState } from "react";
import "./WordList.css";

const WordList = ({ words, onDelete }) => {
  const [flippedCards, setFlippedCards] = useState({});

  //ここの理解から始めよう
  const handleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="word-list">
      <h2>Word List</h2>
      {words.map((word, index) => (
        <div key={index} className="word-card">
          <div className="card-content">
            <h1>{word.french}</h1>
            <p>{word.pronunciation}</p>
            {flippedCards[word._id] && <p>{word.english}</p>}
          </div>
          <div className="card-actions">
            <button onClick={() => handleFlip(word._id)}>
              {flippedCards[word._id] ? "Hide English" : "Show English"}
            </button>
            <button onClick={() => onDelete(word._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WordList;
