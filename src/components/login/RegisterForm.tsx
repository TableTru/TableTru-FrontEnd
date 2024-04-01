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
import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage'
import { storage } from '@/services/firebaseConfig'
import { Input, message, Progress, } from 'antd'
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
    profile_image: "https://firebasestorage.googleapis.com/v0/b/fir-upload-file-8e06e.appspot.com/o/image%2F9.png?alt=media&token=bce8dee8-fb5a-4764-aae2-be8fb794d216",
    user_status: "user"
  });

  const [isMainImageUpload, setIsMainImageUpload] = useState(false)
  const [mainProgressUpload, setMainProgressUpload] = useState(0)
  const [mainImage, setMainImage] = useState('')

  const handleSelectedMainImage = async (files: any) => {
    if (files && files[0].size < 10000000) {
      const name = files[0].name
      const storageRef = ref(storage, `image/${name}`)
      const uploadTask = uploadBytesResumable(storageRef, files[0])

      setIsMainImageUpload(true)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100

          setMainProgressUpload(progress) // to show progress upload

          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
          }
        },
        (error) => {
          message.error(error.message)
          setIsMainImageUpload(false)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            //url is download url of file
            setMainImage(url)
            setIsMainImageUpload(false)

            setUserData({ ...userData, profile_image: url });
          })
        },
      )
    } else {
      message.error('File size too large')
    }
  }

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
            <Grid item xs={12}>
              <div className="container mt-5">
                <div className="col-lg-8 offset-lg-2">
                  <Input
                    type="file"
                    placeholder="Select file to upload"
                    accept="image/png, image/jpeg"
                    onChange={(files) => handleSelectedMainImage(files.target.files)}
                  />
                  {isMainImageUpload && <Progress percent={mainProgressUpload} />}
                </div>
              </div>
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