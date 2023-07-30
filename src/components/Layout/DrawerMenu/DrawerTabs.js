import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  tab: {
    fontSize: 9,
  },
  box: {
    borderBottom: 1,
    borderColor: "divider",
  },
}));
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

/* function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
} */

export default function DrawerTabs({ setIsDrawerOpen, tabs }) {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box className={classes.box}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabs.map((tab) => {
            return (
              <Tab label={tab.label} icon={tab.icon} className={classes.tab} />
            );
          })}
        </Tabs>
      </Box>
      {tabs.map((tab) => (
        <CustomTabPanel value={value} index={tab.id}>
          {tab.component ? tab.component : tab.label}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
