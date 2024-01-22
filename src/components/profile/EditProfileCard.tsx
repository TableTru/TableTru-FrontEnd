"use client";

import React, { useState } from "react";
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

export default function EditProfileCard() {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    email: '',
    phone_number: '',
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newRegisterData = {
      username: data.get('username') as string,
      password: data.get('password') as string,
      email: data.get('email') as string,
      phone_number: data.get('phone_number') as string,
    };

  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        {/* <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > :first-child': {  // เลือกคอมโพเนนต์ที่เป็นลำดับแรกภายใน Box
              width: '100%',  // ทำให้คอมโพเนนต์มีความกว้างเต็ม Box
              height: 'auto',  // ทำให้ความสูงของคอมโพเนนต์ปรับตามอัตราส่วน
            },
          }}
        >
          <Image
            src="https://pbs.twimg.com/media/FXTTYWfVUAAjIph?format=png&name=medium"
          />
        </Box> */}

        <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar src="https://pbs.twimg.com/media/FXTTYWfVUAAjIph?format=png&name=medium" sx={{ width: 100, height: 100, m: 1, bgcolor: 'secondary.main' }} />
                </Box>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* <Typography component="h1">Username</Typography> */}
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="phone_number"
                label="Phone Number"
                name="phone_number"
                autoComplete="phone_number"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>


          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            แก้ไข
          </Button>



        </Box>
        <Link href="/profile/edit" sx={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <Button variant="contained" className={"bg-red-700"}>ยกเลิก</Button>
        </Link>
      </Container>

    </ThemeProvider>
  );
};