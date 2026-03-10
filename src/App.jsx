import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Banner from "./components/banner/Banner";
import Category from "./components/category/Category";
const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Category />
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
