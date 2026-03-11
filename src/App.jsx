import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Banner from "./components/banner/Banner";
import Category from "./components/category/Category";
import SpecialOffers from "./components/special-offers/SpecialOffers";
import Login from "./pages/forms/login";

const App = () => {
  return (
    <>
      <ToastContainer position="top-center" autoClose={1800} hideProgressBar={true} />
      <Header />
     
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
