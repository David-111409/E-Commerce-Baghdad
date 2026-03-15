import { Link } from "react-router-dom";
import "./cart.css";
const Cart = () => {
  const items = [
    {
      id: 1,
      title: "اتش بی الیت بوك الجیل الثانی",
      image: "/images/products/laptops/l1.jpg",
      price: 750,
      quantity: 1,
    },
    {
      id: 2,
      title: "بیونر دی جی سماعه رأس",
      image: "/images/products/special-offers/s1.jpg",
      price: 200,
      quantity: 2,
    },
  ];
  if (items.length === 0)
    return (
      <div className="empty-cart">
        <h1>سله التسوق الخاصه بك فارغه</h1>
        <p>لا یوجد منتجات</p>
        <Link className="empty-cart-link" to="/products">
          صفحه السلع
        </Link>
      </div>
    );

  return (
    <div className="cart">
      <h1 className="cart-title">سله التسوق</h1>
      <div className="cart-wrapper">
        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-img-wrapper">
                <img className="cart-item-img" src={item.image} alt={item.title} />
              </div>
              <div className="cart-item-info">
                <div className="cart-item-title">{item.title}</div>
                <div className="cart-item-quantity">
                  الکمیه:
                  <span>{item.quantity}</span>
                </div>
                <div className="cart-item-price">
                  السعر الكلي:
                  <span>{(item.price * item.quantity).toFixed(2)}$ </span>
                </div>
                <i className="bi bi-trash fill cart-item-delete-icon"></i>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <div className="cart-summary-text">
            <i className="bi bi-check-circle-fill"></i>
            جزء من طلبك مؤهل للشحن المجاني. قم بتحدید هذا الخیار عند دفع التفاصیل
          </div>
          <div className="cart-summary-total">
            المجموع:
            <span>{items.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)}$</span>
          </div>
          <button className="cart-summary-btn">تابع عملیات الشراء</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
