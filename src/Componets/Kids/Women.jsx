import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Women = ({addtocart}) => {
  const [Categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [showproduct, setshowproduct] = useState(false);
  const [womann, setwomenn] = useState([]);
  const [cart, setCart] = useState([]);

  const filterproduct = (all) => {
    setSelectedCategory(all);
    setshowproduct(true);
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log('Cart:', [...cart, product]);
    // Optional: Save to localStorage
    // localStorage.setItem('cart', JSON.stringify([...cart, product]));
    alert(`${product.title} added to cart!`);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios('https://dummyjson.com/products/category-list');
        setCategories(res.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const fetchProducts = async () => {
        try {
          const res = await axios(`https://dummyjson.com/products/category/${selectedCategory}`);
          setProducts(res.data.products);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
      fetchProducts();
    }
  }, [selectedCategory]);

  useEffect(() => {
    const allmensproduct = async () => {
      const res = await axios('https://dummyjson.com/products/category/womens-dresses');
      setwomenn(res.data.products);
    };
    allmensproduct();
  }, []);

  const renderProductCard = (item, index) => (
    <div className="border-2 p-3 w-60 rounded shadow hover:shadow-lg transition" key={index}>
      <img className="object-cover w-full h-40 mb-2" src={item.thumbnail} alt={item.title || 'Product'} />
      <p><strong>Name:</strong> {item.title}</p>
      <p><strong>Price:</strong> ${item.price}</p>
      <button
        onClick={() => addtocart(item)}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        AddCart
      </button>
    </div>
  );

  return (
     <> <div className="flex justify-center mt-10">
        <select
          value={selectedCategory}
          onChange={(e) => filterproduct(e.target.value)}
          className="w-60 h-10 pl-3 border border-gray-300 rounded-md"
        >
          <option value="">Filter by categories</option>
          {Categories
            .filter((cat) =>
              ["womens-bags", "womens-dresses", "womens-jewellery", "womens-shoes", "womens-watches"].includes(cat)
            )
            .map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
        </select>
      </div>

      <div className="flex flex-wrap gap-4 justify-center mb-30 mt-10">
        {showproduct
          ? products.map(renderProductCard)
          : womann.map(renderProductCard)}
      </div>
</>
     
  );
};

export default Women;
