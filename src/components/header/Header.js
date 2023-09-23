import React from "react";
import "./Header.css";
import Pizza from "../../assets/pizza.jpg";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-contentDiv">
        <img className="header-contentDiv-logo" src={Logo} alt="Header-img" />

        <h1 className="header-contentDiv-heading">
          Discover the
          <span className="header-contentDiv-heading-span"> Best</span> Food and
          Drinks
        </h1>
        <h3 className="header-contentDiv-para">
          Naturally made Healthcare Products for the better care & support of
          your body.{" "}
        </h3>
        <button className="header-contentDiv-button">Explore now! </button>
      </div>
      <div className="header-imageDiv">
        <img className="header-imageDiv-image" src={Pizza} alt="Header-img" />
      </div>
    </header>
  );
};

export default Header;
