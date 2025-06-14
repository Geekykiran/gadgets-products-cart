import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useProducts } from '../context/ProductContext';
import { PacmanLoader } from 'react-spinners';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', price: '', image: '' });
  const [loading, setLoading] = useState(true);

  const { updateProduct } = useProducts();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://json-server-products-tuej.onrender.com/products/${id}`);
        const data = await res.json();
        setForm(data);
        setLoading(false);
      } catch (error) {
        toast.error("Failed to fetch product");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.price || !form.image) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      await updateProduct(id, form);
      toast.success("Product updated successfully!");
      navigate('/manage-products');
    } catch (error) {
      toast.error("Update failed");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-indigo-500 text-lg font-semibold">
        <PacmanLoader/>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
      <div className="w-full max-w-xl p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.4)] bg-white/10 backdrop-blur-xl border border-white/20">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Edit Product</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-white">
          <div>
            <label className="block mb-1 font-medium text-white/80">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-white/50"
              placeholder="Enter product title"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-white/80">Price</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-white/50"
              placeholder="Enter price"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-white/80">Image URL</label>
            <input
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-white/50"
              placeholder="Enter image URL"
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition-colors duration-300"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;