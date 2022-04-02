import React from "react";

import star from "../../../assets/svg/star.svg";


function Card(props) {
  console.log(props);
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online"){
    badgeText = "ONLINE"
  } else {
    badgeText = ""
  }
  return (
    <>
      <div className="card">
        <div className="image__wrap">
          {(!props.openSpots || props.location === "Online") && <span className="image__label">{badgeText}</span> }
          <img src={props.coverImg} alt={props.coverImg} />
        </div>
        <div className="card__stats">
          {star ? <img className="card__star" src={star} alt="star" /> : ""}
          {props.stats.rating ? <span className="card__stat">{props.stats.rating}</span> : ""}
          {props.stats.reviewCount ? <span className="card__rev-count">({props.stats.reviewCount}) - </span> : ""}
          {props.location ? <span className="card__location">{props.location}</span> : ""}
        </div>
        {props.description ? <p className="card__info">{props.description}</p> : ""}
        {props.price ? 
          <div className="card__price">
            <strong>From ${props.price}</strong>/ person
          </div> 
        : ""}
        
      </div>
    </>
  );
}

export default Card;
