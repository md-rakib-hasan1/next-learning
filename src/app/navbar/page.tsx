import Link from 'next/link';
import React from 'react';

const NavbarPage = () => {
    return (
        <div>
            <nav>
                <Link href="/">Home</Link><br />
                <Link href="/about">About</Link><br />
                <Link href="/products">Products</Link><br />
                <Link href="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default NavbarPage;