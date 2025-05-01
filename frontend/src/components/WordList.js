import React from "react";

const WordList = ({ words }) => {
  return (
    <div className="word-list">
      <h2>Word List</h2>
      {words.map((word, index) => (
        <div key={index}>
          <p>{word.french}</p>
          <p>{word.english}</p>
          <p>{word.pronunciation}</p>
        </div>
      ))}
    </div>
  );
};

export default WordList;
