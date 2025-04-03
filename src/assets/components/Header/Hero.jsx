import React from "react";
import Stack from "@mui/material/Stack";
import HeroBanner from "./HeroBanner";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import IntroDivider from "./Divider";

const Hero = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      direction={isSmallScreen ? "column" : "row"}
      spacing={isSmallScreen ? 4 : 2}
      justifyContent="center"
      alignItems="center"
      sx={{ margin: { xs: "10px", sm: "15px", md: "30px" }, width: "100%" }}
    >
      <Box sx={{ width: { xs: "100%", sm: "50%", md: "30%" }, textAlign: "center" }}>
        <HeroBanner />
      </Box>
      <Box sx={{ width: { xs: "100%", sm: "50%", md: "70%" } }}>
        <IntroDivider />
      </Box>
    </Stack>
  );
};

export default Hero;
