/////CSR

import BackButton from '@/components/backbutton';
import React, { useState, useEffect } from 'react';

function Joke({ data }) {
  const [jokeData, setJokeData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://v2.jokeapi.dev/joke/any');
      const json = await res.json();
      setJokeData(json);
    }
    fetchData();
  }, []);

  if (!jokeData && !data) {
    return <div>Loading...</div>;
  }

  const content = data || jokeData;

  return (
    <>
    <BackButton/>
    <div className='bg-gray-400 bg-cover flex justify-center items-center h-screen'>
      <div className='text-center'>
        <h1 className='text-4xl text-white font-bold'>Hey !!</h1>
        {content.setup && <p className='text-2xl text-white font-bold'>{content.setup}</p>}
        {content.delivery && <p className='text-2xl text-white font-bold'>{content.delivery}</p>}
        {!content.setup && !content.delivery && <p className='text-2xl text-white font-bold'>{content.joke}</p>}
      </div>
    </div>
    </>
  );
}

export default Joke;
