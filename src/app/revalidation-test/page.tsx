

const RevalidationPage =async () => {
    const response = await fetch("http://fakestoreapi.com/products",
        {
            next: {
                revalidate:10,
            }
        }
    );

    if(!response.ok){
        throw new Error("Failed to fetch products")
    }
    const products = await response.json();

    return (
        <div>
            <h1>Products</h1>
            {products.map((product: {id:number, title: string; price: number})=>(
                <div key={product.id}>
                    <p>{product.title}</p>
                    <p>Price: ${product.price}</p>
                    <br />

                </div>
            ))}
            
        </div>
    );
};

export default RevalidationPage;