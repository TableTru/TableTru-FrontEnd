'use client';

import React, { useState } from "react";
import Image from "next/image";
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
  Chip,
  Stack,

} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Ongoing from "@/components/activity/Ongoing";
import Historical from "@/components/activity/Historical";
import Modal from '@mui/material/Modal';
import ModalComponent from '@/components/activity/ModalDetail';
import Map from "@/components/Map";
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LoyaltyIcon from '@mui/icons-material/Loyalty';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const bookingList = [
  {
    store: "โรลลิ่งริบส์ บริวบาร์ & บาร์บีคิว ",
    time: "12 ม.ค. 2567",
    count: 1,
  },
  {
    store: "บัดดี้ส์ บาร์แอนด์กริล ",
    time: "13 ม.ค. 2567",
    count: 3,
  },
  {
    store: "แบงค็อก 78  ",
    time: "14 ม.ค. 2567",
    count: 2,
  },
  {
    store: "โทรวแบ็ค บีเคเค",
    time: "15 ม.ค. 2567",
    count: 4,
  },
];


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75%',
  height: '700',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TabSelect() {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [storeName, setStoreName] = useState("TeaPot 01");
  const [seat, setSeat] = useState(2);
  const [date, setDate] = useState(new Date().toDateString());
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  //เลือกจาก select
  const [promocode, setPromocode] = useState("ส่วนลด 10%");



  return (
    <Box sx={{ mt:8, width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} textColor="primary" indicatorColor="primary" centered aria-label="lab API tabs example">
            <Tab label="Ongoing" value="1" />
            <Tab label="Historical" value="2" />
          </TabList>

        </Box>

        <TabPanel value="1">
          {bookingList.map((item) => (
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <ListItem>
                  <ListItemText primary={item.store} secondary={item.time} />
                  <Link onClick={handleOpen}>
                    กดดูรายละเอียด
                  </Link>
              </ListItem>
            </List>
          ))}
        </TabPanel>


        {/*Modal*/}
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h5" component="h2">{storeName}</Typography>
            <Typography id="modal-modal-description" sx={{ mt:2, mb:2 }} variant="h6" component="h3"> รายละเอียด </Typography>
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li className="flex items-center">
                <PersonIcon/>
                {seat} ที่นั่ง
              </li>
              <li className="flex items-center">
                <CalendarMonthIcon/>
                {date}
              </li>
              <li className="flex items-center">
                <AccessTimeIcon/>
                {time}
              </li>
              <li className="flex items-center">
                <LoyaltyIcon/>
                {promocode}
              </li>
            </ul>
            <div className={"mt-8"}>
            <Map address="1600 Amphitheatre Parkway, Mountain View, CA" className={"width:400, height:400"} />
            </div>
          </Box>
        </Modal>

        <TabPanel value="2">
          {bookingList.map((item) => (
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <ListItem>
                <ListItemButton>
                  <ListItemText primary={item.store} secondary={item.time} />
                </ListItemButton>
              </ListItem>
            </List>
          ))}
        </TabPanel>

      </TabContext>
    </Box>
  );
}