"use client";

import React, { useEffect, useState } from "react";
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
    Chip,
    Stack,


} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AppBar from '@/components/Appbar'

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
    createAt: Date;
    updateAt: Date;
}

const reviewList = [
    {
        review: "ข้าวหมูกรอบอร่อยมาก",
        store: "ร้าน1",
    },
    {
        review: "ข้าวหมูกรอบอร่อยมาก",
        store: "ร้าน2",
    },
    {
        review: "ข้าวหมูกรอบอร่อยมาก",
        store: "ร้าน3",
    },
    {
        review: "ข้าวหมูกรอบอร่อยมาก",
        store: "ร้าน4",
    },
];

const tempData: User =
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
    createAt: new Date(),
    updateAt: new Date(),

}

export default function ProfileCard() {
    const [userData, setUserData] = useState<User>();

    const fetchData = async () => {
        // const data = await getUser();
        // console.log(data);

        // if (data) {
        //     setUserData(data);
        //     console.log(data);
        // }

        setUserData(tempData);

    };

    const logout = () => {
        localStorage.removeItem('userData');
        window.location.replace('/')
    }

    const storeCreateClick = () => {
        window.location.replace('/store/create')
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ThemeProvider theme={createTheme()}>
            <AppBar color="primary" className={"bg-red-700"} />
            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <Box sx={{ marginTop: 8, marginBottom: 8, display: 'flex', flexDirection: 'column', alignItems: 'left', }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar src={userData?.profile_image} sx={{ width: 100, height: 100, m: 1, bgcolor: 'secondary.main' }} />
                        <Typography component="h1" variant="h6">
                            {userData?.username}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            marginTop: 2,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'left',
                        }}
                    >
                        <Box sx={{ width: '20%', display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                            <Typography component="h1" variant="h6">
                                Email:
                            </Typography>
                            <Typography component="h1" variant="h6">
                                Phone:
                            </Typography>
                        </Box>
                        <Box sx={{ width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                            <Typography component="h1" variant="h6">
                                {userData?.email}
                            </Typography>
                            <Typography component="h1" variant="h6">
                                {userData?.phone_num}
                            </Typography>
                        </Box>

                    </Box>

                    <Box
                        sx={{
                            marginTop: 2,
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Link href="/profile/edit" sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <Button variant="outlined">แก้ไขโปรไฟล์</Button>
                        </Link>

                    </Box>

                    <Box
                        sx={{
                            marginTop: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'left',
                        }}
                    >
                        <Typography component="h1" variant="h6">
                            ตำแหน่งของฉัน:
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            marginTop: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'left',
                        }}
                    >
                        <Typography component="h1" variant="h6">
                            ร้านที่รีวิว
                        </Typography>

                        {reviewList.map((item, index) => (
                            <List key={index} className="bottom-line" sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                <ListItem>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <ListItemText primary={`${item.review}`} secondary={`จำนวน ${item.store} คน`} />
                                        <Box sx={{ marginTop: 1, display: 'flex', flexDirection: 'column' }}>
                                            <a href="/">
                                                <p className="activity">กดดูรายละเอียด<ArrowForwardIcon /></p>
                                            </a>
                                        </Box>
                                    </Box>

                                </ListItem>
                            </List>
                        ))}

                        <Link href="/store/create" sx={{
                            marginBottom: 2,
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <Button variant="outlined">ลงทะเบียนร้านค้า</Button>
                        </Link>
                        <Link href="/" sx={{
                            marginBottom: 2,
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <Button variant="contained" className={"bg-red-700"} color="error" sx={{ marginBottom: 2 }} >Logout</Button>
                        </Link>

                    </Box>
                </Box>



            </Container>

        </ThemeProvider>
    );
};


