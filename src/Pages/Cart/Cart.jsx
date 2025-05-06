import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modelsection from '../../Componets/Modalsection/Modelsection';
import Cartemty from '../../Componets/Cartemty/Cartemty';

const Cart = ({ cart, hadledec, hadleinc, removeitem, gettotelrpice, applepromocode, setdiscount, discount }) => {
  const navigate = useNavigate();

  return (
<>
    {
      !cart.length?<Cartemty/>:   <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row shadow-md my-10">
          {/* Left Side - Cart Items */}
          <div className="md:w-3/4 w-full bg-white px-4 sm:px-6 py-10">
            <div className="flex justify-between border-b pb-4">
              <h1 className="font-semibold text-xl sm:text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-xl sm:text-2xl">{cart.length} Items</h2>
            </div>

            {/* Headers */}
            <div className="hidden md:flex mt-6 mb-4">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
            </div>

            {cart.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row items-center border-b py-5">
                <div className="flex w-full md:w-2/5 mb-4 md:mb-0">
                  <img className="w-20 h-20 object-cover" src={item.thumbnail} alt={item.title} />
                  <div className="ml-4 flex flex-col justify-between">
                    <span className="font-bold text-sm">{item.title}</span>
                    <span className="text-red-500 text-xs">{item.category}</span>
                    <button onClick={() => removeitem(item.id)} className="font-semibold hover:text-red-500 text-gray-500 text-xs mt-1">Remove</button>
                  </div>
                </div>

                <div className="flex justify-center md:w-1/5 mb-4 md:mb-0">
                  <button onClick={() => hadledec(item.id)} className="border px-2 py-1">-</button>
                  <span className="px-2">{item.quantity}</span>
                  <button onClick={() => hadleinc(item.id)} className="border px-2 py-1">+</button>
                </div>

                <div className="md:w-1/5 text-center text-sm mb-2 md:mb-0">{item.price} Rs.</div>
                <div className="md:w-1/5 text-center text-sm">{item.price * item.quantity} Rs.</div>
              </div>
            ))}

            <button onClick={() => navigate("/allproduct")} className="flex items-center text-indigo-600 text-sm mt-6 hover:underline">
              <svg className="w-4 mr-2" fill="currentColor" viewBox="0 0 448 512">
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/>
              </svg>
              Continue Shopping
            </button>
          </div>

          {/* Right Side - Summary */}
          <div id="summary" className="md:w-1/4 w-full bg-white px-6 py-10">
            <h1 className="font-semibold text-xl border-b pb-4">Order Summary</h1>

            <div className="flex justify-between mt-4 mb-2 text-sm">
              <span className="font-medium uppercase">Items</span>
              <span>{gettotelrpice() + 10}</span>
            </div>

            <div className="my-4">
              <label className="block font-medium text-sm uppercase mb-2">Shipping</label>
              <select className="block p-2 w-full border text-gray-700 text-sm">
                <option>Standard shipping - ₹10.00</option>
              </select>
            </div>

            <div className="my-4">
              <label htmlFor="promo" className="block font-medium text-sm uppercase mb-2">Promo Code</label>
              <input
                value={discount}
                onChange={(e) => setdiscount(e.target.value)}
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 w-full border text-sm"
              />
              <button onClick={applepromocode} className="bg-red-500 hover:bg-red-600 text-white text-sm w-full mt-2 py-2 uppercase">
                Apply
              </button>
            </div>

            <div className="border-t mt-6 pt-4">
              <div className="flex justify-between font-semibold text-sm uppercase mb-4">
                <span>Total Cost</span>
                <span>{gettotelrpice()}</span>
              </div>
          
              <Modelsection onClick={() => navigate('./chackout')} className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 text-sm uppercase w-full"/>

            </div>
          </div>
        </div>
      </div>
    </div>
    }
 </>
  );
};

export default Cart;
