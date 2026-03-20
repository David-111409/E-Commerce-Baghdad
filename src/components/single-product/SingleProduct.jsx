import Offer from "../special-offers/Offer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import Spinner from "../../components/spinner/Spinner"; // تأكد من استيراد السبنر

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  // 1. جلب البيانات والحالة من Redux
  const { items, loading, error } = useSelector((state) => state.products);

  // 2. البحث عن المنتج في المصفوفة المخزنة

  const product = items[id - 1];
  // 3. التعامل مع حالة التحميل (Spinner)
  if (items.length === 0 || loading) {
    return <Spinner />;
  }

  // 4. التعامل مع حالة الخطأ أو عدم وجود المنتج
  if (error) {
    return <div className="error-msg">حدث خطأ: {error}</div>;
  }

  if (!product) {
    return <div className="error-msg">هذا المنتج غير متوفر حالياً.</div>;
  }

  const handleAdd = () => {
    dispatch(addToCart({ ...product, quantity: parseInt(quantity) }));
  };

  return (
    <div className="single-product-wrapper">
      <Offer offer={product} type="not-product" showDiscount={false}>
        <div className="special-offers-add-to-cart">
          <label htmlFor="cart-quantity">الكمية</label>
          <input
            id="cart-quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            min="1"
            max="10"
          />
          <button onClick={handleAdd} className="add-to-cart-btn">
            إضافة إلى سلة التسوق
          </button>
        </div>
      </Offer>
    </div>
  );
};

export default SingleProduct;
