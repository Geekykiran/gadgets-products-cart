import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await axios.get("https://json-server-products-tuej.onrender.com/products");
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const updateProduct = async (id, updatedProduct) => {
    await axios.put(`https://json-server-products-tuej.onrender.com/products/${id}`, updatedProduct);
    fetchProducts(); // Refresh after update
  };

  return (
    <ProductContext.Provider value={{ products, fetchProducts, updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);