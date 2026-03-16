import "./special-offers.css";
import { specialOffers } from "../../data/special-offers";
import Offer from "./Offer";
import { Link } from "react-router-dom";

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
          <Offer showDiscount={true} offer={offer} key={offer.id}>
            <Link  to={`/special-offers/${offer.id}`} className="offer-see-more">
              شاهد المزید ...
            </Link>
          </Offer>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
