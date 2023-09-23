import { Metadata } from 'next';
import { useEffect } from 'react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Blog',
};

type Character = {
  id: number;
  name: string;
  image: string;
};

async function getData() {
  const res = await fetch('https://rickandmortyapi.com/api/character');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function page() {
  const data = await getData();

  return (
    <div>
      <h1>Blog</h1>
      {data?.results.map((character: Character) => (
        <div key={character.id}>
          <p>{character.name}</p>
          <Image
            src={character.image}
            alt={character.name}
            width={500}
            height={500}
          />
        </div>
      ))}
    </div>
  );
}

export default page;
