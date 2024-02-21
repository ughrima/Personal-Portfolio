import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main/main';
import Footer from './components/footer/Footer';
import Face from './components/project-pages/face-recognition';
import "./App.css"

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Router>
       {isLoading ? (
        <div className="loading">
          <svg viewBox="0 0 50 50">
            <circle
              cx="25"
              cy="25"
              r="20"
              stroke="black"
              strokeWidth="5"
              strokeDasharray="100"
              strokeDashoffset="100"
              fill="none"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="1s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/identity-guard" element={<Face />} />
        </Routes>
      )}
      <Footer />
    </Router>
  );
};

export default App;
