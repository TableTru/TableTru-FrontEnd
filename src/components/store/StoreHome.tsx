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
    CardContent ,
    CardMedia,



} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';


export default function StoreHome() {
    const theme = useTheme();

    return (
        <>
            <ThemeProvider theme={createTheme()}>
                <Container component="main" maxWidth="md">
                    <CssBaseline />

                    <Box sx={{ marginTop: 8, display: 'flex', alignItems: 'left', }}>
                        <Card sx={{ display: 'flex', width: '100%' }}>
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
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                    <IconButton aria-label="previous">
                                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                                    </IconButton>
                                    <IconButton aria-label="play/pause">
                                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                                    </IconButton>
                                    <IconButton aria-label="next">
                                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                                    </IconButton>
                                </Box>
                            </Box>

                        </Card>
                    </Box>

                </Container>
            </ThemeProvider>
        </>
    );
}