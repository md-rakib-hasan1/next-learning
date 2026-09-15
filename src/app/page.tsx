import Link from 'next/link';
import React from 'react';

const AppPage = () => {
  return (
    <div>
      <h1>Home Page</h1><br />
      <Link href="/">Home</Link><br />
      <Link href="/about">About</Link>
      <br />
      <Link href="/products">Products</Link>
      <br />
      <Link href="/products/phones">Phones</Link>
      <br />
      <Link href="/products/laptops">Laptops</Link>
      
    </div>
  );
};

export default AppPage;