import { Stack } from "@mui/material";
import React from "react";
import MediaCard from "./Card";

const CardDisplay = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }} 
      spacing={4} 
      alignItems="center"
      justifyContent="center"
      sx={{ margin: { xs: "20px", md: "30px 60px" }, width: "100%" }}
    >
      <MediaCard />
      <MediaCard />
      <MediaCard />
    </Stack>
  );
};

export default CardDisplay;
