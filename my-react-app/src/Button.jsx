import React from "react";
import { Link } from "react-router-dom";

function Button(){
    return(
        <div className='button'>
            <Link className={"link-styles"} to="/Pages/pinpointPoacher"><button>Pinpoint Poacher</button></Link>
        </div>
    );
}

export default Button;