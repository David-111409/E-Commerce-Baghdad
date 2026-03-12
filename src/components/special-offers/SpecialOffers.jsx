import "./special-offers.css";
import { specialOffers } from "../../data/special-offers";
import Offer from "./Offer";

const SpecialOffers = () => {
  return (
    <div className="special-offers">
      <h1 className="special-offers-title">
        عروض کبیره للیوم
        <span className="special-offers-icon-wrapper">
          <i className="bi bi-stopwatch"></i>
          <span className="text">ل 24 ساعة بس</span>
        </span>
      </h1>
      <div className="offers">
        {specialOffers.map((offer) => (
          <Offer offer={offer} key={offer.id} />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
