import React from 'react';
interface PageProps{
    searchParams:Promise<{
        search?:string;
        category?: string;
        // brand?:string;
    }>
}

const ProductPage = async ({searchParams}: PageProps) => {
    const params = await searchParams;

    return (
        <div>
            <h1>Products</h1>
            <p>Search: {params.search}</p>
            <p>Category: {params.category}</p>
            {/* <p>Brand: {params.brand}</p> */}
        </div>
    );
};

export default ProductPage;