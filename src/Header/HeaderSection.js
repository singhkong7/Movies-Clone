import React from 'react'
import {Link }from "react-router-dom";
import "./Header.scss";
function HeaderSection() {
    return (
        <div className="header">
            <Link to="/" style={{textDecorationLine:"none"}}>
                <h2>Movie App</h2>
            </Link>
            <div className="user-image">
                <img src="https://raw.githubusercontent.com/dmalvia/React_Redux_ToolKit_Movie_App/master/src/images/user.png" alt="Account"/>
            </div>

        </div>
    )
}

export default HeaderSection;
