import React, { useState } from "react";
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

function Header() {
    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">
            <div className="header-left">
                <MenuIcon className="menu" />
                <Link to="/">
                <img className="header-logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="youtube" />
                </Link>
            </div>
            <div className="header-input">
                <input 
                    onChange={e => setInputSearch(e.target.value)}
                    value={inputSearch} 
                    type="text" 
                    placeholder="Search" />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header-inputButton" />
                </Link>
            </div>
            <div className="header-icons">
                <VideoCallIcon className="header-icon" />
                <AppsIcon className="header-icon" />
                <NotificationsIcon className="header-icon" />
                <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="profile" className="avatar" />
            </div>
        </div>
    );
}

export default Header;
