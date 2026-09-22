
const Productspage = async () => {
    const response = await fetch("http://fakestoreapi.com/products",
        {
            cache: "force-cache"
        }
    )

    if (!response.ok) {
        throw new Error("Failed to fetch products")
    }

    const products = await response.json();

    return (
        <div>
            <h1>Products Details</h1>
            {products.map((product: { id: number, title: string, price:number }) => (
                <div key={product.id}>
                    <p>{product.title}</p>
                    <p>Price: ${product.price}</p>
                    <br />

                </div>
            ))}

        </div>
    );
};

export default Productspage;