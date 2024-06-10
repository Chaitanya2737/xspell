import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');

  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setResult("Word not found in the dictionary.");
      return;
    }

    const found = dictionary.find(entry => entry.word.toLowerCase() === searchTerm.toLowerCase());
    if (found) {
      setResult(found.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div className="App">
      <h1>XDictionary</h1>
      <input 
        type="text" 
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Enter a word" 
      />
      <button onClick={handleSearch}>Search</button>
      <p>Definition:</p>
      <p>{result}</p>
    </div>
  );
}

export default App;
