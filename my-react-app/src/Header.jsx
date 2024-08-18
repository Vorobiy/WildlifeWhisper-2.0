import React from "react";

function Header() {    
    return(
        <div className="header-container">
            <header>
                <nav>
                    <h1 className="logo">Wildlife Whisper</h1>
                    <ul className="nav-links">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Pinpoint Poacher</a></li>
                        <li><a href="#">Home</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header