import React from "react";
import logo from "../../assets/svg/air-bnb-logo.svg";

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <img src={logo} alt="Logo" />
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
