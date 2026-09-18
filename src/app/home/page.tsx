// import Link from 'next/link';
// import React from 'react';

// const HomePage = () => {
//     return (
//         <div>
//             <h2>Home Page</h2>
//             <Link href="/about">Go to About</Link>
//         </div>
//     );
// };

// export default HomePage;


"use client";

import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard");
  };

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={handleClick}>
        Go to Dashboard
      </button>
    </div>
  );
};

export default Home;