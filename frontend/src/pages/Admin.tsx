import { useState } from 'react';
import { useProducts, type ProductItem } from '../context/ProductContext';

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
            <div className="page-header">Admin Dashboard</div>
            
            <div style={{ background: 'rgba(30, 41, 59, 0.4)', padding: '24px', borderRadius: '16px', marginBottom: '40px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h2 style={{ marginTop: 0, color: '#38bdf8' }}>Add New Product</h2>
                <form onSubmit={handleAdd} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                        <label>Product Name</label>
                        <input 
                            value={newProduct.name} 
                            onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} 
                            placeholder="e.g. Mechanical Keyboard" 
                            required 
                        />
                    </div>
                    <div>
                        <label>Price ($)</label>
                        <input 
                            type="number" 
                            value={newProduct.price} 
                            onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} 
                            placeholder="e.g. 150" 
                            required 
                        />
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                        <label>Description</label>
                        <textarea 
                            value={newProduct.description} 
                            onChange={(e) => setNewProduct({...newProduct, description: e.target.value})} 
                            placeholder="Short description..." 
                            rows={3}
                        />
                    </div>
                    <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end' }}>
                        <button type="submit" style={{ background: '#3b82f6', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}>
                            + Add Product
                        </button>
                    </div>
                </form>
            </div>

            <h2 style={{ color: '#f8fafc' }}>Current Inventory</h2>
            {products.length === 0 ? (
                <p style={{ color: '#94a3b8' }}>Inventory is empty.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th style={{ textAlign: 'right' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>
                                    <img src={product.image} alt={product.name} style={{ width: '40px', height: '40px', borderRadius: '8px', objectFit: 'cover' }} />
                                </td>
                                <td style={{ fontWeight: 500 }}>{product.name}</td>
                                <td>${product.price}</td>
                                <td style={{ textAlign: 'right' }}>
                                    <button 
                                        onClick={() => deleteProduct(product.id)}
                                        style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', transition: 'all 0.2s' }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Admin;
