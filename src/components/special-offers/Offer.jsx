import { useState } from "react";
import "./special-offers.css";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import ProductDescription from "../single-product/Description";

const Offer = ({ offer, children, showDiscount, type }) => {
  const [image, setImage] = useState(offer.firstImage);
  const [imageIndex, setImageIndex] = useState(0);
  const finalPrice = ((100 - offer.discount) * offer.price) / 100;
  let imageWrapper = (
    <div className="offer-image-wrapper">
      <img className={"offer-image"} src={offer.image} title={offer.title} />
    </div>
  );
  if (!showDiscount && !type) {
    imageWrapper = (
      <div className={"special-offers-page-img-wrapper"}>
        <img
          className={"special-offers-page-img"}
          src={offer.images[imageIndex]}
          title={offer.title}
        />
        <div className="special-offers-page-select">
          {offer.images.map((img, index) => (
            <img
              onClick={() => setImageIndex(index)}
              className="select-img"
              key={index}
              src={img}
              alt=""
            />
          ))}
        </div>
      </div>
    );
  }
  if (showDiscount && type !== "product") {
    imageWrapper = (
      <Link
        to={`/special-offers/${offer.id}`}
        className="offer-image-wrapper"
        onMouseEnter={() => setImage(offer.secondImage)}
        onMouseLeave={() => setImage(offer.firstImage)}
      >
        <img className={"offer-image"} src={image} title={offer.title} />
      </Link>
    );
  }

  console.log(imageWrapper);

  return (
    <>
      <div className={showDiscount ? "offer" : "special-offers-page"}>
        {imageWrapper}
        <div className={showDiscount ? "offer-info" : "special-offers-page-info"}>
          <h5 className={showDiscount ? "offer-title" : "special-offers-page-title"}>
            {offer.title}
          </h5>
          <Rating rating={offer.rating} reviews={offer.reviews} />
          <div className={showDiscount ? "offer-price" : "offer-price-page"}>
            <b className="offer-price-item">${offer.price}</b>
            <b
              className={
                showDiscount ? "offer-final-price-item" : "special-offers-final-price-item"
              }
            >
              ${finalPrice}
            </b>
          </div>
          {children}
        </div>
        {showDiscount && <div className="discount">خصم {offer.discount}%</div>}
      </div>
      {!showDiscount && <ProductDescription />}
    </>
  );
};

export default Offer;
