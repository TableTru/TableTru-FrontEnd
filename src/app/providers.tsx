'use client';
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material/styles';
import { CssVarsProvider as JoyCssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/material/CssBaseline';


const theme = createTheme({
  palette: {
    primary: {
      main: red[700],
      light: red[700],
      dark: '#ea605d',
    },
    secondary: {
      main: '#ff9800',
      light: '#ff9800',
      dark: '#ffac33',
    },
  },
});

const materialTheme = materialExtendTheme();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ThemeProvider theme={theme}>
            {children}
      </ThemeProvider>
    </NextUIProvider>
  )
}