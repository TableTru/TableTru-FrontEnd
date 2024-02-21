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

interface User {
  user_id: number;
  username: string;
  password: string;
  profile_image: string;
  user_status: string;
  email: string;
  phone_num: string;
  latitude: number;
  longitude: number;
}

const userTemp =
{
  user_id: 1,
  username: "Aungpor",
  password: "por1234",
  user_status: "user",
  profile_image: "https://pbs.twimg.com/media/FXTTYWfVUAAjIph?format=png&name=medium",
  email: "aungpor.napat@gmail.com",
  phone_num: "0813111234",
  latitude: 0,
  longitude: 0,

}

export default function EditProfileCard() {
  const [userData, setUserData] = useState({
    username: userTemp.username,
    password: userTemp.password,
    email: userTemp.email,
    phone_num: userTemp.phone_num,
    profile_image: userTemp.profile_image
  });

  const fetchData = async () => {
    // const data = await getUser();
    // console.log(data);

    // if (data) {
    //     setUserData(data);
    //     console.log(data);
    // }

    // const reviewArray = [];
    // const userReviews = await getUserReview();
    // console.log(userReviews);

    // if (userReviews) {
    //     for (const reviewObject of userReviews) {
    //         reviewArray.push(reviewObject);
    //     }
    //     setReviewData(reviewArray);
    //     console.log(reviewArray);
    // }

    setUserData(userTemp);

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
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
            Edit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};