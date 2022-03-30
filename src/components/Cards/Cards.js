import React from "react";
import Card from "./Card/Card";


import img1 from "../../assets/img/zaferes.jpg";
import img2 from "../../assets/img/wedding-photography.jpg";
import img3 from "../../assets/img/mountain-bike.jpg";

function Cards() {
  return (
    <>
      <section className="cards">
        <div className="container">
          <Card 
          img={img1}
          stat='5.0'
          revCount='6'
          country='USA'
          info='Life lessons with Katie Zaferes'
          price='$136'
          />
          <Card 
          img={img2}
          stat='4.7'
          revCount='30'
          country='USA'
          info='Learn wedding photography'
          price='$125'
          />
          <Card 
          img={img3}
          stat='4.8'
          revCount='9'
          country='AUS'
          info='Group Mountain Biking'
          price='$50'
          />
        </div>
      </section>
    </>
  );
}

export default Cards;
