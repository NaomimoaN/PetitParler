import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const DictionaryPage = () => {
  const [wordData, setWordData] = useState(null);
  const apiKey = process.env.REACT_APP_LINGVANEX_API_KEY;

  useEffect(() => {
    const fetchWord = async () => {
      try {
        const response = await axios.get(
          "https://api-gl.lingvanex.com/language/translate/v2/languages",
          // "https://api.lingvanex.com/v1/wordlist/french/bonjour",
          //https://api.lingvanex.com/v1/wordlist/french/bonjour
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );
        setWordData(response.data);
        console.log(process.env.Langvanex_API_KEY);
      } catch (error) {
        console.error("Error fetching word data:", error);
      }
    };

    fetchWord();
  }, []); // 初回のみ実行

  return (
    <div>
      <h1>フランス語の単語: bonjour</h1>
      {wordData ? (
        <div>
          <p>英語の意味: {wordData.object}</p>
          {/* <p>発音: {wordData.pronunciation}</p> */}
        </div>
      ) : (
        <p>読み込み中...</p>
      )}
    </div>
  );
};

export default DictionaryPage;
