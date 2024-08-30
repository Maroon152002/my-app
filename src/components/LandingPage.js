import React, { useEffect, useState } from "react";
import Grid2 from "@mui/material/Grid2";
import "./LandingPage.css";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [allowScroll, setAllowScroll] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!allowScroll && window.scrollY > 100) {
        setScrolled(true);
        window.scrollTo(0, 0); // Snap back to the top after a small scroll to lock scroll
        setAllowScroll(true);
      } else if (allowScroll) {
        if (window.scrollY > 100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    const handleMouseEnter = () => {
      setHovered(true);
    };

    const handleMouseLeave = () => {
      setHovered(false);
    };

    window.addEventListener("scroll", handleScroll);

    // Enable scrolling after a delay (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setAllowScroll(true);
    }, 1000); // Adjust this duration based on animation

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [allowScroll]);

  return (
    <Grid2
      container
      className={`main-landing-page ${scrolled ? "scrolled" : ""}`}
    >
      <Grid2
        item
        xs={12}
        className="cube-container"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {[...Array(6)].map((_, index) => (
          <div key={index} className={`cube ${hovered ? "hovered" : ""}`}></div>
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
        <img src="/images/woman2.png" alt="woman" className="woman-image" />
        <img src="/images/woman1.png" alt="woman2" className="woman2-image" />
      </Grid2>
    </Grid2>
  );
}
