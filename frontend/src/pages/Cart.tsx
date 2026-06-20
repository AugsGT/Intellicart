import { useCart } from '../context/CartContext';

function Cart() {
    // Access global cart state instead of local state
    const { cartItems, updateQuantity, removeFromCart, calculateTotal } = useCart();

    return (
        <div className="cart-page" style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center' }}>Your Cart</h1>
            
            {cartItems.length === 0 ? (
                <h2 style={{ textAlign: 'center' }}>Your cart is empty!</h2>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
                    {/* Loop through cart items and render them */}
                    {cartItems.map(item => (
                        <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>${item.price}</p>
                                </div>
                            </div>
                            
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                <button onClick={() => removeFromCart(item.id)} style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    
                    {/* Display Total */}
                    <div style={{ alignSelf: 'flex-end', marginTop: '20px' }}>
                        <h2>Total: ${calculateTotal()}</h2>
                        <button style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', fontSize: '18px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;