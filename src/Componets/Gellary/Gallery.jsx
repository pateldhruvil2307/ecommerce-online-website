import React from "react";

const Gallery = () => {
  return (
    <>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center">
    <div className="flex w-full mb-20 flex-wrap justify-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
        X <span className="text-red-700">Shop</span> Photo Gallery
      </h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base"></p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1 justify-center">
      <div className="flex flex-wrap w-1/4 hover:scale-75 hover:translate-x-4 hover:skew-x-3 transform duration-500 justify-center">
        <div className="md:p-2 p-1 w-1/2">
          <img 
            alt="Scenic view"
            className="w-full object-cover h-full object-center block"
            src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="Mountain landscape"
            className="w-full object-cover h-full object-center block"
            src="https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
        <div className="md:p-2 p-1 w-full">
          <img
            alt="Sunset over hills"
            className="w-full h-full object-cover object-center block"
            src="https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
      </div>
      <div className="flex flex-wrap w-1/4 hover:scale-75 hover:translate-x-4 hover:skew-x-3 transform duration-500 justify-center">
        <div className="md:p-2 p-1 w-full">
          <img
            alt="Forest pathway"
            className="w-full h-full object-cover object-center block"
            src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="Ocean waves"
            className="w-full object-cover h-full object-center block"
            src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="Desert dunes"
            className="w-full object-cover h-full object-center block"
            src="https://images.pexels.com/photos/3402150/pexels-photo-3402150.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  );
};

export default Gallery;
