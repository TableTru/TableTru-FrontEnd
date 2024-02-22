"use client";

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import FilterList from '@mui/icons-material/FilterList';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function AppBarWeb() {
    return (
        <>
            <Button color="inherit">หน้าหลัก</Button>
            <Button color="inherit">ประวัติ</Button>
            <Button color="inherit">Login</Button>
        </>
    );
}

function AppBarMobile({ toggleDrawer }) {
    return (
        <IconButton onClick={toggleDrawer} size="large" aria-label="FilterListIcon">
            <FilterListIcon color="inherit" />
        </IconButton>
    );
}

export default function AppBarToggle() {
    const [state, setState] = useState({
        left: false,
    });
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
        <>
            {isMobile ? (
                <AppBarMobile toggleDrawer={toggleDrawer} />
            ) : (
                <AppBarWeb />
            )}
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
        </>
    );
}
