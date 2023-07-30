import React, { useState, useContext } from "react";
import "./Header.css";
import Profile from "./Profile";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Invite from "./Invite";
import SearchBar from "./SearchBar";
import Hamburger from "./Hamburger";
import DrawerMenu from "../DrawerMenu/DrawerMenu";
import { EditorContext } from "../../../context/editor-context";
import { makeStyles } from "@mui/styles";
import Tooltip from "@mui/material/Tooltip";
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
    border: "1px solid #E8E8E8",
    color: "#333",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
  },
  text: {
    color: theme.palette.mode === "dark" ? "#FFF" : "#000",
  },
}));
const Header = ({
  showProfile,
  showInvite,
  showHamburger = true,
  showSearch,
  showNotification,
}) => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isProfileOn, setIsProfileOn] = useState(false);
  const { showEditor, setShowEditor } = useContext(EditorContext);
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
    setShowEditor(false);
  };
  const handleProfileToggle = () => {
    setIsProfileOn(!isProfileOn);
  };
  return (
    <header className={classes.container}>
      <div className="navbar-left">
        <ul className="menu1">
          {showHamburger && (
            <li>
              <Hamburger onClickHandler={handleDrawerToggle} />
            </li>
          )}
          {isDrawerOpen && <DrawerMenu isOpen={isDrawerOpen} />}
          {showSearch && (
            <li>
              <SearchBar />
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-right">
        <ul className="menu">
          {showInvite && (
            <li>
              <Invite />
            </li>
          )}
          {showNotification && (
            <li>
              <Tooltip title="notifications!">
                <NotificationsNoneIcon
                  style={{ height: 20 }}
                  className={classes.text}
                />
              </Tooltip>
            </li>
          )}
          {showProfile && (
            <li>
              <Profile onClickHandler={handleProfileToggle} />
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
