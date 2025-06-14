import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import AddProductPage from "./pages/AddProductPage";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import ManageProducts from "./components/ManageProducts";
import EditProductPage from "./pages/EditProductPage";

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/add-product',
        element: <AddProductPage />,
      },
      {
        path: '/manage-products',
        element: <ManageProducts />
      },
      {
        path: '/manage-products/edit/:id',
        element: <EditProductPage />
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
    ],
  },
],
  {
    basename: "/gadgets-products-cart/",
  }
);

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" />
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
