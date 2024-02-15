"use client";

import React, { useState } from "react";
import { Image, Textarea } from "@nextui-org/react";
import {
    Tabs,
    Tab,
    Container,
    Box,
    Avatar,
    Typography,
    TextField,
    Button,
    Link,
    CssBaseline,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListItemButton,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Autocomplete,
    Divider,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,


} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CreateStoreDetail from '@/components/store/CreateStoreDetail'
import ImageUpload from '@/components/store/ImageUpload'
import Map from "@/components/Map";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function CreateStore() {
    const [selectedImage, setSelectedImage] = useState('https://pbs.twimg.com/media/FXTTYWfVUAAjIph?format=png&name=medium');

    const handleImageChange = (event: any) => {
        const file = event.currentTarget.files[0];
        console.log(file);
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };


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

    const categoryData = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
    ]

    const rows = [
        {
            name: 'วันจันทร์',
            open: '10:00',
            close: '12:00',
        },
        {
            name: 'วันอังคาร',
            open: "10:00",
            close: '12:00',
        },
        {
            name: 'วันพุธ',
            open: "10:00",
            close: '12:00',
        },
        {
            name: 'วันพฤหัส',
            open: "10:00",
            close: '12:00',
        },
        {
            name: 'วันศุกร์',
            open: "10:00",
            close: '12:00',
        },
        {
            name: 'วันเสาร์',
            open: "10:00",
            close: '12:00',
        },
        {
            name: 'วันอาทิตย์',
            open: "10:00",
            close: '12:00',
        },
    ]

    return (
        <>
            <ThemeProvider theme={createTheme()}>
                <Container component="main" maxWidth="md">
                    <CssBaseline />
                    <Box sx={{ marginTop: 8, marginBottom: 8, display: 'flex', flexDirection: 'column', alignItems: 'left', }}>
                        <Box sx={{ display: 'flex', alignItems: 'left', }}>
                            <Typography component="h1" variant="h4">
                                แก้ไขร้านค้า
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', }}>
                            <label htmlFor="upload-input">
                                <img
                                    src={selectedImage}
                                    alt="Upload"
                                    style={{
                                        width: '100%',
                                        height: '400px',
                                        border: 'none',
                                        cursor: 'pointer',
                                        objectFit: 'cover',
                                    }}
                                />
                            </label>
                            <input
                                id="upload-input"
                                className="visually-hidden-input"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </Box>

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>

                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', }}>
                                <Typography variant="subtitle1">
                                    ชื่อร้าน
                                </Typography>
                                <TextField
                                    className="aungpor"
                                    required
                                    fullWidth
                                    id="store_name"
                                />
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', }}>
                                <Typography variant="subtitle1">
                                    คำอธิบายร้าน
                                </Typography>

                                <TextField
                                    required
                                    fullWidth
                                    multiline
                                    rows={4} // ตั้งค่าจำนวนบรรทัดที่แสดง
                                    id="store_description"
                                    name="store_description"
                                    autoComplete="store_description"
                                />
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', }}>
                                <Typography variant="subtitle1">
                                    ค้นหาพิกัดของร้าน
                                </Typography>
                                <TextField
                                    required
                                    fullWidth
                                    id="store_Location"
                                />

                                <Box
                                    sx={{
                                        marginTop: 4,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'left',
                                    }}
                                >
                                    <Map address="1600 Amphitheatre Parkway, Mountain View, CA" />
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', }}>
                                <Typography variant="subtitle1">
                                    เพิ่มรูปภาพร้านค้า
                                </Typography>
                                {/* <Image src="https://pbs.twimg.com/media/FXTTYWfVUAAjIph?format=png&name=medium" /> */}
                                <ImageUpload />
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', }}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        รายละเอียดร้านค้า
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', }}>
                                            <Typography variant="subtitle1">
                                                หมวดหมู่
                                            </Typography>
                                            <Autocomplete
                                                disablePortal
                                                id="combo-box-demo"
                                                options={categoryData}
                                                renderInput={(params) => <TextField {...params} label="หมวดหมู่" />}
                                            />
                                        </Box>

                                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', }}>
                                            <Typography variant="subtitle1">
                                                จำนวนโต๊ะที่เปิดให้จอง
                                            </Typography>
                                            <TextField
                                                required
                                                fullWidth
                                                id="table_num"
                                            />
                                        </Box>

                                        <Box sx={{ width: '100%', marginTop: 2, marginBottom: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>

                                            <TableContainer component={Paper}>
                                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>วันที่</TableCell>
                                                            <TableCell align="left">เปิด</TableCell>
                                                            <TableCell align="left">ปิด</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {rows.map((row) => (
                                                            <TableRow
                                                                key={row.name}
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                            >
                                                                <TableCell component="th" scope="row">
                                                                    {row.name}
                                                                </TableCell>
                                                                <TableCell align="left">{row.open}</TableCell>
                                                                <TableCell align="left">{row.close}</TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </Box>


                                    </AccordionDetails>
                                </Accordion>
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', }}>
                                <a href="/store">
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        className={"bg-red-700"}
                                        sx={{ mt: 2 }}
                                    >
                                        ยกเลิก
                                    </Button>
                                </a>

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 2 }}
                                >
                                    แก้ไขร้านค้า
                                </Button>
                            </Box>

                        </Box>
                    </Box>



                </Container>
            </ThemeProvider>
        </>
    );
}