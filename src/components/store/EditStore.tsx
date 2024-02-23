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


interface Store {
    store_id: number;
    category_id: number;
    location_id: number;
    store_name: string;
    store_description: string;
    table_booking: number;
    sum_rating: number;
    Latitude: string;
    longitude: string;
    OpenTimes: object[];
}

interface StoreImage {
    store_image_id: number;
    store_id: number;
    store_image_name: string;
    store_image_type: string;
}

const storeTemp: Store =
{
    store_id: 1,
    category_id: 1,
    location_id: 1,
    store_name: "ร้านค้าของฉัน",
    store_description: 'hahahahahahahahahaha',
    table_booking: 4,
    sum_rating: 3.25,
    Latitude: '',
    longitude: '',
    OpenTimes: [
        {
            day: 'วันจันทร์',
            open_time: new Date(),
            close_time: new Date()
        },
        {
            day: 'วันอังคาร',
            open_time: new Date(),
            close_time: new Date()
        }
    ]
}

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

const categoryData = [
    { label: "The Shawshank Redemption", year: 1994 },
    {
        label: "The Godfather",
        year: 1972,
    },
    { label: "The Godfather: Part II", year: 1974 },
];

export default function EditStore() {
    const [storeData, setStoreData] = useState<Store>();
    const [storeImageData, setStoreImageData] = useState<StoreImage[]>()
    const [coverImage, setCoverImage] = useState<StoreImage>()
    const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));
    const [formData, setFormData] = useState<Store>({
        store_id: storeTemp.store_id,
        category_id: storeTemp.category_id,
        location_id: storeTemp.location_id,
        store_name: storeTemp.store_name,
        table_booking: storeTemp.table_booking,
        sum_rating: storeTemp.sum_rating,
        store_description: storeTemp.store_description,
        Latitude: storeTemp.Latitude,
        longitude: storeTemp.longitude,
        OpenTimes: storeTemp.OpenTimes,
    })

    const rows = [
        {
            day: 'วันจันทร์',
            open_time: '10:00',
            close_time: '12:00',
        },
        {
            day: 'วันอังคาร',
            open_time: "10:00",
            close_time: '12:00',
        },
        {
            day: 'วันพุธ',
            open_time: "10:00",
            close_time: '12:00',
        },
        {
            day: 'วันพฤหัส',
            open_time: "10:00",
            close_time: '12:00',
        },
        {
            day: 'วันศุกร์',
            open_time: "10:00",
            close_time: '12:00',
        },
        {
            day: 'วันเสาร์',
            open_time: "10:00",
            close_time: '12:00',
        },
        {
            day: 'วันอาทิตย์',
            open_time: "10:00",
            close_time: '12:00',
        },
    ]

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

    const handleTimeChange = (newValue, index) => {
        console.log(newValue);
        console.log(index);
        // setFormData((prevData) => {
        //     const updatedOpenTimes = [...prevData.OpenTimes];
        //     console.log(prevData.OpenTimes);
        //     updatedOpenTimes[index].open_time = newValue;
        //     console.log(updatedOpenTimes);
            
        //     return { ...prevData, OpenTimes: updatedOpenTimes };
        // });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // window.location.replace('/profile')
    };



    const fetchData = async () => {
        // const data = await getStoreById();
        // console.log(data);

        // if (data) {
        //     setStoreData(data);
        //     console.log(data);
        // }

        // const imageArray = [];
        // const storeImages = await getStoreImageByType(data.store_id, "ภาพเมนู" );
        // console.log(storeImages);

        // if (storeImages) {
        //     for (const storeImageObject of storeImages) {
        //         imageArray.push(storeImageObject);
        //     }
        //     setStoreImageData(imageArray);
        //     console.log(imageArray);
        // }

        setStoreData(storeTemp);
        // setStoreImageData(storeImageTemp);
        setCoverImage(storeImageTemp)
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
                                แก้ไขร้านค้า
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

                                                    {formData.OpenTimes.map((item, index) => (
                                                        <Box key={index} className="grid grid-cols-1 gap-4 md:grid-cols-3 gap-4">
                                                            <p>{item.day}</p>
                                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                <DemoContainer components={["TimePicker"]}>
                                                                    <TimePicker
                                                                        label="เวลาเปิด"
                                                                        className={"w-full"}
                                                                        value={item.open_time}
                                                                        onChange={(newValue) => setValue(newValue)}
                                                                    />
                                                                </DemoContainer>
                                                            </LocalizationProvider>
                                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                <DemoContainer components={["TimePicker"]}>
                                                                    <TimePicker
                                                                        label="เวลาปิด"
                                                                        className={"w-full"}
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
