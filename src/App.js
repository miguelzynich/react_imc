import React from 'react';
/*import './App.css';*/
/*import Header from './components/Header';*/
/*import CalculatorIMC from './components/IMC';*/
/*import Login from './components/Login/LoginControl'*/
import { Box, Container, ThemeProvider } from '@mui/system';
import { themeOne, themeTwo } from './theme';

function App() {
  return (
    <ThemeProvider theme={themeOne}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '10px',
          marginTop: '2rem',
        }}
        maxWidth='sm'>

        <Box sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 3,
          p: 2,
          minWidth: 250
        }}>

          <Box
            sx={{
              color: 'text.primary'
            }}
          >
            Visualizações
          </Box>
          <Box
            sx={{
              color: 'text.secondary',
              fontSize: 32,
              fontWeight: 'bold'
            }}
          >
            100k
          </Box>
          <Box
            sx={{
              color: 'success.dark',
              display: 'inline',
              fontWeight: 'bold',
              mx: 0.5,
              fontSize: 14,
            }}
          >
            =10%
          </Box>
          <Box>
            vs. last week
          </Box>

        </Box>

        <Box sx={{
          bgcolor: '#d9c9f5',
          boxShadow: 1,
          borderRadius: 3,
          p: 2,
          minWidth: 250
        }}>

          <Box
            sx={{
              color: 'text.primary'
            }}
          >
            Seções
          </Box>
          <Box
            sx={{
              color: 'text.secondary',
              fontSize: 32,
              fontWeight: 'bold'
            }}
          >
            20k
          </Box>
          <Box
            sx={{
              color: 'success.dark',
              display: 'inline',
              fontWeight: 'bold',
              mx: 0.5,
              fontSize: 14,
            }}
          >
            +5%
          </Box>
          <Box>
            vs. last week
          </Box>

        </Box>

      </Container>
    </ThemeProvider>
  );
}

export default App;
