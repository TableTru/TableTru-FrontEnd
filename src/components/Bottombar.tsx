'use client';

import React from 'react';
import {BottomNavigation,BottomNavigationAction } from '@mui/material'; 
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import PersonIcon from '@mui/icons-material/Person';
import {NextLinkComposed} from '@/components/Link';
import Link from 'next/link';

export default function Bottombar() {
    const [value, setValue] = React.useState("home");
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
          showLabels
          className="w-full"
          onChange={handleChange}
      >
        <BottomNavigationAction
            LinkComponent={Link}
            href={"/"}
            label="หน้าแรก"
            icon={<HomeIcon />}
            />
        <BottomNavigationAction
          LinkComponent={Link}
          href={"/activity"}
          label="คำสั่งซื้อ"
          icon={<HistoryIcon />}
        />
        <BottomNavigationAction
            LinkComponent={Link}
            href={"/login"}
            label="โปรไฟล์"
            icon={<PersonIcon />}/>
      </BottomNavigation >
      </Paper>
    );
  }