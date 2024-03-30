'use client';

import React, { useEffect, useState } from "react";
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
import { getUserBookingByStatus, getBokingByUserId } from '@/services/tableBooking.service'

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

interface TableBooking {
  table_booking_id: number;
  store_id: number;
  user_id: number;
  table_booking_status: string;
  table_booking_count: number;
  table_booking_time: string;
  store_name: string;
}

const tableBookingTemp: TableBooking[] = [
  {
    table_booking_id: 1,
    store_id: 1,
    user_id: 1,
    table_booking_status: 'ยังไม่ถึงกำหนด',
    table_booking_count: 4,
    table_booking_time: '2024-02-25T17:00',
    store_name: 'โรลลิ่งริบส์ บริวบาร์ & บาร์บีคิว'
  },
  {
    table_booking_id: 2,
    store_id: 1,
    user_id: 1,
    table_booking_status: 'ยังไม่ถึงกำหนด',
    table_booking_count: 2,
    table_booking_time: '2024-02-25T17:00',
    store_name: 'บัดดี้ส์ บาร์แอนด์กริล '
  }
]

const historicalBookingTemp: TableBooking[] = [
  {
    table_booking_id: 1,
    store_id: 1,
    user_id: 1,
    table_booking_status: 'ยังไม่ถึงกำหนด',
    table_booking_count: 4,
    table_booking_time: '2024-02-25T17:00',
    store_name: 'โรลลิ่งริบส์ บริวบาร์ & บาร์บีคิว'
  },
  {
    table_booking_id: 2,
    store_id: 1,
    user_id: 1,
    table_booking_status: 'ยังไม่ถึงกำหนด',
    table_booking_count: 2,
    table_booking_time: '2024-02-25T17:00',
    store_name: 'บัดดี้ส์ บาร์แอนด์กริล '
  },
  {
    table_booking_id: 3,
    store_id: 1,
    user_id: 1,
    table_booking_status: 'เสร็จสิ้น',
    table_booking_count: 3,
    table_booking_time: '2024-02-25T16:04',
    store_name: 'แบงค็อก 78  '
  },
  {
    table_booking_id: 4,
    store_id: 1,
    user_id: 1,
    table_booking_status: 'ยกเลิก',
    table_booking_count: 3,
    table_booking_time: '2024-02-25T16:04',
    store_name: 'โทรวแบ็ค บีเคเค'
  },
]

