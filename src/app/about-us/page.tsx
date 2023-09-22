import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
};

function page() {
  return (
    <div>
      <h1>About Us</h1>
    </div>
  );
}

export default page;
