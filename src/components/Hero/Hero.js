import React from "react";

import img1 from "../../assets/img/image22.jpg";
import img2 from "../../assets/img/image23.jpg";
import img3 from "../../assets/img/image24.jpg";
import img4 from "../../assets/img/image25.jpg";
import img5 from "../../assets/img/image26.jpg";
import img6 from "../../assets/img/image27.jpg";
import img7 from "../../assets/img/image28.jpg";
import img8 from "../../assets/img/image29.jpg";
import img9 from "../../assets/img/image30.jpg";

function Hero() {
  return (
    <>
      <section>
        <div className="container">
          <div className="hero-img-grid">
            <img src={img1} alt="img1" />
            <img src={img9} alt="img9" />
            <img src={img2} alt="img2" />
            <img src={img3} alt="img3" />
            <img src={img4} alt="img4" />
            <img src={img5} alt="img5" />
            <img src={img6} alt="img6" />
            <img src={img7} alt="img7" />
            <img src={img8} alt="img8" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
