import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


const PopularProduct = ({ addtocart }) => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios('https://dummyjson.com/carts/1');
        setPopularProducts(res.data.products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, []); // Fetch once on component mount

  return (
    
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {popularProducts.map((productItem) => (

           <div
  key={productItem.id}
  className="lg:w-1/4 md:w-1/2 p-4 w-full transition-transform transform hover:-translate-y-1"
>
  <div className="border border-gray-200 hover:border-blue-500 rounded-lg p-4 shadow hover:shadow-lg transition duration-300 ease-in-out">
    <Link to={`/singleproduct/${productItem.id}`} className="block relative h-48 rounded overflow-hidden">
      <img
        alt={productItem.title}
        className="object-cover object-center w-full h-full block"
        src={productItem.thumbnail}
      />
    </Link>
    <div className="mt-4">
      <h2 className="text-gray-900 title-font text-lg font-medium">{productItem.title}</h2>
      <p className="mt-1 flex items-center justify-between">
        <span>{productItem.price}</span>
        <button
          onClick={() => addtocart(productItem)}
          className="bg-red-950 hover:bg-blue-500 text-white px-4 py-2 rounded-lg shadow transition-all"
        >
          Add to Cart
        </button>
      </p>
    </div>
  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProduct;
