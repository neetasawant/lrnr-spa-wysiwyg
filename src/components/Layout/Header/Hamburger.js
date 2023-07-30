import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.mode === "dark" ? "#FFF" : "#000",
  },
}));
const Hamburger = ({ onClickHandler }) => {
  const classes = useStyles();
  return (
    <div onClick={onClickHandler}>
      <MenuIcon
        style={{ height: 25, marginTop: "4px" }}
        className={classes.icon}
      />
    </div>
  );
};

export default Hamburger;
