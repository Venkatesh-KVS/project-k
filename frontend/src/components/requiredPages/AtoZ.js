import React from 'react';
import axios from 'axios';

const alphbtns = {
  width: "35px",
  height: "35px",
  margin: "3px"
}

function AtoZ({ setSearchResults }) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const handleButtonClick = async (letter) => {
    try {
      // const response = await axios.get(`http://localhost:8081/getbyletter?l=${letter}`);
      const response = await axios.get(`https://konnectserver.infocusrx.work/getbyletter?l=${letter}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* <AlphabetButtons letters={alphabet} /> */}
      {alphabet.map((letter) => (
        <button key={letter} className='btn btn-outline-dark' style={alphbtns} onClick={() => handleButtonClick(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
}

export default AtoZ;
