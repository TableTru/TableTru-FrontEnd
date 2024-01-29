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
    Card,
    CardContent,
    CardMedia,



} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import ListItemIcon from '@mui/material/ListItemIcon';
import DraftsIcon from '@mui/icons-material/Drafts';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';


export default function StoreHome() {
    const theme = useTheme();

    return (
        <>
            <ThemeProvider theme={createTheme()}>
                <Container component="main" maxWidth="md">
                    <CssBaseline />

                    <Box sx={{ marginTop: 8, display: 'flex', alignItems: 'left', }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Card sx={{ display: 'flex', width: '100%', height: '150px' }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 151 }}
                                        image="https://pbs.twimg.com/media/FXTTYWfVUAAjIph?format=png&name=medium"
                                        alt="Live from space album cover"
                                    />

                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="h5">
                                                ร้านอาหารของฉัน
                                            </Typography>
                                        </CardContent>
                                        {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                            <IconButton aria-label="previous">
                                                {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                                            </IconButton>
                                            <IconButton aria-label="play/pause">
                                                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                                            </IconButton>
                                            <IconButton aria-label="next">
                                                {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                                            </IconButton>
                                        </Box> */}
                                    </Box>

                                </Card>
                            </Grid>

                            <Grid item xs={12}>
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton component="a" href="/store/tableBooking">
                                            <ListItemIcon>
                                                <PeopleAltIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="คิวจองโต๊ะ" />
                                        </ListItemButton>
                                    </ListItem>
                                    {/* <ListItem disablePadding>
                                        <ListItemButton component="a" href="/">
                                            <ListItemIcon>
                                                <DraftsIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="คอมเม้นและรีวิว" />
                                        </ListItemButton>
                                    </ListItem> */}
                                    <ListItem disablePadding>
                                        <ListItemButton component="a" href="/store/edit">
                                            <ListItemIcon>
                                                <EditIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="แก้ไขรายละเอียด" secondary="กดเพื่อดูหน้าร้านค้า" />
                                        </ListItemButton>
                                    </ListItem>

                                </List>
                            </Grid>

                        </Grid>


                        <nav aria-label="main mailbox folders">

                        </nav>
                    </Box>

                </Container>
            </ThemeProvider>
        </>
    );
}