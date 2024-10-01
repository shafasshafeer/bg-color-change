// src/App.jsx
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [color, setColor] = useState('#ffffff');

  const changeColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
  };

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <h1 style={{ color: '#000' }}>Background Color Changer</h1>
      <button onClick={changeColor} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Change Background Color
      </button>
    </div>
  );
};

export default App;
