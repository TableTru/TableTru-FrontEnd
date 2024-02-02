"use client";

import React, { useState } from "react";
import { Image } from "@nextui-org/react";
import {
    Tabs,
    Tab,
    Container,
    Box, Avatar,
    Typography,
    Grid,
    TextField,
    Button,
    Link,
    CssBaseline,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListItemButton,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    AccordionActions,
    Autocomplete,
    Collapse,



} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const bookingList = [
    {
        user: "aungpor1",
        phone: "0813119090",
        people_num: "5",
        date: "2/2",
        time: "14.00"
    },
    {
        user: "aungpor2",
        phone: "0813119090",
        people_num: "2",
        date: "2/2",
        time: "14.30"
    },
    {
        user: "aungpor3",
        phone: "0813119090",
        people_num: "3",
        date: "2/2",
        time: "15.00"
    },
    {
        user: "aungpor4",
        phone: "0813119090",
        people_num: "2",
        date: "2/2",
        time: "16.00"
    },

];

export default function TableBooking() {
    return (
        <>
            <ThemeProvider theme={createTheme()}>
                <Container component="main" maxWidth="md">
                    <CssBaseline />

                    <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'left', }}>
                        <Typography component="h1" variant="h4">
                            รายการจองโต๊ะ
                        </Typography>



                        <List>
                            {bookingList.map((item, index) => (
                                <Accordion key={index}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls={`panel${index}-content`}
                                        id={`panel${index}-header`}
                                    >
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <Typography>{item.user}</Typography>
                                            <Typography variant="subtitle1">ทดสอบ</Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>{item.time}</Typography>
                                    </AccordionDetails>
                                    <AccordionActions>
                                        <Button>Cancel</Button>
                                        <Button>Agree</Button>
                                    </AccordionActions>
                                </Accordion>
                            ))}
                        </List>
                    </Box>


                </Container>
            </ThemeProvider >
        </>
    );
}