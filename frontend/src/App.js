import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WordPracticePage from "./pages/WordPracticePage";
import SentencePracticePage from "./pages/SentencePracticePage";
import ProgressPage from "./pages/ProgressPage";

// APIのベースURLを設定
const API_BASE_URL = "http://localhost:5000";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/words" element={<WordPracticePage />} />
          <Route path="/sentences" element={<SentencePracticePage />} />
          <Route path="/progress" element={<ProgressPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
