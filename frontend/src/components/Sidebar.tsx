function Sidebar(){
    return(
        <div className = 'sidebar-inner'>
            <aside>
                <div>
                <button className = 'sidebar-button'><h2>Products</h2></button>
                <button className = 'filler'></button>
                <button className = 'sidebar-button'><h2>Cart</h2></button>
                <button className = 'filler'></button>              
                <button className = 'sidebar-button'><h2>Payment</h2></button>
                </div>
            </aside>
        </div>
    )
}
export default Sidebar;