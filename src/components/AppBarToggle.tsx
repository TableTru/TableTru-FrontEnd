"use client";

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import FilterList from '@mui/icons-material/FilterList';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function AppBarToggle() {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: string, open: boolean) =>
      (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton size="large" onClick={toggleDrawer(anchor, true)} sx={{ ml: "16px" }} aria-label="FilterListIcon"> <FilterList className="appBar" color="primary" /> </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <Box
              sx={{ width: anchor === 'top' ? 'auto' : 250 }}
              role="presentation"
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <Button onClick={toggleDrawer(anchor, false)}>Close {anchor}</Button>
              <List>
                <ListItem button key="หน้าแรก">
                  <ListItemText primary="หน้าแรก" />
                </ListItem>
                <ListItem button key="คำสั่งซื้อ">
                  <ListItemText primary="คำสั่งซื้อ" />
                </ListItem>
                <ListItem button key="ร้านค้า">
                  <ListItemText primary="ร้านค้า" />
                </ListItem>
              </List>
              <Divider />

            </Box>
          </SwipeableDrawer>

        </React.Fragment>
      ))}
    </div>
  );
}
