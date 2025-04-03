import React from "react";
import Stack from "@mui/material/Stack";
import HeroBanner from "./HeroBanner";
import { Box } from "@mui/material";
import IntroDivider from "./Divider";

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
        <IntroDivider/>
      </Box>
    </Stack>
  );
};

export default Hero;
