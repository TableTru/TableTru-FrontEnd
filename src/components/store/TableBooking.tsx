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


} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CreateStoreDetail from '@/components/store/CreateStoreDetail'
import ImageUpload from '@/components/store/ImageUpload'


export default function TableBooking() {
    return (
        <>
            <ThemeProvider theme={createTheme()}>
                <Container component="main" maxWidth="md">
                    <CssBaseline />

                    <Box sx={{ marginTop: 8, display: 'flex', alignItems: 'left', }}>
                        <Typography component="h1" variant="h4">
                            รายการจองโต๊ะ
                        </Typography>
                    </Box>

                    <Box sx={{ mt: 3 }}>
                        <Grid container spacing={2}>

                        </Grid>
                    </Box>

                </Container>
            </ThemeProvider >
        </>
    );
}