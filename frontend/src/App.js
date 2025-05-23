import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WordPracticePage from "./pages/WordPracticePage";
import SentencePracticePage from "./pages/SentencePracticePage";
import ProgressPage from "./pages/ProgressPage";
import DictionaryPage from "./pages/DictionaryPage";
import NavBar from "./components/NavBar";
import WordListPage from "./pages/WordListPage";
import ChartPage from "./pages/ChartPage";

// APIのベースURLを設定
const API_BASE_URL = "http://localhost:5000";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/words" element={<WordPracticePage />} />
          <Route path="/sentences" element={<SentencePracticePage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/dictionary" element={<DictionaryPage />} />
          <Route path="/word-list" element={<WordListPage />} />
          <Route path="/chart" element={<ChartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
