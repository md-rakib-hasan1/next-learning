interface ProductCardProps{
    
    title:string;
    price:number;
}

const ProductsCard = ({title,price}:ProductCardProps) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>Price: ${price}</p>

            
        </div>
    );
};

export default ProductsCard;