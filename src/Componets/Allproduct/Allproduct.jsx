import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const Allproduct = ({ addtocart }) => {
  const [allCategory, setAllCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [showFiltered, setShowFiltered] = useState(false);
  const [searchItem, setSearchItem] = useState('');
  const [minprice, setMinprice] = useState('');
  const [maxprice, setMaxprice] = useState('');

  // Fetch category list
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios('https://dummyjson.com/products/category-list');
        setAllCategory(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  // Fetch products for selected category
  useEffect(() => {
    const fetchProductsByCategory = async () => {
      if (!selectedCategory) return;
      try {
        const res = await axios(`https://dummyjson.com/products/category/${selectedCategory}`);
        setProduct(res.data.products);
        setShowFiltered(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductsByCategory();
  }, [selectedCategory]);

  // Fetch all products
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios('https://dummyjson.com/products');
        setOriginalProducts(res.data.products);
        setFilteredProducts(res.data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllProducts();
  }, []);

  // Handle category selection
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Trigger search
  const handleSearch = () => {
    const filtered = originalProducts.filter((item) =>
      item.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilteredProducts(filtered);
    setShowFiltered(false);
  };

  // Handle price filter
  const handlePriceFilter = () => {
    const min = parseFloat(minprice) || 0;
    const max = parseFloat(maxprice) || Infinity;

    const filtered = originalProducts.filter((item) => item.price >= min && item.price <= max);
    setFilteredProducts(filtered);
    setShowFiltered(false);
  };

  return (
    <div className="p-5">

<div className="bg-gray-100 p-6 rounded-xl shadow-md mb-10 mx-4">
  <div className="flex flex-col md:flex-row md:items-center justify-center gap-4 mb-6">
    <select
      onChange={handleCategoryChange}
      className="w-full md:w-60 h-10 px-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      defaultValue=""
    >
      <option disabled value="">
        Filter by Category
      </option>
      {allCategory
        .filter((cat) => !['motorcycle', 'vehicle', 'tops', 'furniture'].includes(cat))
        .map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
    </select>

    {/* Search Bar */}
    <div className="flex w-full md:w-auto">
      <input
        type="text"
        value={searchItem}
        placeholder="Search a product"
        className="w-full md:w-72 px-3 py-2 border rounded-l-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition"
      >
        Search
      </button>
    </div>
  </div>

  {/* Price Filter */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-4">
    <input
      type="number"
      placeholder="Min price"
      className="w-full md:w-40 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={(e) => setMinprice(e.target.value)}
      value={minprice}
    />
    <input
      type="number"
      placeholder="Max price"
      className="w-full md:w-40 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={(e) => setMaxprice(e.target.value)}
      value={maxprice}
    />
    <button
      onClick={handlePriceFilter}
      className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
    >
      Filter by Price
    </button>
  </div>
</div>


      {/* Products Display */}
      <div className="flex flex-wrap gap-4 justify-center">
        {(showFiltered ? product : filteredProducts).length > 0 ? (
          (showFiltered ? product : filteredProducts).map((item) => (
            <div
              className="border-2 p-3 w-60 rounded shadow hover:shadow-lg transition"
              key={item.id}
            >
            <Link to={`/singleproduct/${item.id}`}>
              <img
                className="object-cover w-full h-40 mb-2"
                src={item.thumbnail}
                alt={item.title}
              />
              </Link>
              <p>
                <strong>Name:</strong> {item.title}
              </p>
              <p>
                <strong>Price:</strong> ${item.price}
              </p>
                <button
                  onClick={() => addtocart(item)}
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-2"
                >
                  AddCart
                </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-lg mt-10">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Allproduct;
