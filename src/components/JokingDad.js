import { useEffect, useState } from 'react';
import React from 'react';
import './JokingDad.css';

export default function JokingDad() {
  const [index, setIndex] = useState(0);
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    // displayNextJoke();
  }
  )

  function displayPreviousJoke() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function displayNextJoke() {
    if (index < jokes.length - 1) {
      setIndex(index + 1);
    }
    else {
      const request = new XMLHttpRequest();
      request.open('GET', 'https://icanhazdadjoke.com/');
      request.setRequestHeader('Accept', 'application/json');
      request.onload = () => {
        console.log(request.response)
        if (request.status === 200) {
          const response = JSON.parse(request.response)
          const newJoke = response.joke;
          setJokes([
            ...jokes,
            newJoke
          ]);
          setIndex(jokes.length);
        }
      };
      request.send();
    }
  }

  return (
    <div className="JokingDad">
      <div className='JokingDad-highlighted-row'>
        <img src="./jerry-stiller.jpg" />
        <p>{jokes[index]}</p>
      </div>
      <div className='JokingDad-row'>
        {jokes.length > 0 && index > 0 ? <button onClick={displayPreviousJoke}>Previous</button> : null}
        <button onClick={displayNextJoke}>Next</button>
      </div>
    </div>
  );
}