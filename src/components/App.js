import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../index.css';
import HomePage from './HomePage';
import Brewery from './Brewery';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/brewery/:id" exact element={<Brewery />} />
      </Routes>
    </div>
  );
}

export default App;
