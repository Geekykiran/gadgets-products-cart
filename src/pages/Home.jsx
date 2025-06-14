import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const Home = () => {
  const { products } = useProducts();

  return (
    <motion.div
      className="p-10 sm:p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#0f172a] min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {products.map((p) => (
        <motion.div
          key={p.id}
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -5,
            transition: { type: "spring", stiffness: 300 },
          }}
          className="rounded-xl shadow-xl bg-white/10 backdrop-blur-md border border-white/20 p-2 transition duration-300 hover:shadow-2xl"
        >
          <ProductCard product={p} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Home;
