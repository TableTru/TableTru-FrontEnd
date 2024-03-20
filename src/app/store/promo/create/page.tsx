"use client";

import React, {useEffect, useState} from "react";
import { FormControl, FormHelperText, Input, InputLabel, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CreatePromo from "@/components/store/CreatePromo";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import dayjs from "dayjs";


export default function StoreCreate() {

    const [isLogin, setIsLogin] = useState(false);
    const [userData, setUserData] = useState()

    const checkLoginStatus = () => {
        const userData = localStorage.getItem("userData")
        const userDataJson = JSON.parse(userData || "[]");
        if (userData) {
            console.log(userDataJson);
            setIsLogin(true)
            setUserData(userDataJson)
            console.log(userDataJson.user_status);


        } else {
            console.log("not login");
            window.location.replace('/login')
        }
    }

    useEffect((() => {
        checkLoginStatus()
    }), [])

  return (
      <>
        {isLogin ? (
        <div className="min-h-screen w-fit mx-auto  mt-24 mb-5">
            <CreatePromo/>
        </div>
          ) : (
              <p>Please Login</p>
          )}
        </>
  );
}
