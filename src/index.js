import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App';
import {
  ThemeProvider,
  createTheme,
} from "@mui/material";



const theme = createTheme({
  pallete : {
    light:'#fff',
    muted:'#333',
    danger:'#e63e15',
  },
  typography: {
    "fontFamily": `'Open Sans', sans-serif`,
    "fontSize": 12,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
    subtitle1: {
      fontSize: 12,
      
    },
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
