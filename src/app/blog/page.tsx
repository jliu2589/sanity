import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
};

function page() {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
}

export default page;
