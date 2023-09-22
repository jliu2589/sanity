import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glasses',
};

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>Glasses</div>
    </main>
  );
}
