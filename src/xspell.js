import React, { useState } from 'react';
import './App.css';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

const XSpellCheck = () => {
  const [text, setText] = useState('');
  const [correction, setCorrection] = useState('');

  const handleTextChange = (event) => {
    const inputText = event.target.value.toLowerCase(); // Convert input text to lowercase for case-insensitivity
    setText(inputText);

    // Check if input text matches any key in the custom dictionary
    for (const [wrongWord, correctWord] of Object.entries(customDictionary)) {
      if (inputText.includes(wrongWord)) {
        setCorrection(`Did you mean: ${correctWord}?`);
        return;
      }
    }
    // If no misspelling found, clear correction suggestion
    setCorrection('');
  };

  return (
    <div className="XSpellCheck">
      <h1>XSpellCheck</h1>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here"
      ></textarea>
      {correction && <p>{correction}</p>}
    </div>
  );
};

export default XSpellCheck;
