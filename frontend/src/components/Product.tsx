import { useState } from 'react';
import { useCart } from '../context/CartContext';

type ProductProps = {
    id: number;
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
    const { addToCart } = useCart();
    const [showToast, setShowToast] = useState(false);

    const handleAddToCart = () => {
        addToCart({
            id,
            image,
            name,
            price,
            quantity: 1
        });
        
        // Show notification
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return(
        <div className='product-card'>
            <img src={image} alt={name}/>
            <h1>{name}</h1>
            <h2>${price}</h2>
            <h3>{description}</h3>
            <button onClick={handleAddToCart}>
                Add to Cart
            </button>
            
            {showToast && (
                <div style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    background: '#1e293b',
                    color: '#4ade80',
                    padding: '16px 24px',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                    zIndex: 1000,
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    border: '1px solid rgba(255,255,255,0.1)'
                }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    {name} added to cart!
                </div>
            )}
        </div>
    )
}

export default Product;