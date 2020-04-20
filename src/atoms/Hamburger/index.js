import React from 'react';
import '../Hamburger/style.css';
import {
    Link
} from "react-router-dom";

function Hamburger() {
    return (
        <div className="menu-wrap">
            <input type="checkbox" className="toggler" />
            <div className="hamburger">
                <div>

                </div>
            </div>
            <div className="menu">
                <div>
                    <nav>
                        <ul>
                            <li><Link to="/home">HOME</Link></li>
                            <li><Link to="/about">ABOUT ME</Link></li>
                            <li><Link to="/contact">CONTACT</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Hamburger;
