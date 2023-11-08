import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styling/App.css";

import LandingPage from "./LandingPage";
import RegistrationPage from "./RegistrationPage";
import FormPage from "./FormPage";
import ApiPage from "./ApiPage";

function App() {
  useEffect(() => {
    // Add an event listener to clear localStorage when the app is closed
    window.addEventListener("beforeunload", () => {
      localStorage.clear();
    });

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", () => {
        localStorage.clear();
      });
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/contact/:userName/:selectedFile" element={<FormPage />} />
        <Route path="/api" element={<ApiPage />} />
      </Routes>
    </Router>
  );
}

export default App;
