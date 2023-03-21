////SSR + Dynamic Route + mapping array

import BackButton from '@/components/backbutton';
import Link from 'next/link';
import React, { useState } from 'react';

function CatImages({ data }) {
    const cats = data.slice(0, 8);
    const [searchText, setSearchText] = useState('');

    return (
        <>
        <BackButton/>
        <div className='mt-8 mb-8 bg-gray-400 bg-cover flex flex-col justify-center items-center'>
            <p className='text-2xl text-white font-bold'>The Image Is Clickable !!!(Dynamic Route)</p>
            <div className="mt-8 grid grid-cols-4 gap-4">
                {cats.map((cat) => (
                    <div key={cat.id} className="flex items-center justify-center">
                        <Link href={{ pathname: '/cat-images/[id]', query: { id: cat.id, data: JSON.stringify(cat) } }}>
                            <img src={cat.url} alt={`Cat ${cat.id}`} className="h-64 w-64 object-cover" />
                        </Link>
                    </div>
                ))}
            </div>

            <div className="mt-8 mb-8 flex flex-col items-center">
                <label htmlFor="search" className="mr-2">
                    Cat Says(fitur blom jadi):
                </label>
                <input
                    type="text"
                    id="search"
                    value={searchText}
                    className="border-2 rounded px-2 py-1"
                />
            </div>
        </div>
        </>
    );
}

export async function getServerSideProps() {
    const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=20');
    const data = await res.json();

    return {
        props: { data },
    };
}

export default CatImages;
