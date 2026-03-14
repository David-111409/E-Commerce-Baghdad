import { useState } from "react";
import "./special-offers.css";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Offer = ({ offer }) => {
  const [image, setImage] = useState(offer.firstImage);
  const finalPrice = ((100 - offer.discount) * offer.price) / 100;
  return (
    
     
      <div className="offer">
        <Link
          to={`/special-offers/${offer.id}`}
          className="offer-image-wrapper"
          onMouseEnter={() => setImage(offer.secondImage)}
          onMouseLeave={() => setImage(offer.firstImage)}
        >
          <img className="offer-image" src={image} title={offer.title} />
        </Link>
        <div className="offer-info">
          <h5 className="offer-title">{offer.title}</h5>
          <Rating rating={offer.rating} reviews={offer.reviews} />
          <div className="offer-price">
            <b className="offer-price-item">${offer.price}</b>
            <b className="offer-final-price-item">${finalPrice}</b>
          </div>
          <Link to={`/special-offers/${offer.id}`} className="offer-see-more">
            شاهد المزید ...
          </Link>
        </div>
        <div className="discount">خصم {offer.discount}%</div>
      </div>
 
  );
};

export default Offer;
