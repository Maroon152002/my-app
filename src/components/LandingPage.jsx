import React from 'react'
import './LandPage.css';

export default function LandingPage() {
    return (
        <div className="landing-page">
            <div className="img">
                <img src="/images/Picture1.jpeg" alt="boy" />
            </div>

            <div className="wave-image">
                <img src="/images/wavesvg.svg" alt="wave" />
            </div>

            <div className="innate-logo">
                <img src="/images/innate.jpeg" alt="innate" />
            </div>

            <div className="boygif">
                <img src="/images/gif1.gif" alt="gif" />
            </div>

            <div className="camera">
                <img src="" alt="" />
            </div>

            <div className="girlgif">
                <img src="/images/gif2.gif" alt="gif" />
            </div>

        </div>
    );
}
