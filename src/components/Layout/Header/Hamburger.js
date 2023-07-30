import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
const Hamburger = ({onClickHandler}) => {
    return (
        <div onClick={onClickHandler}>
        <MenuIcon style={{height:25, marginTop:'4px'}}/>
      </div>
    )
}

export default Hamburger