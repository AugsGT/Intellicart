import { Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(true);
  return (
    <div>
    <div className='main'>

      <div className={open ? "sidebar" : "sidebar sidebar-collapsed"}>
        <Sidebar open={open} setOpen={setOpen} />
      </div>
      <div className="orientation">
      <Navbar />
      <Routes>
        <Route
        path="/"
        element={<ProductPage />}
        />

        <Route
        path="/cart"
        element={<Cart />}
        />
        <Route
        path="/Payment"
        element={<Payment/>}/>
        <Route
        path="/Profile"
        element={<Profile/>}/>
      </Routes>
  
    </div>
    </div >
    </div>
  );
}
export default App;