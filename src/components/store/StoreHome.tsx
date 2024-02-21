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
import DraftsIcon from '@mui/icons-material/Drafts';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';


interface Store {
    store_id: number;
    category_id: number;
    location_id: number;
    store_name: string;
    store_description: string;
    table_booking: number;
    sum_rating: number;
    Latitude: string;
    longitude: string;
    OpenTimes: object[];
}

const storeTemp: Store =
{
    store_id: 1,
    category_id: 1,
    location_id: 1,
    store_name: "ร้านค้าของฉัน",
    store_description: 'hahahahahahahahahaha',
    table_booking: 4,
    sum_rating: 3.25,
    Latitude: '',
    longitude: '',
    OpenTimes: [
        {
            day: 'วันจันทร์',
            open_time: '',
            close_time: ''
        },
        {
            day: 'วันอังคาร',
            open_time: '',
            close_time: ''
        }
    ]
}

export default function StoreHome() {
    const theme = useTheme();
    const [storeData, setStoreData] = useState<Store>();

    const fetchData = async () => {
        // const data = await getStore();
        // console.log(data);

        // if (data) {
        //     setStoreData(data);
        //     console.log(data);
        // }

        setStoreData(storeTemp);
    };

    useEffect(() => {
        fetchData();
    }, []);

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
                                <Typography component="h1" variant="h5"> {storeData?.store_name} </Typography>
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