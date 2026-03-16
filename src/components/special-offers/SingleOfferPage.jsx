import "./single-offer.css";
import { useParams } from "react-router-dom";
import { specialOffers } from "../../data/special-offers";
import Offer from "./Offer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
const SingleOfferPage = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const offer = specialOffers.find((p) => p.id === +id);
  console.log(offer)
  const dispatch = useDispatch();
  return (
    <Offer offer={offer}>
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
        <button onClick={() => dispatch(addToCart({...offer, quantity}))}  className="add-to-cart-btn">إضافه الی سله التسوق</button>
      </div>
    </Offer>
  );
};

export default SingleOfferPage;
