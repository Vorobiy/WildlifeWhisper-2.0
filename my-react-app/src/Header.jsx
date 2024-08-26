import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="w-full px-4 md:px-8 lg:px-16 absolute z-10">
            <header>
                <nav className="flex items-center justify-between py-4">
                    <h1 className="text-white font-bold text-xl md:text-2xl lg:text-3xl">Wildlife Whisper</h1>
                    <ul className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
                        <Link className="text-white font-bold py-1.5 no-underline" to="/">
                            <button className="text-sm md:text-base lg:text-lg">Home</button>
                        </Link>
                        <Link className="text-white font-bold py-1.5 no-underline" to="/Pages/aboutUs">
                            <button className="text-sm md:text-base lg:text-lg">About Us</button>
                        </Link>
                        <Link className="text-white font-bold py-1.5 no-underline" to="/Pages/pinpointPoacher">
                            <button className="text-sm md:text-base lg:text-lg">Pinpoint Poacher</button>
                        </Link>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;