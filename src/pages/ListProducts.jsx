import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';

const ListProducts = ({ id, image, title, price, onDelete }) => {
  const handleDelete = async () => {
    const confirm = window.confirm("Are you sure you want to delete this product?");
    if (confirm) {
      try {
        await axios.delete(`https://json-server-products-tuej.onrender.com/products/${id}`);
        onDelete(id); // it will update the state after delete
      } catch (error) {
        alert("Failed to delete product!");
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-5 bg-white/10 backdrop-blur-lg border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.4)] rounded-2xl hover:shadow-[0_15px_50px_rgba(0,0,0,0.5)] transition-all duration-300">
      <img
        src={image}
        alt={title}
        className="w-36 h-auto object-contain rounded-xl bg-white/20 p-3 shadow-inner"
      />
      <div className="flex flex-col justify-between flex-grow text-center md:text-left">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className="text-indigo-300 font-semibold text-lg mt-1">₹{price}</p>
        <div className="flex justify-center md:justify-start gap-4 mt-4">
          <Link
            to={`/manage-products/edit/${id}`}
            className="flex items-center gap-2 text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg text-sm shadow-md transition"
          >
            <FaEdit /> Edit
          </Link>
          <button
            onClick={handleDelete}
            className="flex items-center gap-2 text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm shadow-md transition"
          >
            <FaTrash /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListProducts;
