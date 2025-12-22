import React, { useState } from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="newsletter">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="contact">
          <h4>CONTACT US</h4>
          <div className="contact-info">
            <p>+44 221 133 5360</p>
            <p>◆ customercare@mettamuse.com</p>
          </div>

          <div className="currency-info">
            <h4 className="currency">CURRENCY</h4>
            <div className="currency-option">
              <img
                src="https://i.postimg.cc/hP2TCCzp/United-States-of-America-(US).png"
                alt="USD"
                className="us-logo"
              />
              <p>◆ USD</p>
            </div>
            <span className="currency-note">
              Transactions will be completed in Euros and a currency reference is
              available on hover.
            </span>
          </div>
        </div>
      </div>
      <hr className="divider" />



      <div className="footer-bottom">
        <div className="footer-column">
          <h4 onClick={() => toggleSection("metta")}>
            mettā muse
            <span className="arrow">
              {openSection === "metta" ? "−" : "+"}
            </span>
          </h4>

          <ul className={openSection === "metta" ? "show" : ""}>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 onClick={() => toggleSection("quick")}>
            QUICK LINKS
            <span className="arrow">
              {openSection === "quick" ? "−" : "+"}
            </span>
          </h4>

          <ul className={openSection === "quick" ? "show" : ""}>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-column follow">
          <h4 onClick={() => toggleSection("follow")}>
            FOLLOW US
            <span className="arrow">
              {openSection === "follow" ? "−" : "+"}
            </span>
          </h4>

          <div
            className={`follow-content ${
              openSection === "follow" ? "show" : ""
            }`}
          >
            <div className="social-icons">
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
          <h4>mettā muse ACCEPTS</h4>
            <div className="payment-icons">
              <img src="https://i.postimg.cc/dVzv1hDz/Frame-136278.png" alt="payment-icons" className="payment-icons-img" />
            </div>
        </div>
      </div>
      <hr className="divider" />
      <p className="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

