import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CandidateSearch from "./pages/CandidateSearch";
import SavedCandidates from "./pages/SavedCanidates";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Candidate Search</Link>
          </li>
          <li>
            <Link to="/saved-candidates">Saved Candidates</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<CandidateSearch />} />
        <Route path="/saved-candidates" element={<SavedCandidates />} />
      </Routes>
    </Router>
  );
};

export default App;
