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

                            <Box sx={{ marginBottom: 8 }}>
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
                                    {bookingList.map((item) => (
                                        <List className="bottom-line" sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                            <ListItem>
                                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                    <ListItemText primary={`${item.user} | ${item.phone}`} secondary={`${item.time} จำนวน ${item.people_num} คน`} />
                                                    <Stack direction="row" spacing={1}>
                                                        <Chip label="ยืนยัน" color="success" />
                                                    </Stack>
                                                    <Box sx={{ marginTop: 1, display: 'flex', flexDirection: 'column' }}>
                                                        <a href="/">
                                                            <p className="activity">กดดูรายละเอียด<ArrowForwardIcon /></p>
                                                        </a>
                                                    </Box>
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