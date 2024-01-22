'use client';

import {  createTheme  } from '@mui/material/styles';
import { red } from '@mui/material/colors';
const theme = createTheme({
    palette: {
      primary: {
        main: red[700],
      },
      secondary: {
        main: '#ff9800',
        dark:'#ffac33',
      },
    },
  });
export default theme;