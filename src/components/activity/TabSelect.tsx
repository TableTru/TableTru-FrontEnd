'use client';

"use client";

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

export default function TabSelect() {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
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
            {bookingList.map((item) => (
              <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItem>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <ListItemText primary={item.store} secondary={`${item.time} จำนวน ${item.count} คน`} />
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

          <TabPanel value="2">
            {bookingList.map((item) => (
              <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItem>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <ListItemText primary={item.store} secondary={`${item.time} จำนวน ${item.count} คน`} />
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
  );
}