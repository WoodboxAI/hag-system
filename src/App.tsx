import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MainAppContainer from './frontend/components/MainAppContainer';

// Dunkles Theme für die Anwendung erstellen
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00b0ff',
    },
    secondary: {
      main: '#7c4dff',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <MainAppContainer />
    </ThemeProvider>
  );
}

export default App;