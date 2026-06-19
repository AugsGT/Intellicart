import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Product from './components/Product';
import { useState } from "react";
const products = [
  {
    image: "frontend/Intellicart/src/assets/hero.png",
    name: "Product",
    description: "the product",
    price: 2222
  },
  {
    image: "frontend/Intellicart/src/assets/hero.png",
    name: "Product1",
    description: "the product",
    price: 2222
  },
   {
    image: "frontend/Intellicart/src/assets/hero.png",
    name: "Product",
    description: "the product",
    price: 2222
  },
   {
    image: "frontend/Intellicart/src/assets/hero.png",
    name: "Product",
    description: "the product",
    price: 2222
  },
   {
    image: "frontend/Intellicart/src/assets/hero.png",
    name: "Product",
    description: "the product",
    price: 2222
  }
];
function App() {
  const [open, setOpen] = useState(true);
  return (
    <div>
    <div className='main'>
      <div>
        <button className='collapse-button'
          onClick={() => setOpen(!open)}>Collapse</button>
      </div>
      <div className={open ? "sidebar" : "sidebar sidebar-collapsed"}>
        <Sidebar />
      </div>
      <div className="orientation">
      <Navbar />
      <h1 style={{textAlign: 'center'}}>Featured Products....</h1>
      <div className='products'>
      {
    products.map((product) => (
      <Product
        key={product.name}
        image={product.image}
        name={product.name}
        description={product.description}
        price={product.price} />
    ))
  }
    </div>
    </div >
    </div>
    </div>
  );
}
export default App;