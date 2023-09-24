// import React from "react";
// import "./Footer.css";
// const Footer = () => {
//   return (
//     <div>
//       <footer className="footer">
//         <div className="contact-details">
//         <h1>hey</h1>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo.png";
import Fb from "../../assets/fb.png";
import Insta from "../../assets/insta.png";
import Twitter from "../../assets/twitter.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-containerDiv">
        <div className="footer-containerDiv-section">
          <img
            src={Logo}
            className="footer-containerDiv-sectionLogo"
            alt="logo"
          />
          {/* Add your logo image here */}
        </div>
        <div className="footer-containerDiv-section">
          <h3 className="footer-containerDiv-sectionTitle">Contact Us</h3>
          <p className="footer-containerDiv-sectionListItem">
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road,<br></br> Phartosh Gate near
            YTM Market, XYZ-343
          </p>
          <p className="footer-containerDiv-sectionListItem">
            example2020@gmail.com
          </p>
          <p className="footer-containerDiv-sectionListItem">(904) 443-0343</p>
        </div>
        <div className="footer-containerDiv-section">
          <h3 className="footer-containerDiv-sectionTitle">More</h3>
          <ul className="footer-containerDiv-sectionList">
            <li className="footer-containerDiv-sectionListItem">About Us</li>
            <li className="footer-containerDiv-sectionListItem">Products</li>
            <li className="footer-containerDiv-sectionListItem">Career Link</li>
            <li className="footer-containerDiv-sectionListItem">Contact Us</li>
          </ul>
        </div>
        <div className="footer-containerDiv-section">
          <h3 className="footer-containerDiv-sectionTitle">Social Media</h3>
          <ul className="footer-containerDiv-sectionList" id="social">
            {/* <li className="footer-containerDiv-sectionListItem">Facebook</li>
            <li className="footer-containerDiv-sectionListItem">Twitter</li>
            <li className="footer-containerDiv-sectionListItem">Instagram</li> */}
            <li
              className="footer-containerDiv-sectionListItem"
              id="social-list"
            >
              <a href="https://www.facebook.com">
                <img src={Fb} alt="Facebook" />
              </a>
            </li>
            <li
              className="footer-containerDiv-sectionListItem"
              id="social-list"
            >
              <a href="https://www.twitter.com">
                <img src={Twitter} alt="Twitter" />
              </a>
            </li>
            <li
              className="footer-containerDiv-sectionListItem"
              id="social-list"
            >
              <a href="https://www.instagram.com">
                <img src={Insta} alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
