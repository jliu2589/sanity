import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
};

export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}
