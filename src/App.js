import React, { useState, useEffect, useRef } from "react";
import useWordGame from "./hooks/useWordGame";
import "./App.css";

function App() {
  const {
    textBoxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
  } = useWordGame();
  return (
    <div className="App">
      <h1 className="title">How fast do you type?</h1>
      <textarea
        ref={textBoxRef}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      />
      <h4 className="time-remaining">Time remaining: {timeRemaining}</h4>
      <button
        className="start-game"
        onClick={startGame}
        disabled={isTimeRunning}
      >
        Start
      </button>
      <h1 className="word-count">Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
