import React from "react";
import "./AboutUs.css";
import MasalaImg from "../../assets/masala.jpg";
const AboutUs = () => {
  return (
    <section className="aboutUs">
      <div className="aboutUsDiv">
        <div className="aboutUsDiv-imageDiv">
          <img
            src={MasalaImg}
            className="aboutUsDiv-imageDivImage"
            alt="About Us Img"
          />
        </div>
        <div className="aboutUsDiv-content">
          <h2 className="aboutUsDiv-contentHeading">About Us</h2>
          <h3 className="aboutUsDiv-contentPara">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </h3>
          <button className="aboutUsDiv-contentButton">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
