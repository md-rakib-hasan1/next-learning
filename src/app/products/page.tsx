
// // SERVER COMPONENT:





// // import React from 'react';
// // interface PageProps{
// //     searchParams:Promise<{
// //         search?:string;
// //         category?: string;
// //         // brand?:string;
// //     }>
// // }

// // const ProductPage = async ({searchParams}: PageProps) => {
// //     const params = await searchParams;

// //     return (
// //         <div>
// //             <h1>Products</h1>
// //             <p>Search: {params.search}</p>
// //             <p>Category: {params.category}</p>
// //             {/* <p>Brand: {params.brand}</p> */}
// //         </div>
// //     );
// // };

// // export default ProductPage;






// // CLIENT COMPONENT:


// "use client";

// import { useSearchParams } from "next/navigation";

// const Products = () => {
//     const searchParams = useSearchParams();

//     const search = searchParams.get("search");
//     const category = searchParams.get("category");

//     return (
//         <div>
//             <h1>Products</h1>
//             <p>Search: {search}</p>
//             <p>Category: {category}</p>
//         </div>
//     );
// };

// export default Products;




// For ERROR:

// const Products = () => {
//   throw new Error("Something went wrong!");

//   return (
//     <div>
//       <h1>Products Page</h1>
//     </div>
//   );
// };

// export default Products;



// const ProductsPage= async() => {
//     // throw new Error("Failed to load products");
//     await new Promise((resolve)=>setTimeout(resolve, 3000));

//     const response=await fetch("https://fakestoreapi.com/products");
//     if(!response.ok){
//         throw new Error("Failed to fetch products");
//     }
//     const products = await response.json();

//     return (
//         <div>
//             <h1>PRODUCTS</h1>
//             {products.map((product:{id:number; title:string; price:number;})=>(
//                 <div key={product.id}>
//                     <p>{product.title}</p>
//                     <p>Price: ${product.price}</p>

//                 </div>
//             ))}

//         </div>
//     );
// };

// export default ProductsPage;

import ProductsCard from "./productsCard";


interface Product {
    id: number;
    title: string;
    price: number;
}
const ProductsPage = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
        throw new Error("Failed to fetch products.");
    }
    const products: Product[] = await response.json();

    return (
        <div>
            <h1>Products</h1>
            <hr /><br />
            {products.map((product) => (

                <div key={product.id}>
                    <ProductsCard

                        title={product.title}
                        price={product.price}
                    />
                    <hr /><br />
                </div>
            ))}

        </div>
    );
};

export default ProductsPage;