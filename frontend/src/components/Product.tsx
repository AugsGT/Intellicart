import { useCart } from '../context/CartContext';

type ProductProps = {
    id: number; // 1. Added ID prop
    image: string;
    name: string;
    description: string;
    price: number;
};

function Product({
    id,
    image,
    name,
    description,
    price 
}: ProductProps) {
    // 2. Access the addToCart function from our global context
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id,
            image,
            name,
            price,
            quantity: 1 // Start with a quantity of 1 when first added
        });
        alert(`${name} added to cart!`); // Optional user feedback
    };

    return(
        <div className='product-card'>
            <img src={image} alt={name}/>
            <h1>{name}</h1>
            <h2>${price}</h2>
            <h3>{description}</h3>
            {/* 3. Call handleAddToCart on button click */}
            <button onClick={handleAddToCart} style={{ cursor: 'pointer', padding: '10px 15px', backgroundColor: '#007BFF', color: '#FFF', border: 'none', borderRadius: '5px' }}>
                Add to Cart
            </button>
        </div>
    )
}

export default Product;