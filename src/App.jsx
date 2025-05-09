import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Allproduct from './Componets/Allproduct/Allproduct';
import Login from './Componets/Login/Login';
import Singup from './Componets/Singup/Singup';
import Means from './Componets/Means/Means';
import Women from './Componets/Kids/Women';
import Cart from './Pages/Cart/Cart';
import Navbar from './Componets/Navbar/Navbar';
import Footer from './Componets/Footer/Footer';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { auth } from './firebaseauth/Firebaseauth';
import { onAuthStateChanged } from 'firebase/auth';
import Chackoutpage from './Componets/Chackoutpage/Chackoutpage';
import Singleproduct from './Pages/Singleproduct/Singleproduct';
import Contectpage from './Pages/Contectpage/Contectpage';
import About from './Pages/About/About';
import React from 'react';


function App() {
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState('');
  const [less, setLess] = useState(0);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Use displayName if available, otherwise use email
        setUsername(user.displayName || user.email);
      } else {
        setUsername('');
      }
    });

    return () => unsubscribe(); // Clean up listener on unmount
  }, []);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(cart.map((item) => (
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleInc = (id) => {
    setCart(cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDec = (id) => {
    setCart(cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return total - less;
  };

  const applyPromoCode = () => {
    if (discount === 'discount10') {
      setLess(getTotalPrice() * 0.1);
      setDiscount('');
    } else {
      alert('Invalid promo code');
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar cart={cart} username={username} />
        <Routes>
          <Route path="/" element={<Home addtocart={addToCart} />} />
          <Route path="/allproduct" element={<Allproduct addtocart={addToCart} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<Singup />} />
          <Route path="/means" element={<Means addtocart={addToCart} />} />
          <Route path="/women" element={<Women addtocart={addToCart} />} />
          <Route path="/cart" element={
            <Cart
              cart={cart}
              discount={discount}
              setdiscount={setDiscount}
              applepromocode={applyPromoCode}
              removeitem={removeItem}
              hadleinc={handleInc}
              hadledec={handleDec}
              gettotelrpice={getTotalPrice}
            />
          } />
          <Route path="/chackout" element={<Chackoutpage />} />
          <Route path="/singleproduct/:productid" element={<Singleproduct addtocart={addToCart} />} />
          <Route path="/contectpage" element={<Contectpage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Toaster />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
