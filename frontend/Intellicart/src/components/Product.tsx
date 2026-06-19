type ProductProps = {
    image:string;
    name:string;
    description:string;
    price:number;
};
function Product({
   image,
   name,
   description,
   price 
}: ProductProps) {
    return(
        <div className = 'product-card'>
            <img src={image} alt={name}/>
            <h1>{name}</h1>
            <h2>{price}</h2>
            <h3>{description}</h3>
            <button>Click me</button>
        </div>
    )
}
export default Product;