import { User, Package, Settings, LogOut, Mail, Calendar } from 'lucide-react';

function Profile() {
    // Mock user data
    const user = {
        name: "Ravid Admin",
        email: "ravid@intellicart.com",
        joinDate: "June 2026",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ravid"
    };

    const mockOrders = [
        { id: "ORD-9482", date: "Jun 18, 2026", items: 2, total: 1698, status: "Delivered" },
        { id: "ORD-9210", date: "May 22, 2026", items: 1, total: 399, status: "Shipped" },
    ];

    return (
        <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
            <div className="page-header" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>My Account</div>

            <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '40px' }}>
                {/* Profile Sidebar */}
                <div style={{ 
                    background: 'rgba(0, 0, 0, 0.3)', 
                    backdropFilter: 'blur(20px)',
                    padding: '30px', 
                    borderRadius: '24px', 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    height: 'fit-content',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '30px' }}>
                        <div style={{ padding: '4px', background: 'linear-gradient(135deg, #38bdf8, #818cf8)', borderRadius: '50%', marginBottom: '15px' }}>
                            <img src={user.avatar} alt="Avatar" style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#fff', display: 'block' }} />
                        </div>
                        <h2 style={{ margin: '0 0 5px 0', color: '#fff', fontSize: '1.5rem' }}>{user.name}</h2>
                        <p style={{ margin: '5px 0', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                            <Mail size={16}/> {user.email}
                        </p>
                        <p style={{ margin: '5px 0 0 0', color: '#94a3b8', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                            <Calendar size={16}/> Joined {user.joinDate}
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <button style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', padding: '14px', borderRadius: '12px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s', fontWeight: 500 }}>
                            <User size={20} color="#38bdf8" /> Personal Info
                        </button>
                        <button style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'transparent', color: '#cbd5e1', border: '1px solid transparent', padding: '14px', borderRadius: '12px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s', fontWeight: 500 }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                            <Settings size={20} /> Account Settings
                        </button>
                        <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '10px 0' }}></div>
                        <button style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(239, 68, 68, 0.15)', color: '#fca5a5', border: 'none', padding: '14px', borderRadius: '12px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s', fontWeight: 500 }} onMouseOver={e => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.25)'} onMouseOut={e => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.15)'}>
                            <LogOut size={20} /> Sign Out
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div>
                    <h2 style={{ color: '#fff', marginTop: 0, display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.8rem', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                        <Package size={28} color="#38bdf8" /> Order History
                    </h2>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '24px' }}>
                        {mockOrders.map(order => (
                            <div key={order.id} style={{ 
                                background: 'rgba(0, 0, 0, 0.25)', 
                                backdropFilter: 'blur(10px)',
                                padding: '24px', 
                                borderRadius: '16px', 
                                border: '1px solid rgba(255,255,255,0.1)', 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center',
                                transition: 'transform 0.2s',
                                cursor: 'pointer',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                            }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div>
                                    <h3 style={{ margin: '0 0 8px 0', color: '#fff', fontSize: '1.2rem' }}>{order.id}</h3>
                                    <p style={{ margin: 0, color: '#cbd5e1', fontSize: '0.95rem' }}>{order.date} • <span style={{ color: '#94a3b8' }}>{order.items} items</span></p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <h3 style={{ margin: '0 0 8px 0', color: '#fff', fontSize: '1.3rem' }}>${order.total}</h3>
                                    <span style={{ 
                                        background: order.status === 'Delivered' ? 'rgba(74, 222, 128, 0.2)' : 'rgba(56, 189, 248, 0.2)', 
                                        color: order.status === 'Delivered' ? '#4ade80' : '#38bdf8', 
                                        padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600,
                                        border: `1px solid ${order.status === 'Delivered' ? 'rgba(74, 222, 128, 0.3)' : 'rgba(56, 189, 248, 0.3)'}`
                                    }}>
                                        {order.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;