import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Banner from "./components/banner/Banner";
const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
