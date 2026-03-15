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

const App = () => {
  return (
    <>
      <ToastContainer autoClose={1800} hideProgressBar={true} />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/special-offers/:id" element={<SingleOfferPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
