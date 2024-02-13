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

const bookingList = [
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

        <TabPanel value="1">
          {bookingList.map((item) => (
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <ListItem>
                  <ListItemText primary={item.store} secondary={item.time} />
                  <a href="/">
                    <p>กดดูรายละเอียด</p>
                  </a>
              </ListItem>
            </List>
          ))}
        </TabPanel>

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