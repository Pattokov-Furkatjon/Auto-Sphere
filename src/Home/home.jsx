 import React from "react";
import './home.css';
import one from './one.png';

function Home() {
    return (
        <div className="home">
            <div className="one">
                <h1>Discover Your Dream Car</h1>
                <p>Explore the world's most iconic automotive brands — from luxury sedans to performance machines. Find specs, compare models, and make confident choices.</p>


                <button>
                    <div className="span-mother">
                        <span>E</span>
                        <span>X</span>
                        <span>P</span>
                        <span>L</span>
                        <span>O</span>
                    </div>
                    <div className="span-mother2">
                        <span>R</span>
                        <span>E</span>
                    </div>
                </button>
            </div>

            <img src={one} alt="Mercedes luxury car" className="oneimg" loading="lazy" />
        </div>
    );
}

export default Home;
