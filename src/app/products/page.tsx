
// SERVER COMPONENT:

// import React from 'react';
// interface PageProps{
//     searchParams:Promise<{
//         search?:string;
//         category?: string;
//         // brand?:string;
//     }>
// }

// const ProductPage = async ({searchParams}: PageProps) => {
//     const params = await searchParams;

//     return (
//         <div>
//             <h1>Products</h1>
//             <p>Search: {params.search}</p>
//             <p>Category: {params.category}</p>
//             {/* <p>Brand: {params.brand}</p> */}
//         </div>
//     );
// };

// export default ProductPage;






// CLIENT COMPONENT:


"use client";

import { useSearchParams } from "next/navigation";

const Products = () => {
    const searchParams = useSearchParams();

    const search = searchParams.get("search");
    const category = searchParams.get("category");

    return (
        <div>
            <h1>Products</h1>
            <p>Search: {search}</p>
            <p>Category: {category}</p>
        </div>
    );
};

export default Products;