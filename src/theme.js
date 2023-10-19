import { createTheme } from '@mui/system';

export const themeOne = createTheme({
  palette: {
    background: {
      paper: '#D5D5D5', 
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },

});


export const themeTwo = createTheme({
  palette: {
    background: {
      paper: '#D8D8D8', 
    },
    text: {
      primary: '#46505A',
      secondary: '#173A5E',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },

});
