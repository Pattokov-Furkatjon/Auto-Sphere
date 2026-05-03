import React from "react";
import roll from "./rioo.png";


function Homme() {
    return (
        <div className="rocki-recklom">
            <img src={roll} alt="Rolls-Royce Spectre luxury car" className="roll-img" loading="lazy" />
            <div>
                <h1>FEATURED MODEL</h1>
                <p>The Rolls-Royce Spectre is the brand's first fully<br/> electric car, combining iconic luxury with<br/> cutting-edge technology. It features an<br/> elegant design, exceptional comfort,<br/> and a sustainable electric powertrain,<br/> setting a new standard for the future of<br/> luxury vehicles.</p>
                <button className="uiverse">
                  View Details
                  <span className="tooltip">Explore this model now!</span>
                </button>
            </div>
        </div>
    );
}

export default Homme;
