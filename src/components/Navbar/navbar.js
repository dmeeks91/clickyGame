import React from "react";
import "./navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
    <nav className="navbar">
        <div className="row">
            <div className="col-sm">
                Current Score: {props.currentScore} 
            </div>
            <div className="col-sm">
                90's Nickelodeon Characters
            </div>
            <div className="col-sm">
                Top Score: {props.topScore}
            </div>
        </div>
    </nav>
);

export default Navbar;