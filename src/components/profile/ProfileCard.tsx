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
import { getUserById, getUserReview } from "@/services/user.service";

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

interface Review {
    store_id: number;
    store_name: string;
    review_comment: string;
    createAt: Date;
    updateAt: Date;
}
  
  const userTemp =
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

const reviewTemp: Review[] = [
    {
        store_id: 1,
        store_name: "ร้าน1",
        review_comment: "ข้าวหมูกรอบอร่อยมาก",
        createAt: new Date(),
        updateAt: new Date()
    },
    {
        store_id: 2,
        store_name: "ร้าน2",
        review_comment: "สู่ความเวิ้งว้างอันไกลโพ้นนนนนนนนนนนนนนนนน",
        createAt: new Date(),
        updateAt: new Date()
    },
]

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

export default function ProfileCard() {
    const [userData, setUserData] = useState<object>(userTemp);
    const [reviewData, setReviewData] = useState<Review[]>([])

    const fetchData = async () => {
        const userData = localStorage.getItem("userData")
        const userDataJson = JSON.parse(userData || "[]");
        const data = await getUserById(userDataJson.user_id);
        console.log(data);

        if (data) {
            setUserData(data);
            console.log(data);
        }

        const reviewArray = [];
        const userReviews = await getUserReview(userDataJson.user_id);
        console.log(userReviews);

        if (userReviews) {
            for (const reviewObject of userReviews) {
                reviewArray.push(reviewObject);
            }
            setReviewData(reviewArray);
            console.log(reviewArray);
        }

        // setUserData(userTemp);
        // setReviewData(reviewTemp)

    };

    const logout = () => {
        localStorage.removeItem('userData');
    }

    const storeCreateClick = () => {
        window.location.replace('/store/create')
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ThemeProvider theme={createTheme()}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <Box sx={{ marginTop: 10, marginBottom: 8, display: 'flex', flexDirection: 'column', alignItems: 'left', }}>
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

                        {reviewTemp.map((item, index) => (
                            <List key={index} className="bottom-line" sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                <ListItem>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <ListItemText primary={`${item.review_comment}`} secondary={`${item.store_name}`} />
                                        <Box sx={{ marginTop: 1, display: 'flex', flexDirection: 'column' }}>
                                            <a href={`/products/${item.store_id}`}>
                                                <p className="activity">กดดูรายละเอียด<ArrowForwardIcon /></p>
                                            </a>
                                        </Box>
                                    </Box>

                                </ListItem>
                            </List>
                        ))}

                        {userData.user_status === "user" ? (
                            <Link href="/store/create" sx={{
                                marginBottom: 2,
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Button variant="outlined">ลงทะเบียนร้านค้า</Button>
                            </Link>
                        ) : (
                            <Link href="/store" sx={{
                                marginBottom: 2,
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Button variant="outlined">ร้านค้าของฉัน</Button>
                            </Link>
                        )}

                        <Link href="/" sx={{
                            marginBottom: 2,
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <Button variant="contained" className={"bg-red-700"} color="error" sx={{ marginBottom: 2 }} onClick={logout} >Logout</Button>
                        </Link>

                    </Box>
                </Box>



            </Container>

        </ThemeProvider>
    );
};


