import { useCart } from "../context/CartContext";
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const { addToCart, getQuantity } = useCart();

  const handleAddToCart = () => {
    addToCart(product);

    const qty = getQuantity(product.id);
    toast.success(`${product.title} Qty: ${qty} added to cart`, {
      icon: '🛒',
      style: {
        borderRadius: '8px',
        background: '#333',
        color: '#fff',
        padding: '12px 16px',
      },
    });
  };

  return (
    <div className="group p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_15px_60px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-[1.02]">
      <div className="w-full h-48 overflow-hidden rounded-xl bg-gradient-to-tr from-[#1f2937] to-[#0f172a] flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-32 h-32 object-contain transform transition-transform duration-500 scale-350 group-hover:scale-260"
        />
      </div>

      <h3 className="text-base font-semibold mt-4 text-white truncate">{product.title}</h3>
      <p className="text-[#00FFA3] font-bold text-lg mt-1">₹{product.price}</p>

      <button
        onClick={handleAddToCart}
        className="mt-4 px-5 py-2 rounded-lg font-medium bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md hover:shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
