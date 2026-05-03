import React from "react";
import {
    SiMercedes,
    SiBmw,
    SiPorsche,
    SiCadillac,
    SiChevrolet,
    SiLada,
    SiToyota,
    SiNissan
} from "react-icons/si";

function Hofo() {
    return (
        <div className="hofo">
            <div className="demo">
                <div className="towhead">
                    <h1>My Portfolio</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="our-cars">
                    <h2>Our Cars</h2>
                    <div className="iconsi">
                    </div>
                    <ul className="car-list">
                        <li> <SiMercedes size={25} color="white" /> Mercedes</li>
                        <li> <SiBmw size={25} color="white" /> B.M.W</li>
                        <li> <SiPorsche size={25} color="white" /> Porsche</li>
                        <li> <SiCadillac size={25} color="white" /> Cadillac</li>
                        <li> <SiChevrolet size={25} color="white" /> Chevrolet</li>
                        <li> <SiLada size={25} color="white" /> Lada</li>
                        <li> <SiToyota size={25} color="white" /> Toyota</li>
                        <li> <SiNissan size={25} color="white" /> Nissan</li>
                    </ul>
                </div>

                <div className="copyright">
                    <p>&copy; 2025 CarShowcase. All rights reserved.</p>
                </div>

                <div className="container">
                    
                    <div className="mainbox">
                        <div className="iconContainer">
                            <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="search_icon">
                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                            </svg>
                        </div>
                        <input className="search_input" placeholder="search" type="text" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hofo;
