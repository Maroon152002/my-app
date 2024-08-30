import React, { useState, useEffect } from "react";
import {
  Grid2,
  Container,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

import "./Footer.css";

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (isHovered && e.deltaY > 0) {
        setIsExpanded(true);
      } else if (isHovered && e.deltaY < 0) {
        setIsExpanded(false);
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isHovered]);

  return (
    <Container
      className={`footer-container ${isExpanded ? "expanded" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Grid2 container className="footer-content">
        <Grid2 item xs={12} className="footer-text" justifyContent={'center'}>
          <Typography style={{ fontWeight: "bold", fontSize: "25px" }}>
            LOGIN
          </Typography>
          {isExpanded && (
            <>
              {/* <Typography>Additional information goes here</Typography> */}
              <div className="social-icons">
                <IconButton
                  href="https://facebook.com"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  href="https://linkedin.com"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  href="https://instagram.com"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  href="https://twitter.com"
                  target="_blank"
                  aria-label="X"
                >
                  <img
                    src={require("../assets/images/prime_twitter.png")}
                    alt="Twitter"
                    className="twitter-icon"
                  />
                </IconButton>
              </div>
              <div className="footer-links">
                <div className="footer-link-item">
                  <IconButton aria-label="Home">
                    <HomeOutlinedIcon />
                  </IconButton>
                  <Typography style={{ fontSize: "12px" }}>Home</Typography>
                </div>
                <div className="footer-link-item">
                  <IconButton aria-label="About Us">
                    <InfoOutlinedIcon />
                  </IconButton>
                  <Typography style={{ fontSize: "12px" }}>About Us</Typography>
                </div>
                <div className="footer-link-item">
                  <IconButton aria-label="Services">
                    <BusinessCenterOutlinedIcon />
                  </IconButton>
                  <Typography style={{ fontSize: "12px" }}>Services</Typography>
                </div>
                <div className="footer-link-item">
                  <IconButton aria-label="Career">
                    <WorkHistoryOutlinedIcon />
                  </IconButton>
                  <Typography style={{ fontSize: "12px" }}>Career</Typography>
                </div>
                <div className="footer-link-item">
                  <IconButton aria-label="Contact Us">
                    <CallOutlinedIcon />
                  </IconButton>
                  <Typography style={{ fontSize: "12px" }}>
                    Contact Us
                  </Typography>
                </div>
              </div>
            </>
          )}
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Footer;
