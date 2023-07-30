import React from "react";
import Header from "../Header/Header";
import { EditorContext } from "../../../context/editor-context";
import Editor from "../Editor/Editor";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
    height: "100vh",
  },
  text: {
    color: theme.palette.mode === "dark" ? "#FFF" : "#000",
  },
  maindiv: {
    width: "50%",
    dispaly: "flex",
    margin: "auto",
    textAlign: "center",
    padding: 20,
  },
}));
const Dashboard = () => {
  const classes = useStyles();
  const { showEditor, setShowEditor } = React.useContext(EditorContext);
  return (
    <div className={classes.container}>
      <Header
        showInvite={true}
        showNotification={true}
        showProfile={true}
        showSearch={true}
      />
      {!showEditor && (
        <div className={classes.maindiv}>
          <Typography className={classes.text}>Welcome!</Typography>
          <Typography className={classes.text}>WYSIWYG Editor</Typography>
        </div>
      )}
      {showEditor && <Editor />}
    </div>
  );
};

export default Dashboard;
