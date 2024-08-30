import React, { useEffect, useState } from "react";
import { Grid2 } from "@mui/material";
import "./LandingPage.css";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      // Adjust threshold as needed
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Grid2
      container
      className={`main-landing-page ${scrolled ? "scrolled" : ""}`}
    >
      <Grid2 item xs={12} className="cube-container">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="cube"></div>
        ))}
      </Grid2>

      <Grid2 item className="wave-container">
        <img src="/images/wave.png" alt="wave" className="wave-image" />
      </Grid2>

      <Grid2 item className="logo-container">
        <img
          src="/images/innate_logo.png"
          alt="innate"
          className="logo-image"
        />
      </Grid2>

      <Grid2 item className="people-container">
        <img src="/images/man1.png" alt="man" className="man-image" />
        <img src="/images/woman1.png" alt="woman" className="woman-image" />
        <img src="/images/woman2.png" alt="woman2" className="woman2-image" />
      </Grid2>
    </Grid2>
  );
}
