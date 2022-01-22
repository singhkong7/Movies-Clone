import React from 'react'
import "./Error.scss";
import {Link} from "react-router-dom"
function Error() {
    return (
        <div className="ErrorPage">
            <h1>Page Not Found</h1>
           <Link to="/">
                <img src="https://raw.githubusercontent.com/dmalvia/React_Redux_ToolKit_Movie_App/master/src/images/pnf.jpg" alt="error" />
           </Link>
        </div>
    )
}

export default Error
