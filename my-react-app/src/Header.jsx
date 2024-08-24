import React from "react";
import { Link } from "react-router-dom";

function Header() {    
    return(
        <div className="header-container">
            <header>
                <nav>
                    <h1 className="logo">Wildlife Whisper</h1>
                    <ul className="nav-links">
                        <Link className={"link-styles"} to="/">Home</Link>
                        <Link className={"link-styles"} to="/Pages/aboutUs">Abous Us</Link>
                        <Link className={"link-styles"} to="/Pages/aboutUs">Pinpoint Poacher</Link>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header