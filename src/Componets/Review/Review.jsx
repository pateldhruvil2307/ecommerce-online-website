import React, { useState } from 'react';

const reviews = [
  {
    id: 1,
    name: "vipul patel",
    message: "This product is amazing! Highly recommend to everyone.",
    role: "Customer",
  },
  {
    id: 2,
    name: "Smith patel",
    message: "Excellent quality and fast shipping. Will buy again.",
    role: "Verified Buyer",
  },
  {
    id: 3,
    name: "ronak patel",
    message: "Really happy with the customer service and support.",
    role: "Happy Client",
  },
];

const ReviewSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="max-w-xl mx-auto p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">What Our Customers Say</h2>
      <div className="relative bg-white rounded-xl shadow p-6 transition-all duration-500 ease-in-out">
        <p className="text-gray-700 italic mb-4">"{reviews[current].message}"</p>
        <h4 className="text-lg font-semibold">{reviews[current].name}</h4>
        <span className="text-sm text-gray-500">{reviews[current].role}</span>
      </div>
      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
        >
          ⬅
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
        >
          ➡
        </button>
      </div>
    </div>
  );
};

export default ReviewSlider;
