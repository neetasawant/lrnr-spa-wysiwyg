import React from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Typography from "@mui/material/Typography";
const Invite = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
      <PersonAddIcon style={{ height: 15 }} />
      <Typography variant="overline">
        INVITE TEAM MEMBER
      </Typography>
    </div>
  );
};

export default Invite;
