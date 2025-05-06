import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import toast from 'react-hot-toast'
import { auth} from "../../firebaseauth/Firebaseauth";


const Navbar = ({ cart, username }) => {
  const [menuOpen, setMenuOpen] = useState(false);


  const handlelogout=()=>{
    auth.signOut().then(()=>{
toast.success("logout successfully")
    }).catch((error)=>{
      toast.error(error)
    })

    } 



  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4 md:px-6">
        {/* Logo */}
        <div>
          <h3 className="text-2xl font-bold">
            <Link to="/">
              X<span className="text-red-600">Shop</span>
            </Link>
          </h3>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg font-semibold">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <Link to="/allproduct" className="hover:text-gray-900">All Products</Link>
          <Link to="/contectpage" className="hover:text-gray-900">Contact</Link>
          <Link to="/about" className="hover:text-gray-900">About</Link>
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
        {username ? (
  <>  <Link to="/login">

    <button
      onClick={handlelogout}
      className="bg-gray-100 py-1 px-3 rounded hover:bg-gray-200 text-base">
      Logout
    </button>
      </Link>

    <span className="text-red-600 font-bold text-sm ml-2">{username}</span>
  </>
) : (
  <Link to="/login">
    <button className="bg-gray-100 py-1 px-3 rounded hover:bg-gray-200 text-base">
      Login
    </button>
  </Link>
)}

          <Link to="/cart" className="relative flex items-center">
            <FaShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
          {/* Mobile menu toggle */}
          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <GiHamburgerMenu size={25} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50">
          <div className="fixed top-0 left-0 w-64 h-full bg-white p-6 shadow-lg">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={() => setMenuOpen(false)}
            >
              <RxCross2 size={28} />
            </button>
            <nav className="mt-10 flex flex-col space-y-5 text-lg font-medium">
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/allproduct" onClick={() => setMenuOpen(false)}>All Products</Link>
              <Link to="/means" onClick={() => setMenuOpen(false)}>Mens</Link>
              <Link to="/women" onClick={() => setMenuOpen(false)}>Women</Link>
              <Link to="/contectpage" onClick={() => setMenuOpen(false)}>Contact</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
