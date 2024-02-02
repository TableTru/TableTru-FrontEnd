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
    Autocomplete,
    Collapse,



} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
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
    //     const [open, setOpen] = useState(null);

    //   const handleClick = (index: number | null) => {
    //     setOpen((prevIndex) => (prevIndex === index ? null : index));
    //   };
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
                                        <Typography>{item.user}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>{item.time}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </List>
                        
                        {/* {bookingList.map((item, index) => (
                            <List sx={{ width: '100%', bgcolor: 'background.paper' }} key={index}>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemText primary={item.user} secondary={item.time} />
                                    </ListItemButton>
                                </ListItem>

                                <ListItemButton onClick={() => handleClick(index)}>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Inbox" />
                                    {open === index ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open === index} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText primary="Starred" />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            </List>
                        ))} */}

                        {/* <FixedSizeList
                            height={400}
                            width={360}
                            itemSize={100}
                            itemCount={bookingList.length}
                            overscanCount={5}
                        >
                            {({ index, style }) => (
                                <ListItem style={style}>
                                    <ListItemButton>
                                        <ListItemText primary={bookingList[index].user} secondary={bookingList[index].time} />
                                    </ListItemButton>
                                </ListItem>
                            )}
                        </FixedSizeList> */}
                    </Box>


                </Container>
            </ThemeProvider >
        </>
    );
}