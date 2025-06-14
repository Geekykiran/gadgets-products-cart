import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, updateQty } = useCart();

  const incrementQty = (id, currentQty) => {
    updateQty(id, currentQty + 1);
  };

  const decrementQty = (id, currentQty) => {
    if (currentQty === 1) {
      removeFromCart(id);
    } else {
      updateQty(id, currentQty - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-300 text-center">No items in cart.</p>
      ) : (
        <div className="space-y-6 max-w-4xl mx-auto">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-transform hover:scale-[1.01]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain rounded-lg bg-white p-2"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-indigo-400 font-medium mt-1">₹{item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => decrementQty(item.id, item.quantity)}
                  className="w-8 h-8 flex items-center justify-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-full text-lg font-bold transition"
                >−</button>
                <span className="px-3 py-1 font-semibold text-white bg-white/20 rounded">
                  {item.quantity}
                </span>
                <button
                  onClick={() => incrementQty(item.id, item.quantity)}
                  className="w-8 h-8 flex items-center justify-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-full text-lg font-bold transition"
                >+</button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-400 hover:text-red-500 font-medium transition"
              >
                ✖ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;