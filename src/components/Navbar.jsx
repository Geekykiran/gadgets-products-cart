import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-gradient-to-r from-indigo-950 to-indigo-800 shadow-lg px-8 py-4 flex flex-wrap justify-between items-center">
      <Link
        to="/"
        className="text-2xl font-extrabold text-white tracking-wide hover:text-indigo-200 transition"
      >
        🛍️ CartApp
      </Link>

      <div className="flex gap-6 text-white font-medium text-sm sm:text-base">
        <Link
          to="/add-product"
          className="hover:bg-white/10 px-4 py-2 rounded-lg transition duration-200"
        >
          ➕ Add Product
        </Link>
        <Link
          to="/manage-products"
          className="hover:bg-white/10 px-4 py-2 rounded-lg transition duration-200"
        >
          🛠️ Manage
        </Link>
        <Link
          to="/cart"
          className="relative hover:bg-white/10 px-4 py-2 rounded-lg transition duration-200"
        >
          🛒 Cart
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
