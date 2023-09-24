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
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="752"
          height="839"
          viewBox="0 0 752 839"
          className="header-imageDiv-svg"
          fill="none"
        >
          <path
            d="M111.512 36.3371C40.9348 45.1719 7.76349 15.7936 0 0L752 1.42498V835.396C484.285 867.417 547.679 676.51 560.03 640.173C572.381 603.836 657.779 365.152 547.679 190.591C437.579 16.031 199.733 25.2934 111.512 36.3371Z"
            fill="#E23744"
          />
        </svg> */}
        <img className="header-imageDiv-image" src={Pizza} alt="Header-img" />
      </div>
    </header>
  );
};

export default Header;
