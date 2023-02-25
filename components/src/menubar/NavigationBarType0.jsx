import React from "react";
import cssStyle from "./NavigationBarType0.css"

const NavBarType0 = () => {
    return (
        <nav id="topMenu" style={cssStyle}>
            <ul>
                <li><a className="menuLink" href="#">About us</a></li>
                <li><a className="menuLink" href="#">Ministries</a></li>
                <li><a className="menuLink" href="#">Community</a></li>
                <li><a className="menuLink" href="#">Locations</a></li>
                <li><a className="menuLink" href="#">Blog</a></li>
            </ul>
        </nav>
    )
}

export default NavBarType0