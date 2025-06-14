import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListProducts from '../pages/ListProducts';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // axios.get("http://localhost:5000/products")  // localhost server
    axios.get("https://json-server-products-tuej.onrender.com/products") // render.com for live backend deployment
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Failed to fetch products", err));
  }, []);

  const handleDeleteProduct = (id) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#111827]">
      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.4)] p-8">
        <h1 className="text-4xl font-bold mb-8 text-white tracking-tight">📦 Manage Products</h1>
        <div className="space-y-6">
          {products.map((product) => (
            <ListProducts key={product.id} {...product} onDelete={handleDeleteProduct} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
