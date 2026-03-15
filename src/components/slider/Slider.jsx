import { Link } from "react-router-dom";
import "./slider.css";
import Rating from "../special-offers/Rating";
import { useState } from "react";

const Slider = ({ data }) => {
  const l = data.length;
  // Handle Click
  const [index, setIndex] = useState(0);
  const handleArro = (d) => {
    if (d === "left") {
      setIndex(index + 1);
    } else {
      setIndex(index - 1);
    }
  };
  return (
    <div className="slider-container">
      <button
        onClick={() => handleArro("left")}
        className="bi bi-chevron-left arrow-left"
        disabled={index === l}
      ></button>
      <div className="slider-wrapper" style={{ transform: `translateX(${index * 270}px)` }}>
        {data.map((item) => (
          <div className="slide" key={item.id}>
            <Link to={`/products/${item.id}`} className="image-wrapper">
              <img className="slide-image" src={item.image} alt={item.title} />
              <h3 className="slide-title">{item.title}</h3>
            </Link>
            <Rating rating={item.rating} reviews={item.reviews} />
            <div className="slide-price">${item.price}</div>
          </div>
        ))}
      </div>
      <button
        onClick={() => handleArro("right")}
        className="bi bi-chevron-right arrow-right"
        disabled={index === -1}
      ></button>
    </div>
  );
};

export default Slider;
