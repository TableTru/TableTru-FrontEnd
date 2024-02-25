"use client";

import React, { useEffect, useState } from "react";
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
    Grid,
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
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    InputLabel,
    MenuItem,
    Select,
    FormControl,


} from "@mui/material";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CreateStoreDetail from "@/components/store/CreateStoreDetail";
import ImageUpload from "@/components/store/ImageUpload";
import Map from "@/components/Map";
import dayjs, { Dayjs } from 'dayjs';


const OpenTimes = [
    {
        day: 'วันจันทร์',
        open_time: '',
        close_time: '',
    },
    {
        day: 'วันอังคาร',
        open_time: '',
        close_time: '',
    },
    {
        day: 'วันพุธ',
        open_time: '',
        close_time: '',
    },
    {
        day: 'วันพฤหัส',
        open_time: '',
        close_time: '',
    },
    {
        day: 'วันศุกร์',
        open_time: '',
        close_time: '',
    },
    {
        day: 'วันเสาร์',
        open_time: '',
        close_time: '',
    },
    {
        day: 'วันอาทิตย์',
        open_time: '',
        close_time: '',
    }
]

const storeImageTemp: StoreImage[] = [
    {
        store_image_id: 1,
        store_id: 1,
        store_image_name: "https://pbs.twimg.com/media/FXTTYWfVUAAjIph?format=png&name=medium",
        store_image_type: "ภาพปกร้าน"
    },
    {
        store_image_id: 1,
        store_id: 1,
        store_image_name: "https://pbs.twimg.com/media/FXTTYWfVUAAjIph?format=png&name=medium",
        store_image_type: "ภาพปกร้าน"
    },
]
export default function EditStore() {
    const [formData, setFormData] = useState<object>({
        category_id: '',
        location_id: '',
        store_name: '',
        table_booking: '',
        sum_rating: '',
        store_description: '',
        Latitude: '',
        longitude: '',
        OpenTimes: OpenTimes,
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(name);
        console.log(value);
        console.log(formData.OpenTimes);
    };

    const handleOpenTimeChange = (index: number, newValue: any) => {
        const newOpenTimes = [...formData.OpenTimes];
        console.log(newOpenTimes);
        
        newOpenTimes[index].open_time = newValue.format('YYYY-MM-DD HH:mm:ss');
        setFormData({ ...formData, OpenTimes: newOpenTimes });
        console.log(newValue.format('YYYY-MM-DD HH:mm:ss'))
    };

    const handleCloseTimeChange = (index: number, newValue: any) => {
        const newCloseTimes = [...formData.OpenTimes];
        newCloseTimes[index].close_time = newValue.format('YYYY-MM-DD HH:mm:ss');
        setFormData({ ...formData, OpenTimes: newCloseTimes });
        console.log(newValue.format('YYYY-MM-DD HH:mm:ss'))
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // window.location.replace('/profile')
    };



    const fetchData = async () => {
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <ThemeProvider theme={createTheme()}>
                <Container component="main" maxWidth="md">
                    <CssBaseline />

                    <Box sx={{ mt: 8, mb: 8, display: 'flex', flexDirection: 'column', alignItems: 'left', }}>
                        <Box sx={{ display: "flex", alignItems: "left" }}>
                            <Typography component="h1" variant="h4">
                                สร้างร้านค้า
                            </Typography>
                        </Box>

                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{ my: 3 }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1">ชื่อร้าน</Typography>
                                    <TextField
                                        className="aungpor"
                                        required
                                        fullWidth
                                        id="store_name"
                                        name="store_name"
                                        label="store_name"
                                        autoComplete="store_name"
                                        value={formData.store_name}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="subtitle1">คำอธิบายร้าน</Typography>
                                    <TextField
                                        required
                                        fullWidth
                                        multiline
                                        rows={4} // ตั้งค่าจำนวนบรรทัดที่แสดง
                                        id="store_description"
                                        name="store_description"
                                        label="store_description"
                                        autoComplete="store_description"
                                        value={formData.store_description}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="subtitle1">ค้นหาพิกัดของร้าน</Typography>
                                    <TextField required fullWidth id="store_Location" />
                                </Grid>

                                <Grid item xs={12}>
                                    <Map address="1600 Amphitheatre Parkway, Mountain View, CA" />
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="subtitle1">อัปโหลดเมนู</Typography>
                                    {/* <Image src="https://pbs.twimg.com/media/FXTTYWfVUAAjIph?format=png&name=medium" /> */}
                                    <ImageUpload />
                                </Grid>

                                <Grid item xs={12}>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >
                                            รายละเอียดร้านค้า
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12}>
                                                    <Typography variant="subtitle1">หมวดหมู่</Typography>
                                                    {/* <Autocomplete
                                                        disablePortal
                                                        id="combo-box-demo"
                                                        options={categoryData}
                                                        renderInput={(params) => (
                                                            <TextField {...params} label="หมวดหมู่" />
                                                        )}
                                                    /> */}

                                                    <FormControl fullWidth>
                                                        {/* <InputLabel id="demo-simple-select-label">หมวดหมู่</InputLabel> */}
                                                        <Select
                                                            labelId="demo-simple-select-label"
                                                            id="category_id"
                                                            name="category_id   "
                                                            value={formData.category_id}
                                                            label="เลิอกโค้ตส่วนลด"
                                                            onChange={handleChange}
                                                        >
                                                            <MenuItem value={1}>หมวดหมู่1</MenuItem>
                                                            <MenuItem value={2}>หมวดหมู่2</MenuItem>
                                                            <MenuItem value={3}>หมวดหมู่3</MenuItem>
                                                        </Select>
                                                    </FormControl>

                                                </Grid>

                                                <Grid item xs={12}>
                                                    <Typography variant="subtitle1">
                                                        แก้ไขรูปภาพ
                                                    </Typography>
                                                    {/* <Image src="https://pbs.twimg.com/media/FXTTYWfVUAAjIph?format=png&name=medium" /> */}
                                                    <ImageUpload />
                                                </Grid>

                                                <Grid item xs={12}>
                                                    <Typography variant="subtitle1">
                                                        จำนวนโต๊ะที่เปิดให้จอง
                                                    </Typography>
                                                    <TextField required
                                                        fullWidth
                                                        id="table_booking"
                                                        name="table_booking"
                                                        label="table_booking"
                                                        autoComplete="table_booking"
                                                        value={formData.table_booking}
                                                        onChange={handleChange}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sx={{ marginTop: 3 }}>
                                                <Typography variant="subtitle1">
                                                    วันที่เปิด-ปิด
                                                </Typography>

                                                {/*Monday*/}

                                                <div >

                                                    {OpenTimes.map((item, index) => (
                                                        <Box key={index} className="grid grid-cols-1 gap-4 md:grid-cols-3 gap-4">
                                                            <p>{item.day}</p>
                                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                <DemoContainer components={["TimePicker"]}>
                                                                    <TimePicker
                                                                        label="เวลาเปิด"
                                                                        className={"w-full"}
                                                                        value={dayjs(item.open_time)}
                                                                        onChange={(newValue) => handleOpenTimeChange(index, newValue)}
                                                                    />
                                                                </DemoContainer>
                                                            </LocalizationProvider>
                                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                <DemoContainer components={["TimePicker"]}>
                                                                    <TimePicker
                                                                        label="เวลาปิด"
                                                                        className={"w-full"}
                                                                        value={dayjs(item.close_time)}
                                                                        onChange={(newValue) => handleCloseTimeChange(index, newValue)}
                                                                    />
                                                                </DemoContainer>
                                                            </LocalizationProvider>
                                                        </Box>

                                                    ))}
                                                </div>
                                            </Grid>
                                        </AccordionDetails>
                                    </Accordion>
                                </Grid>
                            </Grid>
                            <Link href="/store">
                                <Button
                                    sx={{ marginTop: 3 }}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                >
                                    แก้ไขร้านค้า
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
}
