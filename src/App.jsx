import "./App.css";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "../src/assets/components/Header/NavBar";
import Hero from "./assets/components/Header/Hero";
import AccordionModel from "./assets/components/Header/Accordion";
import CardDisplay from "./assets/components/Header/CardDisplay";
import CenteredTabs from "./assets/components/Header/Tabs";
import Chart1 from "./assets/components/Header/Chart1";
import Chart2 from "./assets/components/Header/Chart2";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("dark");

  const theme = createTheme({
    palette: {
      mode: mode
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ overflow: "hidden" }} bgcolor={'background.default'}>
        <NavBar mode={mode} setMode={setMode}/>
        <Hero />
        
        {/* Responsive Box */}
        <Box sx={{ margin: { xs: "0px 10px", sm: "0px 40px", md: "0px 90px" } }}>
          <AccordionModel />
        </Box>

        {/* Center Content */}
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
          <CardDisplay />
        </Box>

        {/* Responsive Stack */}
        <Stack sx={{ margin: { xs: "20px 10px", sm: "30px 40px", md: "40px 90px" } }}>
          <CenteredTabs />
        </Stack>

    {/* Charts: Adjust Layout for Mobile Only */}
<Stack 
  direction={{ xs: "column", md: "row" }} 
  spacing={2} 
  justifyContent="center"
  alignItems="center"
  sx={{ 
    width: "100%", 
    padding: "20px 10px",
  }}
>
  <Box 
    sx={{ 
      width: { xs: "100%", sm: "80%", md: "45%" }, 
      maxWidth: { md: "none" }, // Unrestricted for larger screens
      display: "flex", 
      justifyContent: { xs: "center", md: "flex-start" }, // Centered on mobile, normal for large screens
    }}
  >
    <Chart1 style={{ width: "100%", height: "auto" }} />
  </Box>
  <Box 
    sx={{ 
      width: { xs: "100%", sm: "80%", md: "45%" }, 
      maxWidth: { md: "none" }, 
      display: "flex", 
      justifyContent: { xs: "center", md: "flex-start" },
    }}
  >
    <Chart2 style={{ width: "100%", height: "auto" }} />
  </Box>
</Stack>

      </Box>
    </ThemeProvider>
  );
}

export default App;
