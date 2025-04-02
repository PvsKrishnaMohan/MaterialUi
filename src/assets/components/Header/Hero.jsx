import React from "react";
import Stack from "@mui/material/Stack";
import HeroText from "./HeroText";
import HeroBanner from "./HeroBanner";
import { Box } from "@mui/material";

const Hero = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="space-evenly"
      sx={{ margin: "15px" }}
    >
      <Box sx={{ flex: "1" }}>
        <HeroBanner />
      </Box>
      <Box sx={{ flex: "4" }}>
        <HeroText />
      </Box>
    </Stack>
  );
};

export default Hero;
