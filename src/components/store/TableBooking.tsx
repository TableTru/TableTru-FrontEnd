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
    AccordionActions,
    Autocomplete,
    Collapse,
    Chip,
    Stack,

} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface StoreTableBooking {
    table_booking_id: number;
    user_id: number;
    table_booking_status: string;
    table_booking_count: number;
    table_booking_time: string;
    username: string;
    phone_num: string;
}

const storeBookingTemp: StoreTableBooking[] = [
    {
        table_booking_id: 1,
        user_id: 1,
        table_booking_status: 'ยังไม่ถึงกำหนด',
        table_booking_count: 4,
        table_booking_time: '2024-02-25T17:00',
        username: 'aungpor',
        phone_num: '0813111234',
    },
    {
        table_booking_id: 2,
        user_id: 1,
        table_booking_status: 'อยู่ระหว่างดำเนินการ',
        table_booking_count: 2,
        table_booking_time: '2024-02-25T17:00',
        username: 'aungpor',
        phone_num: '0813111234',
    },
    {
        table_booking_id: 3,
        user_id: 1,
        table_booking_status: 'เสร็จสิ้น',
        table_booking_count: 3,
        table_booking_time: '2024-02-25T16:04',
        username: 'aungpor',
        phone_num: '0813111234',
    },
    {
        table_booking_id: 4,
        user_id: 1,
        table_booking_status: 'ยกเลิก',
        table_booking_count: 3,
        table_booking_time: '2024-02-25T16:04',
        username: 'aungpor',
        phone_num: '0813111234',
    },
]


export default function TableBooking() {
    const [value, setValue] = useState('1');
    const [storeBookingData, setStoreBookingData] = useState<object[]>([])

    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric' };

    const fetchData = async () => {
        const userData = localStorage.getItem("userData")
        const userDataJson = JSON.parse(userData || "[]");

        // if (userData) {
        //     const store_id = userDataJson.store_id

        //     const tableBookingArray = [];
        //     const data = await getTableBookingByStoreId(store_id);

        //     if (data) {
        //         for (const tableBookingObject of data) {
        //             tableBookingArray.push(tableBookingObject);
        //         }
        //         setStoreBookingData(tableBookingArray);
        //         console.log(tableBookingArray);
        //     }
        // }

        const storeBookingTempWithDate = storeBookingTemp.map(booking => ({
            ...booking,
            table_booking_time: new Date(booking.table_booking_time),
        }));
        console.log(storeBookingTempWithDate);
        //เอาไปใส่ใน loop ข้างบนทีหลัง


        for (const tableBookingObject of storeBookingTempWithDate) {
            const diff = Math.abs(tableBookingObject.table_booking_time.getTime() - new Date().getTime());
            const diffInHours = diff / (1000 * 60 * 60);

            if (diffInHours >= 1) {
                console.log("auto set booking status active");
            }
        }


        setStoreBookingData(storeBookingTempWithDate)
    };

    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const finishButton = (tablebookingId: number) => {
        const updateData = {
            table_booking_id: tablebookingId,
            table_booking_status: 'เสร็จสิ้น'
        }
        const updatedStoreBookingTemp = storeBookingData.filter(booking => booking.table_booking_id !== tablebookingId);
        setStoreBookingData(updatedStoreBookingTemp);

        // const updateBookingRes = tableBookingUpdateById(updateData)
        // console.log(updateBookingRes);
    }

    const cancleButton = (tablebookingId: number) => {
        const updateData = {
            table_booking_id: tablebookingId,
            table_booking_status: 'ยกเลิก'
        }
        const updatedStoreBookingTemp = storeBookingData.filter(booking => booking.table_booking_id !== tablebookingId);
        setStoreBookingData(updatedStoreBookingTemp);

        // const updateBookingRes = tableBookingUpdateById(updateData)
        // console.log(updateBookingRes);
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'ยกเลิก':
                return 'error'; // สีแดง
            case 'อยู่ระหว่างดำเนินการ':
                return 'warning'; // สีเหลือง
            case 'เสร็จสิ้น':
                return 'success'; // สีเขียว
            default:
                return 'default'; // สีเทา
        }
    };


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <ThemeProvider theme={createTheme()}>
                <Container component="main" maxWidth="md">
                    <CssBaseline />

                    <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'left', }}>
                        <Typography component="h1" variant="h4">
                            รายการจองโต๊ะ
                        </Typography>
                    </Box>

                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleTabChange} textColor="primary" indicatorColor="primary" centered aria-label="lab API tabs example">
                                    <Tab label="Ongoing" value="1" />
                                    <Tab label="Historical" value="2" />
                                </TabList>

                            </Box>

                            <Box sx={{ marginBottom: 8 }}>
                                <TabPanel value="1">
                                    <List>
                                        {storeBookingData.map((item, index) => (
                                            <Accordion key={index} >
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls={`panel${index}-content`}
                                                    id={`panel${index}-header`}
                                                >
                                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                        <Typography>{item.username}</Typography>
                                                        <Typography variant="subtitle1">เบอร์โทรศัพท์: {item.phone_num}</Typography>
                                                        <Typography variant="subtitle1">จำนวนคน: {item.table_booking_count}</Typography>
                                                        <Typography variant="subtitle1">เวลาจอง: {item.table_booking_time.toLocaleDateString(undefined, timeOptions)}</Typography>
                                                    </Box>
                                                </AccordionSummary>
                                                {/* <AccordionDetails>
                                                <Typography>{item.time}</Typography>
                                            </AccordionDetails> */}
                                                <AccordionActions>
                                                    <Button
                                                        fullWidth
                                                        variant="outlined"
                                                        sx={{ mt: 3, mb: 2 }}
                                                        onClick={() => cancleButton(item.table_booking_id)}
                                                    >
                                                        ยกเลิก
                                                    </Button>
                                                    <Button
                                                        fullWidth
                                                        variant="contained"
                                                        sx={{ mt: 3, mb: 2 }}
                                                        onClick={() => finishButton(item.table_booking_id)}
                                                    >
                                                        เสร็จสิ้น
                                                    </Button>
                                                </AccordionActions>
                                            </Accordion>
                                        ))}
                                    </List>
                                </TabPanel>

                                <TabPanel value="2">

                                    {storeBookingData.map((item, index) => (
                                        <List key={index} className="bottom-line" sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                            <ListItem>
                                                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                                                    <Box sx={{ width: "80%", display: 'flex', flexDirection: 'column' }}>
                                                        <ListItemText primary={`${item.username} | ${item.phone_num}`} secondary={`${item.table_booking_time.toLocaleDateString(undefined, timeOptions)} จำนวน ${item.table_booking_count} คน`} />
                                                        <Stack direction="row" spacing={1}>
                                                            <Chip label={item.table_booking_status} color={getStatusColor(item.table_booking_status)} />
                                                        </Stack>
                                                    </Box>

                                                    {/* <Box sx={{ width: "20%", display: 'flex', flexDirection: 'column', alignItems: 'right' }}>
                                                        <Button onClick={handleOpen}>
                                                            <p className="activity">กดดูรายละเอียด<ArrowForwardIcon /></p>
                                                        </Button>

                                                    </Box> */}
                                                </Box>

                                            </ListItem>
                                        </List>
                                    ))}
                                </TabPanel>
                            </Box>


                        </TabContext>
                    </Box>


                </Container>
            </ThemeProvider >
        </>
    );
}