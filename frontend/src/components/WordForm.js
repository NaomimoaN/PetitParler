import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const WordForm = () => {
    const [french, setFrench] = useState("");
    const [english, setEnglish] = useState("");
    const [pronunciation, setPronunciation] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newWord = {
            french,
            english,
            pronunciation
        };

        axios.post("http://localhost:5000/api/words", newWord)
        .then((response) => {
            console.log("Word added successfully", response.data);
            setFrench("");
            setEnglish("");
            setPronunciation("");
        })
        .catch((error) => { 
            console.error("Error adding word", error);  
        });

}

return(
    <div className="word-form">
        <h2>Add New Word</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="french">French</label>
                <input
                    type="text"
                    value={french}
                    onChange={(e) => setFrench(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="english">English</label>
                <input
                    type="text"
                    value={english}
                    onChange={(e) => setEnglish(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="pronunciation">Pronunciation</label>
                <input
                    type="text"
                    value={pronunciation}
                    onChange={(e) => setPronunciation(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Word</button>
        </form>
    </div>
)

}
export default WordForm;