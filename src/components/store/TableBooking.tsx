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
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';



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

const bookingList2 = [
    {
        store: "ร้าน1",
        time: "12 ม.ค. 2567"
    },
    {
        store: "ร้าน2",
        time: "13 ม.ค. 2567",
    },
    {
        store: "ร้าน3",
        time: "14 ม.ค. 2567"
    },
    {
        store: "ร้าน4",
        time: "15 ม.ค. 2567"
    },
];

export default function TableBooking() {
    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
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
                                <TabList onChange={handleChange} textColor="primary" indicatorColor="primary" centered aria-label="lab API tabs example">
                                    <Tab label="Ongoing" value="1" />
                                    <Tab label="Historical" value="2" />
                                </TabList>

                            </Box>

                            <TabPanel value="1">
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
                                                    <Typography variant="subtitle1">เบอร์โทรศัพท์: {item.phone}</Typography>
                                                    <Typography variant="subtitle1">จำนวนคน: {item.people_num}</Typography>
                                                    <Typography variant="subtitle1">เวลาจอง: {item.time}</Typography>
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
                                                >
                                                    ยกเลิก
                                                </Button>
                                                <Button
                                                    fullWidth
                                                    variant="contained"
                                                    sx={{ mt: 3, mb: 2 }}
                                                >
                                                    เสร็จสิ้น
                                                </Button>
                                            </AccordionActions>
                                        </Accordion>
                                    ))}
                                </List>
                            </TabPanel>

                            <TabPanel value="2">
                                {bookingList2.map((item) => (
                                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                        <ListItem>
                                            {/* <ListItemText primary={item.store} secondary={item.time} /> */}
                                            <Box sx={{ width: '80%', display: 'flex', flexDirection: 'column' }}>
                                                <Typography variant="subtitle1">ชื่อ:</Typography>
                                                <Typography variant="subtitle1">เวลา:</Typography>
                                                <Typography variant="subtitle1">จำนวนคน:</Typography>
                                                <Typography variant="subtitle1">เบอร์โทรศัพท์:</Typography>
                                            </Box>
                                            {/* <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                <Typography variant="subtitle1">จำนวนคน:</Typography>
                                                <Typography variant="subtitle1">เบอร์โทรศัพท์:</Typography>
                                            </Box> */}
                                            <Box sx={{ width: '20%', display: 'flex', flexDirection: 'column' }}>
                                                <Button
                                                    fullWidth
                                                    variant="contained"
                                                    sx={{ mt: 3, mb: 2 }}
                                                >
                                                    รายละเอียด
                                                </Button>
                                            </Box>
                                        </ListItem>
                                    </List>
                                ))}
                            </TabPanel>

                        </TabContext>
                    </Box>


                </Container>
            </ThemeProvider >
        </>
    );
}