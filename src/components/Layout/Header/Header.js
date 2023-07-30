import React, { useState } from "react";
import "./Header.css";
import Profile from "./Profile";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Invite from "./Invite";
import SearchBar from "./SearchBar";
import Hamburger from "./Hamburger";
import DrawerMenu from "../DrawerMenu/DrawerMenu";

const Header = ({showProfile, showInvite, showHamburger = true, showSearch, showNotification}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isProfileOn, setIsProfileOn] = useState(false);
    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
      };
      const handleProfileToggle = () => {
        setIsProfileOn(!isProfileOn);
      };
  return (
    <header className="header">
      <div className="navbar-left">
      <ul className="menu1">
          {showHamburger && <li><Hamburger onClickHandler={handleDrawerToggle}/></li>}
         {isDrawerOpen && <DrawerMenu isOpen={isDrawerOpen}/>}
          {showSearch && <li><SearchBar /></li>}
        </ul>
      </div>
      <div className="navbar-right">
        <ul className="menu">
          {showInvite && <li><Invite /></li>}
          {showNotification && <li><NotificationsNoneIcon style={{ height: 20 }} /></li>}
          {showProfile && <li><Profile onClickHandler={handleProfileToggle}/></li>}
        </ul>
      </div>
    </header>
  );
};

export default Header;
