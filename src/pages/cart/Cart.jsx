import { Link } from "react-router-dom";
import "./cart.css"
const Cart = () => {
  return (
    <div className="empty-cart">
      <h1>سله التسوق الخاصه بك فارغه</h1>
      <p>لا یوجد منتجات</p>
      <Link className="empty-cart-link" to="/products">
        صفحه السلع
      </Link>
    </div>
  );
};

export default Cart;
