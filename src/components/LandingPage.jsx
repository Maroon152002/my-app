import React from 'react'
import './LandPage.css';
import './blocks.scss';

export default function LandingPage() {
    return (
        <div className="main-landing-page">
            
            {/* <div className="men-img">
                <img src="/images/capman.png" alt="men" />
            </div> */}

            <div className="hero">
                <div class="hero__title"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
            </div>


            

            <div className="wave-image">
                <img src="/images/wave1.jpeg" alt="wave" />
            </div>

            <div className="innate-logo">
                <img src="/images/innate.jpeg" alt="innate" />
            </div>

            


        </div>
    );
}
