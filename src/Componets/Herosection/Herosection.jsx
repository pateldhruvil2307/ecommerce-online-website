import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div>
        <img
          // src="https://img.freepik.com/free-photo/composition-black-friday-shopping-cart-with-copy-space_23-2148667046.jpg?t=st=1746246557~exp=1746250157~hmac=19c278d10b67d72d8fa1b8fb74adbe002162cf93fc8bcfcf793f5b54b1c38de7&w=1380"
         src="https://img.freepik.com/free-photo/front-view-cyber-monday-shopping-cart-with-bags-copy-space_23-2148657638.jpg?t=st=1746247036~exp=1746250636~hmac=1f3f69b68f01cee2ae6824bf28d7c94099b0ea6d9a720d988ed6a97f3e3f8aa5&w=1380"
          alt="Adventure background"
          className="w-full h-200 object-cover"
        />
      </div>

      {/* Hero Text */}
      <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
          Discover Your Next Adventure
        </h1>
        <p className="text-2xl mt-5 font-semibold text-white drop-shadow-lg">
          Shop our latest arrivals & unleash your style 
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
