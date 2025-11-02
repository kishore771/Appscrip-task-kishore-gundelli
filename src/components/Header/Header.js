import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">

      <div className="grey-strip-1">
        <div className="strip-content">
          <img
            src="https://i.postimg.cc/kGG0PS4x/element-4.png"
            alt="element4"
            className="strip-icon"
          />
          <p className="header-text">Lorem ipsum dolor</p>
        </div>
      </div>


      <div className="header-main">
        <div className="left-section">
          <img
            src="https://i.postimg.cc/fRBqCjBR/hamburger-icon.png"
            alt="menu"
            className="hamburger"
          />
          <img
            src="https://i.postimg.cc/9fbK4z5L/Vector.png"
            alt="logo"
            className="small-logo"
          />
        </div>

        <h1 className="logo-text">LOGO</h1>

        <div className="header-icons">
          <img
            src="https://i.postimg.cc/BvHG7JK7/search-icon.png"
            alt="search"
            className="icon"
          />
          <img
            src="https://i.postimg.cc/qMVDQ2GW/wishlist-icon.png"
            alt="wishlist"
            className="icon"
          />
          <img
            src="https://i.postimg.cc/dVdqpRMC/shopping-bag.png"
            alt="bag"
            className="icon"
          />
          <img
            src="https://i.postimg.cc/28Tv3B0k/Language.png"
            alt="language"
            className="language-icon"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
