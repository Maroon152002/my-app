import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Lottie from "lottie-react";
import {
  GradientForm,
  CustomTextField,
  ClickMeButton,
  CameraWrapper,
  CameraIcon,
} from "./themeStyles";
import maleAnimation from "../assets/male.json";
import femaleAnimation from "../assets/female.json";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneNumberRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

export const AnimationForm = () => {
  const [hoveredAnimation, setHoveredAnimation] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "",
    contactNo: "",
    email: "",
    location: "",
    jobRole: "",
    gender: "MALE",
  });
  const [errors, setErrors] = useState({
    email: "",
    contactNo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (
      !phoneNumberRegex.test(`${formData.countryCode}${formData.contactNo}`)
    ) {
      errors.contactNo = "Invalid phone number format";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      // Add your submit logic here
    }
  };

  const handleMouseEnter = (animation) => {
    setHoveredAnimation(animation);
    setFormData((prevData) => ({
      ...prevData,
      gender: animation === "left" ? "MALE" : "FEMALE",
    }));
  };

  const handleMouseLeave = () => {
    setHoveredAnimation(null);
  };

  const handleCameraClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.createElement("video");
      video.srcObject = stream;
      video.play();
      const mediaStream = video.srcObject;
      const tracks = mediaStream.getTracks();

      // Stop all tracks (camera) when done
      video.onended = () => {
        tracks.forEach((track) => track.stop());
      };

      // Optionally, display video in a popup or modal
      // You can handle this by creating a new component or a modal.
      document.body.appendChild(video);
    } catch (err) {
      console.error("Error accessing camera: ", err);
    }
  };

  return (
    <Grid
      xs={12}
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ overflow: "hidden", marginTop: "1.5vh" }}
    >
      {/* Animation 1 with Click Me Button */}
      <Grid
        item
        xs={4}
        onMouseEnter={() => handleMouseEnter("left")}
        onMouseLeave={handleMouseLeave}
        style={{ position: "relative", marginTop: "2vh" }}
      >
        <Lottie
          animationData={maleAnimation}
          style={{
            transform: `scale(${
              hoveredAnimation === "left" ? 0.6 : 1.1
            }) translate(${hoveredAnimation === "left" ? "40%" : "0%"}, ${
              hoveredAnimation === "left" ? "-40%" : "0"
            })`,
            transition: "transform 0.5s ease",
            "@media (max-width: 900px)": {
              transform: "none",
              width: "50%",
              height: "50%",
            },
          }}
          loop
        />
        <GradientForm style={{ opacity: hoveredAnimation === "left" ? 1 : 0 }}>
          <CustomTextField
            name="name"
            label="Name"
            fullWidth
            value={formData.name}
            onChange={handleChange}
          />
          <Grid container spacing={0} rowGap={"1vh"}>
            <Grid item xs={4}>
              <CustomTextField
                name="countryCode"
                label="Country Code"
                fullWidth
                value={formData.countryCode}
                onChange={handleChange}
                inputProps={{ maxLength: 3 }}
                placeholder="+1"
              />
            </Grid>
            <Grid item xs={8}>
              <CustomTextField
                name="contactNo"
                label="Contact No"
                fullWidth
                value={formData.contactNo}
                onChange={handleChange}
                inputProps={{ maxLength: 10 }}
                placeholder="1234567890"
              />
            </Grid>
          </Grid>
          {errors.contactNo && (
            <div style={{ color: "red" }}>{errors.contactNo}</div>
          )}
          <CustomTextField
            name="email"
            label="Email"
            fullWidth
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
          <CustomTextField
            name="location"
            label="Location"
            fullWidth
            value={formData.location}
            onChange={handleChange}
          />
          <CustomTextField
            name="jobRole"
            label="Job Role"
            fullWidth
            value={formData.jobRole}
            onChange={handleChange}
          />
        </GradientForm>
        <ClickMeButton onClick={handleSubmit}>SUBMIT</ClickMeButton>
      </Grid>

      {/* Camera Icon */}
      <Grid item sm={4} display={{xs: 'none', sm: 'flex'}} >
        {/* <CameraWrapper onClick={handleCameraClick}>
          <CameraIcon className="cameraIcon" />
        </CameraWrapper> */}
        <div>
          {/* <ClickMeButton>RETAKE</ClickMeButton>
          <ClickMeButton>SUBMIT</ClickMeButton> */}
        </div>
      </Grid>

      {/* Animation 2 with Click Me Button */}
      <Grid
        item
        xs={4}
        onMouseEnter={() => handleMouseEnter("right")}
        onMouseLeave={handleMouseLeave}
        style={{ position: "relative", marginTop: "2.5vh" }}
      >
        <Lottie
          animationData={femaleAnimation}
          style={{
            transform: `scale(${
              hoveredAnimation === "right" ? 0.7 : 1.5
            }) translate(${hoveredAnimation === "right" ? "40%" : "0"}, ${
              hoveredAnimation === "right" ? "-40%" : "0"
            })`,
            transition: "transform 0.5s ease",
            "@media (max-width: 900px)": {
              transform: "none",
              width: "50%",
              height: "50%",
            },
          }}
          loop
        />
        <GradientForm style={{ opacity: hoveredAnimation === "right" ? 1 : 0 }}>
          <CustomTextField
            name="name"
            label="Name"
            fullWidth
            value={formData.name}
            onChange={handleChange}
          />
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <CustomTextField
                name="countryCode"
                label="Country Code"
                fullWidth
                value={formData.countryCode}
                onChange={handleChange}
                inputProps={{ maxLength: 3 }}
                placeholder="+1"
              />
            </Grid>
            <Grid item xs={8}>
              <CustomTextField
                name="contactNo"
                label="Contact No"
                fullWidth
                value={formData.contactNo}
                onChange={handleChange}
                inputProps={{ maxLength: 10 }}
                placeholder="1234567890"
              />
            </Grid>
          </Grid>
          {errors.contactNo && (
            <div style={{ color: "red" }}>{errors.contactNo}</div>
          )}
          <CustomTextField
            name="email"
            label="Email"
            fullWidth
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
          <CustomTextField
            name="location"
            label="Location"
            fullWidth
            value={formData.location}
            onChange={handleChange}
          />
          <CustomTextField
            name="jobRole"
            label="Job Role"
            fullWidth
            value={formData.jobRole}
            onChange={handleChange}
          />
        </GradientForm>
        <ClickMeButton onClick={handleSubmit}>SUBMIT</ClickMeButton>
      </Grid>
    </Grid>
  );
};
