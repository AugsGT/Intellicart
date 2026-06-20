import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Navbar() {
    // Access the global cart items
    const { cartItems } = useCart();
    
    // Calculate total quantity of items in the cart
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className='navbar' style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', alignItems: 'center' }}>
            <h2 className="center">Welcome to this Store</h2>
            
            {/* Cart Link with Badge */}
            <Link to="/cart" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', fontSize: '18px' }}>
                Cart {totalItems > 0 && (
                    <span style={{ background: 'red', color: 'white', borderRadius: '50%', padding: '2px 8px', marginLeft: '5px', fontSize: '14px' }}>
                        {totalItems}
                    </span>
                )}
            </Link>
        </div>
    );
}

export default Navbar;