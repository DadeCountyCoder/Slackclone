import React from 'react'
import './Header.css' ;
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header() {
    return <div className="header">
        <div className="header__left">
        <Avatar
            className="header__avatar"
            alt="Alfredo"
            src=""
            // alt={user?.displayname}
            // src={user?.photoURL}
            
            />
            <AccessTimeIcon />
    {/* Avatars for logged in user */}
    {/* Time icon */}
        </div>
        <div className="header+_search">
            <SearchIcon />
            <input placeholder="Get your Searches here!"></input>
         {/* Search icon */}
         {/* input */}   
    </div>
    <div className="header__right">
        <HelpOutlineIcon />
        {/* help icon */}
    </div> 
</div>; 
}

export default Header


