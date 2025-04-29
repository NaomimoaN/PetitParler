import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("/api/words")
      .then((response) => {
        const data = response.data;
        console.log("words:", data);
        if (data.length > 0) {
          setMessage(`Today's 1st Word is ${data[0].word}`);
        } else {
          setMessage(`No words for today`);
        }
      })
      .catch((err) => {
        console.error("error message:", err);
      });
  }, []);

  return (
    <div className="App">
      <div>
        <h1>PetitParler</h1>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;
