"use client";

import React, { useEffect, useState } from "react";
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
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import DraftsIcon from '@mui/icons-material/Drafts';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import {getStoreById, getStoreImageByType } from '@/services/store.service'
import { FixedSizeList, ListChildComponentProps } from 'react-window';

interface Store {
    store_id: number;
    category_id: number;
    location_id: number;
    store_name: string;
    store_description: string;
    store_cover_image: string;
    table_booking: number;
    sum_rating: number;
    Latitude: string;
    longitude: string;
    OpenTimes: object[];
}

interface StoreImage {
    store_image_id: number;
    store_id: number;
    store_image_name: string;
    store_image_type: string;
}

const storeImageTemp: StoreImage = {
    store_image_id: 1,
    store_id: 1,
    store_image_name: "https://pbs.twimg.com/media/FXTTYWfVUAAjIph?format=png&name=medium",
    store_image_type: "ภาพปกร้าน"
}

export default function StoreHome() {
    const theme = useTheme();
    const [storeData, setStoreData] = useState<Store>();

    const fetchData = async () => {
        const userData = localStorage.getItem("userData")
        const userDataJson = JSON.parse(userData || "[]");
        const data = await getStoreById(userDataJson.store_id);
        console.log(data);

        if (data) {
            setStoreData(data);
            console.log(data);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <ThemeProvider theme={createTheme()}>
                <Container component="main" maxWidth="md">
                    <CssBaseline/>

                    {/*<Box sx={{ marginTop: 8, marginBottom: 8, display: 'flex', flexDirection: 'column', alignItems: 'left' }}>*/}
                    <div className={"w-fit item-center justify-around center mx-auto mt-24"}>

                        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <div
                                className={"w-fit item-center justify-around center grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center space-y-4 space-x-4 mt-2 mb-2"}>
                                <Box
                                    sx={{width: '20%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                    <Avatar src={storeData?.store_cover_image}
                                            sx={{width: 150, height: 150, m: 1, bgcolor: 'secondary.main'}}/>
                                </Box>

                                <Box sx={{
                                    margin: 10,
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'left'
                                }}>
                                    <Typography component="h1" variant="h5"> {storeData?.store_name} </Typography>
                                </Box>
                            </div>
                        </Box>
                    </div>
                    {/*List*/}
                    <Container component="main" maxWidth="md">
                        <Box sx={{
                            marginTop: 2,
                            marginBottom: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'left'
                        }}>
                            <Grid item xs={10} sm container>
                                <List sx={{width: '100%'}}>
                                    <ListItem disablePadding>
                                        <ListItemButton component="a" href="/store/tableBooking">
                                            <ListItemIcon>
                                                <PeopleAltIcon/>
                                            </ListItemIcon>
                                            <ListItemText primary="คิวจองโต๊ะ"/>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton component="a" href="/store/edit">
                                            <ListItemIcon>
                                                <EditIcon/>
                                            </ListItemIcon>
                                            <ListItemText primary="แก้ไขรายละเอียด" secondary="กดเพื่อดูหน้าร้านค้า"/>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton component="a" href="/store/promo">
                                            <ListItemIcon>
                                                <LoyaltyIcon/>
                                            </ListItemIcon>
                                            <ListItemText primary="เพิ่มโปรโมชั่น"
                                                          secondary="กดเพื่อดูรายการโปรโมชั่น"/>
                                        </ListItemButton>
                                    </ListItem>

                                </List>
                            </Grid>
                        </Box>
                        {/*</Box>*/}
                    </Container>
                </Container>
            </ThemeProvider>
        </>
);
}