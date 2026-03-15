import "./single-offer.css";
import { useParams } from "react-router-dom";
import { specialOffers } from "../../data/special-offers";
import Offer from "./Offer";
import { useState } from "react";

const SingleOfferPage = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const product = specialOffers.find((p) => p.id === +id);
  const { images } = product;
  return (
    <Offer images={images} offer={product}>
      <div className="special-offers-add-to-cart">
        <div>الکمیه</div>
        <input
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

export default SingleOfferPage;
