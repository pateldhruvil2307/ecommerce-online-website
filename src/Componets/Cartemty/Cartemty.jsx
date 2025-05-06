import React from 'react';

const Cartemty = () => {
  return (
    <div className="text-center">
      <h1 className="text-xl font-semibold mb-10 mt-10">Cart is Empty</h1>
      <div className="flex justify-center items-center ">
        <img
          src="https://wpmet.com/wp-content/uploads/2022/09/EmptyCart_3-Copy.png"
          alt="Empty cart"
          className="w-[800px] h-[800px] object-contain mt-1"
        />
      </div>
    </div>
  );
};

export default Cartemty;
