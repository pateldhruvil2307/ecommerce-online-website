import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Singleproduct = ({ addtocart }) => {
  const { productid } = useParams();
  const [singleproduct, setSingleproduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios(`https://dummyjson.com/products/${productid}`);
        setSingleproduct(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [productid]);

  return (
    <>
      <button
        className="pl-5 mt-10 flex items-center gap-2 text-gray-800 hover:text-indigo-600"
        onClick={() => navigate('/allproduct')}
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 10 16"
        >
          <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
        </svg>
        Back
      </button>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full p-4">
              <img
                alt={singleproduct.title}
                className="w-full h-[400px] object-cover object-center rounded shadow-md"
                src={singleproduct.thumbnail}
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase mb-1">
                {singleproduct.brand}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-semibold mb-2">
                {singleproduct.title}
              </h1>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    fill={i < Math.round(singleproduct.rating) ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="text-sm text-gray-600 ml-2">{singleproduct.rating} / 5</span>
              </div>
              <p className="leading-relaxed mb-6 text-gray-700">
                {singleproduct.description}
              </p>
              <div className="flex items-center mb-5">
                <span className="text-xl font-medium text-gray-900">
                  ${singleproduct.price}
                </span>
                <button
                  onClick={() => addtocart(singleproduct)}
                  className="ml-6 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow transition-all"
                >
                  Add to Cart
                </button>
                <button
                  className="ml-4 rounded-full w-10 h-10 bg-gray-100 hover:bg-gray-200 border p-2 text-gray-600 flex items-center justify-center"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Singleproduct;
