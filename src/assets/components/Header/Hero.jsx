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
      direction={isSmallScreen ? "column" : "row"} // Image below card only on small screens
      spacing={isSmallScreen ? 4 : 10} // Increased spacing for large screens
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "100%",
        px: { xs: 2, sm: 4, md: 6 },
        mt: { xs: 3, md: 6 },
        mb: { xs: 3, md: 10 },
      }}
    >
      {/* Card Section */}
      <Box
        sx={{
          width: { xs: "100%", sm: "60%", md: "40%" },
          display: "flex",
          justifyContent: "center",
          mb: isSmallScreen ? 4 : 8, 
        }}
      >
        <IntroDivider />
      </Box>

      {/* Image Section (Will be below card on mobile) */}
      <Box
        sx={{
          width: { xs: "100%", sm: "60%", md: "50%" },
          display: "flex",
          justifyContent: "center",
          order: isSmallScreen ? 2 : 1, 
          mt: isSmallScreen ? -2 : 0, 
        }}
      >
        <HeroBanner />
      </Box>
    </Stack>
  );
};

export default Hero;
