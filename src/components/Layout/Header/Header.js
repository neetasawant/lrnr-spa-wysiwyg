import React, { useState } from "react";
import "./Header.css";
import Profile from "./Profile";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Invite from "./Invite";
import SearchBar from "./SearchBar";
import Hamburger from "./Hamburger";
const Header = ({showProfile, showInvite, showHamburger = true, showSearch, showNotification}) => {
  return (
    <header className="header">
      <div className="navbar-left">
      <ul className="menu1">
          {showHamburger && <li><Hamburger /></li>}
          {showSearch && <li><SearchBar /></li>}
        </ul>
      </div>
      <div className="navbar-right">
        <ul className="menu">
          {showInvite && <li><Invite /></li>}
          {showNotification && <li><NotificationsNoneIcon style={{ height: 20 }} /></li>}
          {showProfile && <li><Profile /></li>}
        </ul>
      </div>
    </header>
  );
};

export default Header;
