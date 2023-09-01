import React, { useState } from 'react';
import axios from 'axios';

const alphbtns = {
  width: "35px",
  height: "35px",
  margin: "3px"
}

function AtoZ({ setSearchResults }) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const [activeLetter, setActiveLetter] = useState(''); // Default active letter is 'A'

  const handleButtonClick = async (letter) => {
    try {
      const response = await axios.get(`https://konnectserver.infocusrx.work/getbyletter?l=${letter}`);
      setSearchResults(response.data);
      setActiveLetter(letter); // Set the clicked letter as active
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {alphabet.map((letter) => (
        <button
          key={letter}
          className={`btn btn-outline-dark ${activeLetter === letter ? 'active' : ''}`}
          style={alphbtns}
          onClick={() => handleButtonClick(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

export default AtoZ;

 