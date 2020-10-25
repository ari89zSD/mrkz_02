import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./../css/Header.css";
import HamburgerMenu from "react-hamburger-menu";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";

function Header() {
  const [open, setOpen] = useState(false);

  const handleClickHamburger = () => setOpen(!open);

  return (
    <nav className="header">
      {/* logo on the left - image */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      {/* searchbar */}
      <div className="header__search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* Hamburger Menu */}
      <div className="header__hamburgerMenu">
        <HamburgerMenu
          isOpen={open}
          menuClicked={handleClickHamburger}
          width={25}
          height={20}
          strokeWidth={4}
          rotate={0}
          color="white"
          borderRadius={2}
          animationDuration={0.1}
        />
      </div>

      {/* My Profile box/link */}
      <div className="header__profileIcon">
        <AccountBoxOutlinedIcon
          htmlColor="white"
          fontSize="inherit"
          style={{ fontSize: "47px" }}
        />
      </div>
      {/* Shopping Cart */}
      <div className="header__shoppingCart">
        <ShoppingCartIcon
          fontSize="inherit"
          style={{ fontSize: "40px", color: "white" }}
        />
      </div>
    </nav>
  );
}

export default Header;
