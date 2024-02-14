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
    Chip,
    Stack,


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

                    <Box sx={{ marginTop: 8, marginBottom: 8, display: 'flex', flexDirection: 'column', alignItems: 'left', }}>

                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'left' }}>

                            <Box sx={{ width: '20%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Avatar src="https://pbs.twimg.com/media/FXTTYWfVUAAjIph?format=png&name=medium" sx={{ width: 150, height: 150, m: 1, bgcolor: 'secondary.main' }} />
                            </Box>

                            <Box sx={{ margin: 2, width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                                <Typography component="h1" variant="h5"> ร้านอาหารของฉัน </Typography>
                                <Stack direction="row" spacing={1}>
                                    <Chip label="ยืนยัน" color="success" />
                                    <Chip label="ยืนยัน" color="success" />
                                </Stack>
                            </Box>

                        </Box>


                        <Box sx={{ marginTop: 2, marginBottom: 2, display: 'flex', flexDirection: 'column' }}>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton component="a" href="/store/tableBooking">
                                        <ListItemIcon>
                                            <PeopleAltIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="คิวจองโต๊ะ" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton component="a" href="/store/edit">
                                        <ListItemIcon>
                                            <EditIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="แก้ไขรายละเอียด" secondary="กดเพื่อดูหน้าร้านค้า" />
                                    </ListItemButton>
                                </ListItem>

                            </List>
                        </Box>
                    </Box>

                </Container>
            </ThemeProvider>
        </>
    );
}