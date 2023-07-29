import React, { useState } from "react";
import "./Profile.css"; // You can create a separate CSS file for styling
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  
const Profile = () => {
  const [isProfileOn, setIsProfileOn] = useState(false);

  const handleProfileClick = () => {
    setIsProfileOn(!isProfileOn);
  };
  return (
    <div>
      <div
        onClick={handleProfileClick}
      >
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar alt="Remy Sharp" style={{height:30, width:30}}/>
        </StyledBadge>
      </div>
      <div className={`profile ${isProfileOn ? "open" : ""}`}>
        <ul className="menu">
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
