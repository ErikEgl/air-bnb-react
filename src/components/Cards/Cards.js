import React from "react";
import Card from "./Card/Card";
import data from "./data";

// import img1 from "../../assets/img/zaferes.jpg";
// import img2 from "../../assets/img/wedding-photography.jpg";
// import img3 from "../../assets/img/mountain-bike.jpg";

function Cards() {
  const cardItem = data.map((item) => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    );
  });
  return (
    <>
      <section className="cards">
        <div className="container">{cardItem}</div>
      </section>
    </>
  );
}

export default Cards;
