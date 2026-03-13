// import { useState } from "react";
import { Link } from "react-router-dom";
import "./slider.css";
import Rating from "../special-offers/Rating";

const Slider = ({ data }) => {
  // Handle Click

  return (
    <div className="slider-container">
      <button className="bi bi-chevron-left arrow-left"></button>
      <div className="slider-wrapper">
        {data.map((item) => (
          <Link to={`/products/${item.id}`} className="slide" key={item.id}>
            <img className="slide-image" src={item.image} alt={item.title} />
            <h3 className="slide-title">{item.title}</h3>
            <Rating rating={item.rating} reviews={item.reviews} />
            <div className="slide-price">${item.price}</div>
          </Link>
        ))}
      </div>
      <button className="bi bi-chevron-right arrow-right"></button>
    </div>
  );
};

export default Slider;
