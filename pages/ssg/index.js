//////SSG

import BackButton from '@/components/backbutton';
import React from 'react';

export default function SSGPage({ data }) {
  return (
    <>
    {/* <div>
    <BackButton/>
    </div> */}
    
    <div>
      {data.map(item => (
        <div key={item.id}>
          <h2 className='text-white font-bold'>{item.name}</h2>
          <p className='text-white font-bold'>{item.phone}</p>
          <br/>
        </div>
      ))}   
    </div>

    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
