import React from "react";
import '../App.css';
import reactLogo from "../images/logo192.png";

function Navbar(){
    return(
        <header>
            <nav>
                <img 
                    src={reactLogo} 
                    className="nav-logo"
                />
                <h3 className="nav-logo_text">ReactFacts</h3>
                <h4 className="nav-title">Project 1</h4>
            </nav>
        </header>
    );
}

export default Navbar;