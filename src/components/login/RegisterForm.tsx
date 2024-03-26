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


} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getUserById, createUser, getRegisterCheck } from "@/services/user.service";

interface User {
  user_id: number;
  username: string;
  password: string;
  profile_image: string;
  user_status: string;
  store_id: number| null;
  email: string;
  phone_num: string;
  latitude: number;
  longitude: number;
  createAt: Date;
  updateAt: Date;
}

const userTemp: User =
{
  user_id: 1,
  username: "Aungpor",
  password: "por1234",
  user_status: "merchant",
  store_id: 1,
  profile_image: "https://pbs.twimg.com/media/FXTTYWfVUAAjIph?format=png&name=medium",
  email: "aungpor.napat@gmail.com",
  phone_num: "0813111234",
  latitude: 0,
  longitude: 0,
  createAt: new Date(),
  updateAt: new Date(),

}

export default function SignUp() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
    phone_num: "",
    profile_image: "",
    user_status: "user"
  });

  // const fetchData = async () => {
  //   const userData = localStorage.getItem("userData")
  //   const userDataJson = JSON.parse(userData || "[]");
  //   const data = await getUser(userDataJson.user_id);
  //   console.log(data);

  //   if (data) {
  //     setUserData(data);
  //     console.log(data);
  //   }

  //   setUserData(userTemp);

  // };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    const checkRegisterRes = await getRegisterCheck(userData.email)
    console.log(!checkRegisterRes);
    if(!checkRegisterRes) {
      await createUser(userData)
      window.location.replace('/')
    } else{
      console.log("already have user");
    }
  };

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >


        <Typography sx={{ mt: 11 }} component="h1" variant="h5">
          SignUp
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>

              <Box
                sx={{ mb: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <Avatar src={`${userData.profile_image}`} sx={{ width: 200, height: 200, mt: 2, mb: 2, bgcolor: 'secondary.main' }} />
              </Box>

              <TextField
                required
                fullWidth
                id="username"
                name="username"
                label="Username"
                autoComplete="username"
                value={userData.username}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="password"
                name="password"
                label="password"
                autoComplete="password"
                value={userData.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                name="email"
                label="email"
                autoComplete="email"
                value={userData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="phone_num"
                name="phone_num"
                label="phone_num"
                autoComplete="phone_num"
                value={userData.phone_num}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Enter
          </Button>
        </Box>
      </Box>
    </Container>
  );
};