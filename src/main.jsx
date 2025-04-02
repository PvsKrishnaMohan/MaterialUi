import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider,createTheme } from '@mui/material/styles';
import App from './App.jsx'
import {theme} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </StrictMode>,
)
