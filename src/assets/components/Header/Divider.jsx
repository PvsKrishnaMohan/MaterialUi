import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import HeroText from "./HeroText";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function IntroDivider() {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: { xs: "90%", sm: 600, md: 760 }, // Responsive width
        minHeight: 300, // Adjusts dynamically instead of fixed height
        borderRadius: "15px",
        boxShadow: 3,
        p: { xs: 2, sm: 3 },
        textAlign: "center",
        mx: "auto", // Center horizontally
        mt: 3, // Adds spacing from top
        backgroundColor: "background.paper",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Centers content inside card
      }}
    >
      <Box>
        <Stack
          direction="row"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            gap: 1, // Adds spacing between text and icon
            mb: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
          >
            Hello!, I'm
          </Typography>
          <GitHubIcon sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem" } }} />
        </Stack>

        {/* Responsive HeroText Content */}
        <HeroText />
      </Box>
    </Card>
  );
}
