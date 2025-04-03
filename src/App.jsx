import "./App.css";
import Box from "@mui/material/Box";
import { Stack, styled } from "@mui/material";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lime, purple } from "@mui/material/colors";
import NavBar from "../src/assets/components/Header/NavBar";
import Hero from "./assets/components/Header/Hero";
import AccordionModel from "./assets/components/Header/Accordion";
import CardDisplay from "./assets/components/Header/CardDisplay";
import CenteredTabs from "./assets/components/Header/Tabs";
import Chart1 from "./assets/components/Header/Chart1";
import Chart2 from "./assets/components/Header/Chart2";
import { useState } from "react";

// export const theme = createTheme({
//   palette: {
//     // primary: { main: "#4caf50" },
//     // secondary: lime,
//     // mode:mode
//   },
// });

function App() {
  const [mode, setMode] = useState("dark");

  const theme = createTheme({
    palette: {
      mode:mode
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ overflow: "hidden" }} bgcolor={'background.default'}>
        <NavBar mode={mode} setMode={setMode}/>
        <Hero />
        <Box style={{ margin: "0px 90px" }}>
          <AccordionModel />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardDisplay />
        </Box>
        <Stack sx={{ margin: "40px 90px" }}>
          <CenteredTabs />
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="space-evenly">
          <Chart1 />
          <Chart2 />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
