import { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import { PackagePlus, Trash2, Box } from 'lucide-react';

function Admin() {
    const { products, addProduct, deleteProduct } = useProducts();
    const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '', image: '/hero.png' });

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newProduct.name || !newProduct.price) return;
        
        addProduct({
            name: newProduct.name,
            description: newProduct.description,
            price: Number(newProduct.price),
            image: newProduct.image
        });
        
        // Reset form
        setNewProduct({ name: '', description: '', price: '', image: '/hero.png' });
    };

    return (
        <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
            <div className="page-header" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Admin Dashboard</div>
            
            <div style={{ 
                background: 'rgba(0, 0, 0, 0.3)', 
                backdropFilter: 'blur(20px)',
                padding: '32px', 
                borderRadius: '24px', 
                marginBottom: '40px', 
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}>
                <h2 style={{ marginTop: 0, color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem', marginBottom: '24px' }}>
                    <PackagePlus size={24} /> Add New Product
                </h2>
                <form onSubmit={handleAdd} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                        <label style={{ color: '#cbd5e1' }}>Product Name</label>
                        <input 
                            value={newProduct.name} 
                            onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} 
                            placeholder="e.g. Mechanical Keyboard" 
                            required 
                            style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.15)', fontSize: '1rem', padding: '14px' }}
                        />
                    </div>
                    <div>
                        <label style={{ color: '#cbd5e1' }}>Price ($)</label>
                        <input 
                            type="number" 
                            value={newProduct.price} 
                            onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} 
                            placeholder="e.g. 150" 
                            required 
                            style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.15)', fontSize: '1rem', padding: '14px' }}
                        />
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                        <label style={{ color: '#cbd5e1' }}>Description</label>
                        <textarea 
                            value={newProduct.description} 
                            onChange={(e) => setNewProduct({...newProduct, description: e.target.value})} 
                            placeholder="Short description..." 
                            rows={3}
                            style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.15)', fontSize: '1rem', padding: '14px', resize: 'none' }}
                        />
                    </div>
                    <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end' }}>
                        <button type="submit" style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)', color: 'white', border: 'none', padding: '14px 32px', borderRadius: '12px', cursor: 'pointer', fontWeight: 600, fontSize: '1.1rem', boxShadow: '0 4px 15px rgba(56, 189, 248, 0.4)', transition: 'transform 0.2s' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                            Add Product
                        </button>
                    </div>
                </form>
            </div>

            <h2 style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '10px', textShadow: '0 2px 4px rgba(0,0,0,0.3)', fontSize: '1.8rem' }}>
                <Box size={28} color="#38bdf8"/> Current Inventory
            </h2>
            
            <div style={{
                background: 'rgba(0, 0, 0, 0.3)', 
                backdropFilter: 'blur(20px)',
                borderRadius: '24px', 
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                overflow: 'hidden',
                marginTop: '20px'
            }}>
                {products.length === 0 ? (
                    <p style={{ color: '#cbd5e1', padding: '32px', textAlign: 'center', margin: 0, fontStyle: 'italic' }}>Inventory is currently empty.</p>
                ) : (
                    <table style={{ width: '100%', borderCollapse: 'collapse', background: 'transparent', border: 'none' }}>
                        <thead style={{ background: 'rgba(0,0,0,0.4)' }}>
                            <tr>
                                <th style={{ padding: '20px', textAlign: 'left', color: '#94a3b8', fontWeight: 600, border: 'none' }}>Image</th>
                                <th style={{ padding: '20px', textAlign: 'left', color: '#94a3b8', fontWeight: 600, border: 'none' }}>Name</th>
                                <th style={{ padding: '20px', textAlign: 'left', color: '#94a3b8', fontWeight: 600, border: 'none' }}>Price</th>
                                <th style={{ padding: '20px', textAlign: 'right', color: '#94a3b8', fontWeight: 600, border: 'none' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id} style={{ borderTop: '1px solid rgba(255,255,255,0.05)', transition: 'background 0.2s' }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                                    <td style={{ padding: '20px', border: 'none' }}>
                                        <img src={product.image} alt={product.name} style={{ width: '48px', height: '48px', borderRadius: '12px', objectFit: 'cover', background: '#fff', padding: '2px' }} />
                                    </td>
                                    <td style={{ padding: '20px', fontWeight: 500, color: '#f8fafc', border: 'none', fontSize: '1.1rem' }}>{product.name}</td>
                                    <td style={{ padding: '20px', color: '#e2e8f0', border: 'none', fontSize: '1.1rem' }}>${product.price}</td>
                                    <td style={{ padding: '20px', textAlign: 'right', border: 'none' }}>
                                        <button 
                                            onClick={() => deleteProduct(product.id)}
                                            style={{ 
                                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                                background: 'rgba(239, 68, 68, 0.15)', color: '#fca5a5', 
                                                border: '1px solid rgba(239, 68, 68, 0.3)', 
                                                padding: '10px 16px', borderRadius: '8px', 
                                                cursor: 'pointer', transition: 'all 0.2s',
                                                fontWeight: 500
                                            }}
                                            onMouseOver={e => { e.currentTarget.style.background = 'rgba(239, 68, 68, 0.25)'; e.currentTarget.style.transform = 'scale(1.05)' }}
                                            onMouseOut={e => { e.currentTarget.style.background = 'rgba(239, 68, 68, 0.15)'; e.currentTarget.style.transform = 'scale(1)' }}
                                        >
                                            <Trash2 size={16} /> Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default Admin;
