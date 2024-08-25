import React from "react";
import { Link } from "react-router-dom";

function Header() {    
    return(
        <div className="w-full px-[8%] absolute z-10">
            <header>
                <nav className="flex items-center justify-between">   
                <h1 className="text-white font-bold text-2xl">Wildlife Whisper</h1>
                <ul className="flex items-center py-7">
                        <Link className="inline-block mx-4 text-white font-bold py-1.5 no-underline" to="/"><button>Home</button></Link>
                        <Link className="inline-block mx-4 text-white font-bold py-1.5 no-underline" to="/Pages/aboutUs"><button>Abous Us</button></Link>
                        <Link className="inline-block mx-4 text-white font-bold py-1.5 no-underline" to="/Pages/pinpointPoacher"><button>Pinpoint Poacher</button></Link>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header