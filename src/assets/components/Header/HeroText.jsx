import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const HeroText = () => {
  return (
    <Box sx={{width:'100%',height:'500px',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Typography variant="h1" fontWeight='500'>Krishna Mohan P.V.S</Typography>
    </Box>
  );
};

export default HeroText;
