import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/cart/Cart";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
