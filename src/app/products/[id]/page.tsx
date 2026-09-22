// import { notFound } from "next/navigation";

// interface PageProps {
//   params: Promise<{
//     id: string;
//   }>;
// }

// const ProductDetails = async ({ params }: PageProps) => {
//   const { id } = await params;

//   if (id !== "1") {
//     notFound();
//   }

//   return (
//     <div>
//       <h1>Product Details</h1>
//       <p>Product Id: {id}</p>
//     </div>
//   );
// };

// export default ProductDetails;



interface PageProps{
  params:Promise<{
    id:string;
  }>;
}

const ProductDetails = async({params}:PageProps)=>{
  const {id}=await params;
  await new Promise((resolve)=>setTimeout(resolve, 3000));
  const response=await fetch(`http://fakestoreapi.com/products/${id}`);
  if(!response.ok){
    throw new Error("Failed to fetch products");
  }
  const product=await response.json();

  return(
    <div>
      <h1>Product Details</h1>
      <p>Product Id: {id}</p>
      <h1>{product.title}</h1>
      <p>Prcie: ${product.price}</p>
    </div>
  )

}
export default ProductDetails;