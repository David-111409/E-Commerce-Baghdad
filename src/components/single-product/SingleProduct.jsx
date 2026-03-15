import { products } from "../../data/products";
import Offer from "../special-offers/Offer";
import { useParams } from "react-router-dom";
import { useState } from "react";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const offer = products.find((p) => p.id === +id);
 

  return (
    <Offer offer={offer} type= "not-product" showDiscount={false} >
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
