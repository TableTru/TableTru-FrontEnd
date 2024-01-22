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


export default function CreateStore() {

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
        <>
            <ThemeProvider theme={createTheme()}>
                <Container component="main" maxWidth="md">
                    <CssBaseline />

                    <Box sx={{ marginTop: 8, display: 'flex', alignItems: 'left', }}>
                        <Typography component="h1" variant="h4">
                            สร้างร้างค้า
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            marginTop: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            '& > :first-child': {  // เลือกคอมโพเนนต์ที่เป็นลำดับแรกภายใน Box
                                width: '100%',  // ทำให้คอมโพเนนต์มีความกว้างเต็ม Box
                                height: 'auto',  // ทำให้ความสูงของคอมโพเนนต์ปรับตามอัตราส่วน
                            },
                        }}
                    >
                        <Image src="https://pbs.twimg.com/media/FXTTYWfVUAAjIph?format=png&name=medium" />
                    </Box>

                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <Typography variant="subtitle1">
                                    ชื่อร้าน
                                </Typography>
                                <TextField
                                className="aungpor"
                                    required
                                    fullWidth
                                    id="store_name"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="subtitle1">
                                    ค้นหาพิกัดของร้าน
                                </Typography>
                                <TextField
                                    required
                                    fullWidth
                                    id="store_Location"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="store_description"
                                    label="คำอธิบายร้าน"
                                    name="store_description"
                                    autoComplete="store_description"
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

                </Container>
            </ThemeProvider>
        </>
    );
}