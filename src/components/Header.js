import { ShoppingBasket } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./Header.css";


function Header() {
  return (
    <div className="header">
      <img alt=""
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header__search">
              <input className="header__searchInput" type="text" />
              <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Sage</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <div className="header__optionBasket">
          <ShoppingBasket />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>

      </div>
    </div>
  );
}

export default Header;
