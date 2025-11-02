import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaCcAmex, FaApplePay, FaGooglePay, FaPaypal, FaCcMastercard } from "react-icons/fa";

const Footer = () => {
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
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h4 className="currency">CURRENCY</h4>
          <p>🇺🇸 USD</p>
          <span className="currency-note">
            Transactions will be completed in Euros and a currency reference is available on hover.
          </span>
        </div>
      </div>

      <hr className="divider" />

      <div className="footer-bottom">
        <div className="footer-column">
          <h4>mettā muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>QUICK LINKS</h4>
          <ul>
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
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <FaInstagram />
            <FaLinkedin />
          </div>
          <h4>mettā muse ACCEPTS</h4>
          <div className="payment-icons">
            <FaGooglePay />
            <FaCcMastercard />
            <FaPaypal />
            <FaCcAmex />
            <FaApplePay />
          </div>
        </div>
      </div>

      <p className="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
