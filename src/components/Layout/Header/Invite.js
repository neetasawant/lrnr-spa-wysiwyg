import React from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Tooltip from "@mui/material/Tooltip";
const useStyles = makeStyles((theme) => ({
  text: {
    color: theme.palette.mode === "dark" ? "#FFF" : "#000",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
}));
const Invite = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Tooltip title="invite member!">
        <PersonAddIcon style={{ height: 15 }} className={classes.text} />
        <Typography variant="overline" className={classes.text}>
          INVITE TEAM MEMBER
        </Typography>
      </Tooltip>
    </div>
  );
};

export default Invite;
