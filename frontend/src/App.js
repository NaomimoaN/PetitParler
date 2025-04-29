import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

// APIのベースURLを設定
const API_BASE_URL = "http://localhost:5000";

function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/words`)
      .then((response) => {
        const data = response.data;
        console.log("words:", data);
        if (data.length > 0) {
          setMessage(`Today's 1st Word is ${data[0].french}`);
        } else {
          setMessage(`No words for today`);
        }
        setError("");
      })
      .catch((err) => {
        console.error("error message:", err);
        setError("データの取得に失敗しました。サーバーを確認してください。");
        setMessage("");
      });
  }, []);

  return (
    <div className="App">
      <div>
        <h1>PetitParler</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;
