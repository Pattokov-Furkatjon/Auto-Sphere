import React from "react";
import man from "./oneman.png";
import women from "./women_1.jpg";
import Grandfather from "./grandfather.jpg";

function Hocom() {
    return (
        <div>
            <h1>WHAT DRIVERS SAY</h1>
            <div className="bigcom">
                {/* Man */}
                <div>
                    <img src={man} alt="Kell Daxa profile" loading="lazy" />
                    <h5>Kell Daxa</h5>
                    <p>This platform helped me find my perfect BMW in under 10 minutes. The specs comparison feature is brilliant.</p>
                </div>

                {/* Women */}
                <div>
                    <img src={women} alt="Sara Mit profile" loading="lazy" />
                    <h5>Sara Mit</h5>
                    <p>Finally a car site that doesn't overwhelm you. Clean, fast, and actually useful.</p>
                </div>

                {/* Grandfather */}
                <div>
                    <img src={Grandfather} alt="Lote Fox profile" loading="lazy" />
                    <h5>Lote Fox</h5>
                    <p>Bought my first Porsche after exploring it here. The details and photography are outstanding.</p>
                </div>
            </div>
        </div>
    );
}

export default Hocom;
