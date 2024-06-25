import { useState } from 'react';
import React from 'react';
import './JokingDad.css';

export default function JokingDad() {
  const [joke, setJoke] = useState('Click the button for a new joke!');

  function handleClick() {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://icanhazdadjoke.com/');
    request.setRequestHeader('Accept', 'application/json');
    request.onload = () => {
      console.log(request.response)
      if (request.status === 200) {
        const response = JSON.parse(request.response)
        setJoke(response.joke);
      }
    };
    request.send();
  }

  return (
    <div className="JokingDad">
      <img src="./jerry-stiller.jpg" />
      <p>{joke}</p>
      <button onClick={handleClick}>Get Another Joke</button>
    </div>
  );
}