import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Means = ({addtocart}) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [showproduct, setshowproduct] = useState(false)
  const [mensshart,setmensshart]=useState([])

const filterproduct=(all)=>{
  setSelectedCategory(all)
setshowproduct(true)
}
  

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

  // Fetch products when a category is selected
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



  useEffect(()=>{
    const allmensproduct =async()=>{
      const res=await axios('https://dummyjson.com/products/category/mens-shirts') 
      setmensshart(res.data.products)
    
    }
    allmensproduct();
  },[])

  return (
    <>
      <div className="flex justify-center mt-10">
        <select
          value={selectedCategory}
          onChange={(e) =>filterproduct(e.target.value)}
          className="w-60 h-10 pl-3 border border-gray-300 rounded-md"
        >
          <option value="">Filter by categories</option>
          {categories
            .filter((cat) =>
              ['mens-shirts', 'mens-shoes', 'mens-watches'].includes(cat)
            )
            .map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
        </select>
      </div>


 {
 showproduct ?(     

      <div className="flex flex-wrap gap-4 justify-center mt-10">
        {products.map((item, index) => (
          <div className="border-2 p-3 w-60 rounded shadow hover:shadow-lg transition" key={index}>
            <img
              className="object-cover w-full h-40 mb-2"
              src={item.thumbnail}
              alt={item.title}
            />
            <p><strong>Name:</strong> {item.title}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <button onClick={()=>addtocart(item)} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  AddCart
</button>
          </div>
        ))}
      </div>
        ) : (
    <div className="flex flex-wrap gap-4 justify-center mb-40 mt-20">
      {mensshart.map((item, index) => (
        <div className="border-2 p-3 w-60 rounded shadow hover:shadow-lg transition" key={index}>
          <img
            className="object-cover w-full h-40 mb-2"
            src={item.thumbnail}
            alt={item.title || "Product"}
          />
          <p><strong>Name:</strong> {item.title}</p>
          <p><strong>Price:</strong> ${item.price}</p>
          <button onClick={()=>addtocart(item)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  AddCart
</button>
        </div>
      ))}
    </div>
  )
      

}




    </>
  );
};

export default Means;
