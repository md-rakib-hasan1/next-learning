import Link from 'next/link';
import React from 'react';
import CounterPage from './counter';

// const AppPage = () => {
//   return (
//     <div>
//       <h1>Home Page</h1><br />
//       <Link href="/">Home</Link><br />
//       <Link href="/about">About</Link>
//       <br />
//       <Link href="/products">Products</Link>
//       <br />
//       <Link href="/products/phones">Phones</Link>
//       <br />
//       <Link href="/products/laptops">Laptops</Link>
//       <CounterPage/>
//     </div>
//   );
// };

// export default AppPage;

import Image from 'next/image';

const HomePage = () => {
  return (
    <main>
      <h1 className="custom-title">
        Hello Next.js
      </h1>

      <Image
      src="/images/RAKIB.jpg"
      alt="Profile"
      width={1200}
      height={300}
      quality={90}
      className='w-full h-auto'
      />
    </main>
  );
};

export default HomePage;