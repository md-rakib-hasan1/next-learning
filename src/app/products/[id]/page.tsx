import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProductDetails = async ({ params }: PageProps) => {
  const { id } = await params;

  if (id !== "1") {
    notFound();
  }

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product Id: {id}</p>
    </div>
  );
};

export default ProductDetails;