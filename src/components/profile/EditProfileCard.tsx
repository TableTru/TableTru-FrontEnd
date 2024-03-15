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
import { getUserById, getUserReview, editUser } from "@/services/user.service";

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

export default function EditProfileCard() {
  const [userDataForm, setUserDataForm] = useState({
    username: '',
    password: '',
    email: '',
    phone_num: '',
    profile_image: ''
  });

  const fetchData = async () => {
    const userData = localStorage.getItem("userData")
    const userDataJson = JSON.parse(userData || "[]");
    const data = await getUserById(userDataJson.user_id);
    console.log(data);

    if (data) {
        setUserDataForm(data);
    }
    // setUserData(userTemp);

  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserDataForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    const userData = localStorage.getItem("userData")
    const userDataJson = JSON.parse(userData || "[]");
    e.preventDefault();
    const createRes = await editUser(userDataJson.user_id , userDataForm)
    console.log(createRes);
    window.location.replace('/profile')
  };

  useEffect(() => {
    fetchData();
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


        <Typography sx={{mt: 11}} component="h1" variant="h5">
          Edit Profile
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>

              <Box
                sx={{ mb: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <Avatar src={`${userDataForm.profile_image}`} sx={{ width: 200, height: 200, mt: 2, mb: 2, bgcolor: 'secondary.main' }} />
              </Box>

              <TextField
                required
                fullWidth
                id="username"
                name="username"
                label="Username"
                autoComplete="username"
                value={userDataForm.username}
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
                value={userDataForm.password}
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
                value={userDataForm.email}
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
                value={userDataForm.phone_num}
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
            Edit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};