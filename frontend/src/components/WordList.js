import React from "react";

const WordList = ({ words, onDelete }) => {
  return (
    <div className="word-list">
      <h2>Word List</h2>
      {words.map((word, index) => (
        <div key={index}>
          <p>{word.french}</p>
          <p>{word.english}</p>
          <p>{word.pronunciation}</p>
          <button onClick={() => onDelete(word._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default WordList;
