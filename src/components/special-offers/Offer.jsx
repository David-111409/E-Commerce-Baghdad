import { useState } from "react";
import "./special-offers.css";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import ProductDescription from "../single-product/Description";

const Offer = ({ offer, children, showDiscount, type }) => {
  const [imageIndex, setImageIndex] = useState(0);

  // حماية الكود من الـ Undefined والحسابات الصحيحة
  if (!offer || !offer.price) return null;

  const finalPrice = offer.discount
    ? (((100 - offer.discount) * offer.price) / 100).toFixed(2)
    : offer.price;

  // تحديد الكلاسات بناءً على الحالة لتقليل الزحمة في الـ return
  const prefix = showDiscount ? "offer" : "special-offers-page";

  // دالة لتحديد الصورة المعروضة
  const currentImage =
    showDiscount && type !== "product"
      ? imageIndex === 0
        ? offer.firstImage
        : offer.secondImage
      : offer.images
        ? offer.images[imageIndex]
        : offer.image;

  return (
    <>
      <div className={prefix}>
        {/* منطقة الصورة */}
        <div className={`${prefix}-img-wrapper`}>
          {showDiscount && type !== "product" ? (
            <Link
              to={`/special-offers/${offer.id}`}
              onMouseEnter={() => setImageIndex(1)}
              onMouseLeave={() => setImageIndex(0)}
            >
              <img className="offer-image" src={currentImage} alt={offer.title} />
            </Link>
          ) : (
            <img className={`${prefix}-img`} src={currentImage} alt={offer.title} />
          )}

          {/* مصغرات الصور في صفحة العرض الخاص */}
          {!showDiscount && !type && offer.images && (
            <div className="special-offers-page-select">
              {offer.images.map((img, index) => (
                <img
                  key={index}
                  onClick={() => setImageIndex(index)}
                  className={`select-img ${imageIndex === index ? "active" : ""}`}
                  src={img}
                  alt=""
                />
              ))}
            </div>
          )}
        </div>

        {/* معلومات المنتج */}
        <div className={`${prefix}-info`}>
          <h5 className={`${prefix}-title`}>{offer.title}</h5>
          <Rating rating={offer.rating} reviews={offer.reviews} />

          <div className={showDiscount ? "offer-price" : "offer-price-page"}>
            {offer.discount ? (
              <>
                <b className="offer-price-item">${offer.price}</b>
                <b className={`${prefix}-final-price-item`}>${finalPrice}</b>
              </>
            ) : (
              <b className="special-offer-final-price-item">${offer.price}</b>
            )}
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
