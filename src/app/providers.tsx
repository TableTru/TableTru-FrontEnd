'use client';
import {NextUIProvider} from "@nextui-org/react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
      primary: {
        main: red[700],
        light: red[700],
        dark: '#ea605d',
      },
      secondary: {
        main: '#ff9800',
        light:'#ff9800',
        dark:'#ffac33',
      },
    },
  });

export function Providers({children}: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </NextUIProvider>
    )
  }