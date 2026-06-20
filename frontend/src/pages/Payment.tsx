import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Calendar, Lock, MapPin, User, CheckCircle2 } from 'lucide-react';

function Payment() {
    const { cartItems, calculateTotal, removeFromCart } = useCart();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate API call and payment processing
        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);
            
            // Clear cart by removing all items
            cartItems.forEach(item => removeFromCart(item.id));
            
            setTimeout(() => {
                navigate('/');
            }, 3000);
        }, 1500);
    };

    if (isSuccess) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#4ade80', animation: 'fadeIn 0.5s ease-out' }}>
                <CheckCircle2 size={100} strokeWidth={1.5} />
                <h1 style={{ marginTop: '20px', textShadow: '0 2px 10px rgba(74, 222, 128, 0.3)' }}>Payment Successful!</h1>
                <p style={{ color: '#f8fafc', fontSize: '1.2rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Redirecting you to the store...</p>
            </div>
        );
    }

    return (
        <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
            <div className="page-header" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Secure Checkout</div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '40px' }}>
                {/* Payment Form */}
                <div style={{ 
                    background: 'rgba(0, 0, 0, 0.3)', 
                    backdropFilter: 'blur(20px)',
                    padding: '32px', 
                    borderRadius: '24px', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}>
                    <h2 style={{ marginTop: 0, color: '#fff', fontSize: '1.5rem', marginBottom: '24px' }}>Payment Details</h2>
                    <form onSubmit={handlePayment}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1' }}><User size={16}/> Cardholder Name</label>
                        <input type="text" placeholder="John Doe" required style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.15)', fontSize: '1rem', padding: '14px' }} />

                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', marginTop: '8px' }}><CreditCard size={16}/> Card Number</label>
                        <input type="text" placeholder="**** **** **** ****" required style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.15)', fontSize: '1rem', padding: '14px' }} />

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '8px' }}>
                            <div>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1' }}><Calendar size={16}/> Expiry Date</label>
                                <input type="text" placeholder="MM/YY" required style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.15)', fontSize: '1rem', padding: '14px' }} />
                            </div>
                            <div>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1' }}><Lock size={16}/> CVC</label>
                                <input type="password" placeholder="***" required style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.15)', fontSize: '1rem', padding: '14px' }} />
                            </div>
                        </div>

                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', marginTop: '8px' }}><MapPin size={16}/> Shipping Address</label>
                        <textarea rows={3} placeholder="123 Tech Lane..." required style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.15)', fontSize: '1rem', padding: '14px', resize: 'none' }} />

                        <button type="submit" disabled={isProcessing || cartItems.length === 0} style={{ 
                            background: isProcessing ? 'rgba(255,255,255,0.1)' : 'linear-gradient(135deg, #3b82f6, #818cf8)', 
                            color: isProcessing ? '#94a3b8' : 'white', 
                            border: 'none', 
                            padding: '18px', 
                            borderRadius: '12px', 
                            cursor: isProcessing ? 'not-allowed' : 'pointer', 
                            fontWeight: 700, 
                            width: '100%', 
                            marginTop: '24px', 
                            fontSize: '1.2rem',
                            boxShadow: isProcessing ? 'none' : '0 10px 20px rgba(59, 130, 246, 0.4)',
                            transition: 'all 0.2s',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px'
                        }} onMouseOver={e => { if(!isProcessing) e.currentTarget.style.transform = 'translateY(-2px)' }} onMouseOut={e => { if(!isProcessing) e.currentTarget.style.transform = 'translateY(0)' }}>
                            {isProcessing ? 'Processing...' : (
                                <>
                                    <Lock size={20} /> Pay ${calculateTotal()}
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Order Summary */}
                <div style={{ 
                    background: 'rgba(0, 0, 0, 0.4)', 
                    backdropFilter: 'blur(20px)',
                    padding: '32px', 
                    borderRadius: '24px', 
                    border: '1px solid rgba(255,255,255,0.05)', 
                    height: 'fit-content',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}>
                    <h2 style={{ marginTop: 0, color: '#38bdf8', fontSize: '1.5rem', marginBottom: '24px' }}>Order Summary</h2>
                    {cartItems.length === 0 ? (
                        <p style={{ color: '#94a3b8', fontStyle: 'italic' }}>Your cart is empty.</p>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {cartItems.map(item => (
                                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', color: '#e2e8f0', fontSize: '1.05rem' }}>
                                    <span><span style={{ color: '#94a3b8' }}>{item.quantity}x</span> {item.name}</span>
                                    <span style={{ fontWeight: 500 }}>${item.price * item.quantity}</span>
                                </div>
                            ))}
                            <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '16px 0' }} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.3rem', fontWeight: 700, color: '#fff' }}>
                                <span>Total</span>
                                <span style={{ color: '#38bdf8' }}>${calculateTotal()}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Payment;