import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const HeroText = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Typography
        variant="h2"
        fontWeight="500"
        sx={{
          background: "linear-gradient(to right, #1BCF0E 0%, #37732E 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: { xs: "40px", sm: "60px", md: "80px" }, // Responsive font size
        }}
      >
        Krishna Mohan P.V.S
      </Typography>
    </Box>
  );
};

export default HeroText;
