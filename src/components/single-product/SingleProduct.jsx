import Offer from "../special-offers/Offer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const [product, setProduct] = useState({});

  console.log(id);
  useEffect(() => {
    // نستخدم الـ id الممرر لجلب بيانات هذا المنتج فقط
    const fetchSingleProduct = async () => {
      try {
        const response = await fetch(`https://69b7299effbcd0286094a939.mockapi.io/products`);
        const data = await response.json();
        console.log(data);
        setProduct(data[+id - 1]);
      } catch (error) {
        console.error("خطأ أثناء جلب المنتج:", error);
      }
    };

    fetchSingleProduct();
  }, [id]);

  return (
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
        <button className="add-to-cart-btn">إضافه الی سله التسوق</button>
      </div>
    </Offer>
  );
};

export default SingleProduct;
