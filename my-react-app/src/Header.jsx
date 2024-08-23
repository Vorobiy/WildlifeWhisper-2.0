import React from "react";
import { Link } from "react-router-dom";

function Header() {    
    return(
        <div className="header-container">
            <header>
                <nav>
                    <h1 className="logo">Wildlife Whisper</h1>
                    <ul className="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Pinpoint Poacher</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header