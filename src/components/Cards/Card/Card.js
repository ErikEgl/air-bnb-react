import React from "react";

import star from "../../../assets/svg/star.svg";

function Card({img, stat, revCount, country, info, price}) {
  return (
    <>
      <div className="card">
        <div className="image__wrap">
          <span className="image__label">SOLD OUT</span>
          <img src={img} alt="zaferes" />
        </div>
        <div className="card__stats">
          <img className="card__star" src={star} alt="star" />
          <span className="card__stat">{stat}</span>
          <span className="card__rev-count">({revCount}) - </span>
          <span className="card__country">{country}</span>
        </div>
        <p className="card__info">{info}</p>
        <div className="card__price">
          <strong>From {price}</strong>/ person
        </div>
      </div>
    </>
  );
}

export default Card;
