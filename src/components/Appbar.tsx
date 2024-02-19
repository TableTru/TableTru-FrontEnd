import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AppBarToggle from '@/components/AppBarToggle'


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="appBar">
          <div> {/* ส่วนทางซ้าย */} <AppBarToggle /></div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Aungpor
          </Typography>
          <div> {/* ส่วนขวา */} <Button color="inherit">Login</Button></div>
        </Toolbar>
      </AppBar>
    </Box>

  );
}