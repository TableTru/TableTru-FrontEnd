'use client';

import React, { useEffect, useState } from "react";
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import {NextLinkComposed} from '@/components/Link';
import Link from 'next/link';

export default function Bottombar() {
  const [value, setValue] = useState("home");
  const [profilePath, setProfilePath] = useState("login");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const checkLoginStatus = () => {
    const userData = localStorage.getItem("userData")
    if(userData){
      setProfilePath("profile")
    }
  }
  useEffect(() => {
    checkLoginStatus()
  },[])

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        className="w-full"
        onChange={handleChange}
      >
        <BottomNavigationAction
          LinkComponent={Link}
          href={"/"}
          value={"home"}
          label="หน้าแรก"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          LinkComponent={Link}
          href={"/activity"}
          value={"activity"}
          label="คำสั่งซื้อ"
          icon={<HistoryIcon />}
        />
        <BottomNavigationAction
          LinkComponent={Link}
          href={"/store"}
          value={"store"}
          label="ร้านค้า"
          icon={<StorefrontIcon />}
        />
        <BottomNavigationAction
            LinkComponent={Link}
            href={"/login"}
            value={"login"}
            label="โปรไฟล์"
            icon={<PersonIcon />}/>
      </BottomNavigation >
    </Paper>
  );
}
