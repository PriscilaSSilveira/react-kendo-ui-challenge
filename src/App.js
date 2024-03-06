import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Feed from './components/Feed'
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="home-container">
        <h1 className="home-title">Bem-vindo à Galeria de Filmes</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
