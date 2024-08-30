import { styled, keyframes } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const rippleAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

// Gradient Background Form
export const GradientForm = styled("div")(({ theme }) => ({
  background: "transparent",
  borderRadius: "5px",
  padding: theme.spacing(4),
  // boxShadow: theme.shadows[2],
  position: "absolute",
  top: "0%",
  left: "10%",
  right: "10%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxSizing: "border-box",
  // Responsive design for sm or below
  [theme.breakpoints.down("sm")]: {
    position: "relative",
    top: "auto",
    left: "auto",
    right: "auto",
    marginTop: theme.spacing(2),
    width: "100%",
  },
}));

// Gradient Button Styles
export const GradientButton = styled(Button)({
  background: "linear-gradient(135deg, #B40309, #D24C4C)",
  color: "white",
  borderRadius: "25px",
  padding: "10px 20px",
  textTransform: "none",
  "&:hover": {
    background: "linear-gradient(135deg, #B40309, #D24C4C)",
  },
});

// ClickMe Button Styles
export const ClickMeButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(135deg, #B40309, #D24C4C)",
  color: "white",
  borderRadius: "25px",
  padding: "10px 20px",
  textTransform: "none",
  justifySelf: "center",
  width: "40%",
  zIndex: 5,
  transform: 'translateX(50%)',
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  marginTop: "20px",
  alignSelf: "center",
  "&:hover": {
    background: "linear-gradient(135deg, #B40309, #D24C4C)",
  },
  // Responsive design for sm or below
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
}));

// Custom TextField Style
export const CustomTextField = styled(TextField)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#B40309",
  },
  "& .MuiInput-underline:hover:before": {
    borderBottomColor: "#B40309",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B40309",
  },
}));

// Camera Wrapper Styles
export const CameraWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  cursor: "pointer",
  "&:hover": {
    "& .cameraIcon": {
      transform: "scale(2.2)", // Zoom the icon on hover
      transition: "transform 0.3s ease",
    },
  },
  // Responsive design for sm or below
  [theme.breakpoints.down("sm")]: {
    display: "block",
    textAlign: "center",
    marginBottom: theme.spacing(2),
  },
}));

// Camera Icon Styles
export const CameraIcon = styled(CameraAltIcon)(({ theme }) => ({
  fontSize: "4rem",
  color: "#B40309",
  transition: "transform 0.3s ease",
  // Responsive design for sm or below
  [theme.breakpoints.down("sm")]: {
    fontSize: "3rem",
  },
}));