export default function TabSelect() {
  const [value, setValue] = useState('1');
  const [open, setOpen] = useState(false);

  const [storeName, setStoreName] = useState("temp");
  const [seat, setSeat] = useState(0);
  const [date, setDate] = useState(new Date().toDateString());
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [location, setLocation] = useState('')
  //เลือกจาก select
  const [promocode, setPromocode] = useState("ส่วนลด 10%");

  const [onGoingData, setOnGoingData] = useState<object[]>([])
  const [historicalData, setHistoricalData] = useState<object[]>([])
  const [bookingModalData, setBookingModalData] = useState<any>({
    store_name: "",
    table_booking_count: 0,
    table_booking_time: "",
    table_booking_date: "",
    location: '',
    promotion: "",
    promotion_id: null,
    store_location: ''

  })

  const timeOptions = { hour: 'numeric', minute: 'numeric',timeZone: 'UTC'};

  const fetchData = async () => {
    const userData = localStorage.getItem("userData")
    const userDataJson = JSON.parse(userData || "[]");

    if (userData) {
      const user_id = userDataJson.user_id

      const onGoingDataArray = [];
      const onGoingData = await getUserBookingByStatus(user_id, "ยังไม่ถึงกำหนด");

      if (onGoingData) {
        for (const tableBookingObject of onGoingData) {
          const tableBookingTempWithDate = {
            ...tableBookingObject,
            table_booking_time: new Date(tableBookingObject.table_booking_time)
          };
          onGoingDataArray.push(tableBookingTempWithDate);
        }

        setOnGoingData(onGoingDataArray);
        console.log(onGoingDataArray);
      }

      const historicalDataArray = [];
      const historicalData = await getBokingByUserId(user_id);

      if (historicalData) {
        for (const tableBookingObject of historicalData) {
          if (tableBookingObject.table_booking_status != "ยังไม่ถึงกำหนด") {
            const tableBookingTempWithDate = {
              ...tableBookingObject,
              table_booking_time: new Date(tableBookingObject.table_booking_time)
            };
            historicalDataArray.push(tableBookingTempWithDate);
          }

        }

        setHistoricalData(historicalDataArray);
        console.log(historicalDataArray);
      }
    }
  };

  const fetchTempData = async () => {
    const userData = localStorage.getItem("userData")
    const userDataJson = JSON.parse(userData || "[]");

    if (userData) {
      const store_id = userDataJson.store_id

      const tableBookingArray = [];
      for (const tableBookingObject of tableBookingTemp) {
        const tableBookingTempWithDate = {
          ...tableBookingObject,
          table_booking_time: new Date(tableBookingObject.table_booking_time)
        };
        tableBookingArray.push(tableBookingTempWithDate);
      }

      setOnGoingData(tableBookingArray);
      console.log(tableBookingArray);

      const historicalDataArray = [];
      for (const tableBookingObject of historicalBookingTemp) {
        if (tableBookingObject.table_booking_status != "ยังไม่ถึงกำหนด") {
          const tableBookingTempWithDate = {
            ...tableBookingObject,
            table_booking_time: new Date(tableBookingObject.table_booking_time)
          };
          historicalDataArray.push(tableBookingTempWithDate);
        }

      }

      setHistoricalData(historicalDataArray);
      console.log(historicalDataArray);

    }

  };

  const handleOpen = (bookingData: any) => {

    const popupObject = {
      store_name: bookingData.store_name,
      table_booking_count: bookingData.table_booking_count,
      table_booking_time: bookingData.table_booking_time.toLocaleTimeString(undefined, timeOptions),
      table_booking_date: bookingData.table_booking_time.toDateString(),
      location: bookingData.location,
      promotion: bookingData.promotion_name,
      promotion_id: bookingData.promotion_id,
      store_location: '16/9 ถ. หอวัง แขวงจตุจักร เขตจตุจักร กรุงเทพมหานคร 10900 ประเทศไทย'
    }
    console.log(popupObject);

    setBookingModalData(popupObject)
    setOpen(true)
  }

  const handleClose = () => setOpen(false);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ยกเลิก':
        return 'error'; // สีแดง
      case 'ยังไม่ถึงกำหนด':
        return 'warning'; // สีเหลือง
      case 'เสร็จสิ้น':
        return 'success'; // สีเขียว
      default:
        return 'default'; // สีเทา
    }
  };

  useEffect(() => {
    fetchData();
    fetchTempData()
  }, []);

  return (
    <Box sx={{ mt: 8, width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} textColor="primary" indicatorColor="primary" centered aria-label="lab API tabs example">
            <Tab label="Ongoing" value="1" />
            <Tab label="Historical" value="2" />
          </TabList>

        </Box>

        <TabPanel value="1">
          {/* {bookingList.map((item) => (
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <ListItem>
                  <ListItemText primary={item.store} secondary={item.time} />
                  <Link onClick={handleOpen}>
                    กดดูรายละเอียด
                  </Link>
              </ListItem>
            </List>
          ))} */}

          {onGoingData.map((item, index) => (
            <List key={index} className="bottom-line" sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <ListItem>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                  <Box sx={{ width: "80%", display: 'flex', flexDirection: 'column' }}>
                    <ListItemText primary={item.store_name} secondary={`${item.table_booking_time.toLocaleDateString(undefined, timeOptions)} จำนวน ${item.table_booking_count} คน`} />
                    <Stack direction="row" spacing={1}>
                      <Chip label={item.table_booking_status} color={getStatusColor(item.table_booking_status)} />
                    </Stack>
                  </Box>

                  <Box sx={{ width: "20%", display: 'flex', flexDirection: 'column', alignItems: 'right' }}>
                    <Button onClick={() => handleOpen(item)}>
                      <p className="activity">กดดูรายละเอียด<ArrowForwardIcon /></p>
                    </Button>

                  </Box>
                </Box>

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
            <Typography id="modal-modal-title" variant="h5" component="h2">{bookingModalData.store_name}</Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }} variant="h6" component="h3"> รายละเอียด </Typography>
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li className="flex items-center">
                <PersonIcon />
                {bookingModalData.table_booking_count} ที่นั่ง
              </li>
              <li className="flex items-center">
                <CalendarMonthIcon />
                {bookingModalData.table_booking_date}
              </li>
              <li className="flex items-center">
                <AccessTimeIcon />
                {bookingModalData.table_booking_time}
              </li>
              {bookingModalData.promotion_id != 1 ? (
                <li className="flex items-center">
                  <LoyaltyIcon />
                  {bookingModalData.promotion}
                </li>
              ) : (null)}

            </ul>
            <div className={"mt-8"}>
              <Map address={bookingModalData.store_location} className={"width:400, height:400"} />
            </div>
          </Box>
        </Modal>

        <TabPanel value="2">
          {historicalData.map((item, index) => (
            <List key={index} className="bottom-line" sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <ListItem>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                  <Box sx={{ width: "80%", display: 'flex', flexDirection: 'column' }}>
                    <ListItemText primary={item.store_name} secondary={`${item.table_booking_time.toLocaleDateString(undefined, timeOptions)} จำนวน ${item.table_booking_count} คน`} />
                    <Stack direction="row" spacing={1}>
                      <Chip label={item.table_booking_status} color={getStatusColor(item.table_booking_status)} />
                    </Stack>
                  </Box>

                  <Box sx={{ width: "20%", display: 'flex', flexDirection: 'column', alignItems: 'right' }}>
                    <Button onClick={() => handleOpen(item)}>
                      <p className="activity">กดดูรายละเอียด<ArrowForwardIcon /></p>
                    </Button>

                  </Box>
                </Box>

              </ListItem>
            </List>
          ))}
        </TabPanel>

      </TabContext>
    </Box>
  );
}
