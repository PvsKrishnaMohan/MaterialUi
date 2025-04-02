import './App.css'
import Box from '@mui/material/Box';
import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple } from '@mui/material/colors';
import NavBar from '../src/assets/components/Header/NavBar'
import Hero from './assets/components/Header/Hero';
import AccordionModel from './assets/components/Header/Accordion';
import CardDisplay from './assets/components/Header/CardDisplay';


export const theme = createTheme({
  palette: {
    primary: { main: '#4caf50' },
    secondary: lime,
  },
});

function App() {
  // const CustomButton = styled(Button)({
  //   backgroundColor:'yellow'
  // })

  return (    
      <Box sx={{overflow:'hidden'}}>
          <NavBar/>
          <Hero/>
          <Box style={{margin:'0px 90px'}}>
          <AccordionModel/>
          </Box>
          <Box sx={{display:'flex',justifyContent:'center','alignItems':'center'}}>
          <CardDisplay/>
          </Box>
      </Box>      
  )
}

export default App
