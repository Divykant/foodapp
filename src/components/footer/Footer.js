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

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-containerDiv">
        <div className="footer-containerDiv-section">
          <h3>Logo</h3>
          {/* Add your logo image here */}
        </div>
        <div className="footer-containerDiv-section">
          <h3>Contact</h3>
          <p>Address: 123 Main Street</p>
          <p>Email: example@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-containerDiv-section">
          <h3>Links</h3>
          <ul>
            <li>About Us</li>
            <li>Latest Articles</li>
            <li>Header Link</li>
            <li>More</li>
          </ul>
        </div>
        <div className="footer-containerDiv-section">
          <h3>Social Media</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
