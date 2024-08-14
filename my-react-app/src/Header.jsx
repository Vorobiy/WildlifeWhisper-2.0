import React from "react";

function Header() {    
    return(
        <header className="header-container">
            <h1 className="header-left">Wildlife Whisper</h1>
            <nav className="header-right">
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Pinpoint Poacher</a></li>
                    <li><a href="#">Home</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header