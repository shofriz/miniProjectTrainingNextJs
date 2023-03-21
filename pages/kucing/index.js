import React from 'react';

function kucing({ data }) {
  return (
    <div>
      
        <h1>Hey !!</h1>
        {data.setup && <p>{data.setup}</p>}
        {data.delivery && <p>{data.delivery}</p>}
        {!data.setup && !data.delivery && <p>{data.joke}</p>}
      
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://v2.jokeapi.dev/joke/any');
  const data = await res.json();

  return {
    props: { data },
  };
}

export default kucing;