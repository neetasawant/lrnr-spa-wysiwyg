import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "./DrawerTabs";
import { makeStyles } from "@mui/styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DrawerTreeView from "./DrawerTreeView";
const useStyles = makeStyles((theme) => ({
  scrollableBox: {
    width: 450,
    backgroundColor: theme.palette.background.default,
    top: 50,
    borderRight: "1px solid #F2F2F2",
    bottom: 0,
    left: 0,
    position: "absolute",
    maxHeight: "100vh",
    overflowY: "auto",
    scrollbarWidth: "thin",
    "&::-webkit-scrollbar": {
      width: "10px",
    },
  },
}));

const DrawerMenu = ({ isOpen = true }) => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(isOpen);
  const tabsData = [
    {
      id: 0,
      label: "All",
      icon: "",
      component: <DrawerTreeView setIsDrawerOpen={setIsDrawerOpen} />,
    },
    { id: 1, label: "Board", icon: "" },
    { id: 2, label: "Graph", icon: "" },
    { id: 3, label: "Recent", icon: "" },
    { id: 4, label: "", icon: <MoreVertIcon sx={{ height: 13 }} /> },
  ];
  return (
    <>
      {isDrawerOpen && (
        <Box
          className={classes.scrollableBox}
          maxHeight="100vh"
          overflow="auto"
        >
          <Tabs setIsDrawerOpen={setIsDrawerOpen} tabs={tabsData} />
        </Box>
      )}
    </>
  );
};

export default DrawerMenu;
