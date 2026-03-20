import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Login from "./pages/forms/login";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import SingleOfferPage from "./components/special-offers/SingleOfferPage";
import ScrollToTop from "./ScrollToTop";
import SingleProduct from "./components/single-product/SingleProduct";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./redux/productsSlice";
import Products from "./pages/products/Products";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    
      dispatch(fetchProducts());
    
  }, [dispatch]);
  return (
    <Provider store={store}>
      <ScrollToTop />
      <ToastContainer autoClose={1800} hideProgressBar={true} />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/special-offers/:id" element={<SingleOfferPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route  path="/products" element ={<Products />}/>
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </Provider>
  );
};

export default App;
