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
        padding: { xs: "10px", sm: "20px", md: "40px" },
      }}
    >
      <Typography
        variant="h2"
        fontWeight={600}
        sx={{
          background: "linear-gradient(to right, #1BCF0E 0%, #37732E 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: { xs: "32px", sm: "50px", md: "70px", lg: "90px" },
          lineHeight: { xs: "40px", sm: "60px", md: "80px", lg: "100px" },
          fontWeight: "bold",
          textWrap: "balance",
        }}
      >
        Krishna Mohan P.V.S
      </Typography>
    </Box>
  );
};

export default HeroText;
