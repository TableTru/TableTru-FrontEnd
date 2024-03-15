"use client";

import React, { useEffect, useState, useRef } from "react";
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
import { getStoreById, editStore, editOpenTime } from '@/services/store.service'
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    version: 'weekly',
    libraries: ['places'], // เพิ่ม libraries places
});


interface Store {
    store_id: number;
    category_id: number;
    location_id: number;
    store_name: string;
    store_description: string;
    table_booking: number;
    sum_rating: number;
    latitude: number;
    longitude: number;
    location: string;
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
    latitude: 13.8920878,
    longitude: 100.5267991,
    location: 'บางตลาด อำเภอปากเกร็ด นนทบุรี 11120 ประเทศไทย',
    OpenTimes: [
        {
            day: 'วันจันทร์',
            open_time: '2024-02-23 15:44:29',
            close_time: '2022-04-17T15:30',
        },
        {
            day: 'วันอังคาร',
            open_time: '2022-04-17T15:30',
            close_time: '2022-04-17T15:30',
        },
        {
            day: 'วันพุธ',
            open_time: '2022-04-17T15:30',
            close_time: '2022-04-17T15:30',
        },
        {
            day: 'วันพฤหัส',
            open_time: '2022-04-17T15:30',
            close_time: '2022-04-17T15:30',
        },
        {
            day: 'วันศุกร์',
            open_time: '2022-04-17T15:30',
            close_time: '2022-04-17T15:30',
        },
        {
            day: 'วันเสาร์',
            open_time: '2022-04-17T15:30',
            close_time: '2022-04-17T15:30',
        },
        {
            day: 'วันอาทิตย์',
            open_time: '2022-04-17T15:30',
            close_time: '2022-04-17T15:30',
        },
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

export default function EditStore() {
    const [formData, setFormData] = useState<any>({
        store_id: null,
        category_id: null,
        location_id: null,
        store_name: '',
        table_booking: null,
        sum_rating: null,
        store_description: '',
        latitude: 13.8920878,
        longitude: 100.5267991,
        location: '50 ถนน งามวงศ์วาน แขวงลาดยาว เขตจตุจักร กรุงเทพมหานคร 10900 ประเทศไทย',
        OpenTimes: [],
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(name);
        console.log(value);
        console.log(formData.OpenTimes);
    };

    const handleOpenTimeChange = (index: number, newValue: any) => {
        const newOpenTimes = [...formData.OpenTimes];
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


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log(formData);
        const userData = localStorage.getItem("userData")
        const userDataJson = JSON.parse(userData || "[]");

        const editRes = await editStore(userDataJson.user_id, formData)
        console.log(editRes);

        for (const openTimeObject of formData.OpenTimes) {
            const editOpenTimeRes = await editOpenTime(openTimeObject.openTime_id, openTimeObject)
        }

        // window.location.replace('/profile')
    };



    const fetchData = async () => {
        const userData = localStorage.getItem("userData")
        const userDataJson = JSON.parse(userData || "[]");
        const data = await getStoreById(userDataJson.user_id);
        console.log(data);

        if (data) {
            setFormData(data)
            console.log(data);
        }

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
        // setStoreImageData(storeImageTemp);
    };

    const fetchTempData = async () => {
        setFormData(storeTemp)
    };

    const mapRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [predictions, setPredictions] = useState<google.maps.places.AutocompletePrediction[]>([]);

    useEffect(() => {
        loader.load().then(() => {
            const google = window.google;
            if (mapRef.current && !map) {
                const geolocation = navigator.geolocation;
                const newMap = new google.maps.Map(mapRef.current, {
                    center: { lat: formData.latitude, lng: formData.longitude }, // ตำแหน่งเริ่มต้นที่กรุงเทพมหานคร,
                    zoom: 12,
                });
            
                const geocoder = new google.maps.Geocoder();
                const latLng = new google.maps.LatLng(formData.latitude, formData.longitude);
                geocoder.geocode({ 'location': latLng }, (results, status) => {
                    if (status === 'OK') {
                        if (results[0]) {
                            const marker = new google.maps.Marker({
                                map: newMap,
                                position: latLng,
                            });
                            setMap(newMap);
                            console.log(results[0].formatted_address);
                            inputRef.current.value = results[0].formatted_address;
                        } else {
                            console.log('No results found');
                        }
                    } else {
                        console.error('Geocoder failed due to: ' + status);
                    }
                });
            }
            if (inputRef.current && google) {

                const autocomplete = new google.maps.places.Autocomplete(inputRef.current);
                autocomplete.addListener('place_changed', () => {
                    const place = autocomplete.getPlace();
                    if (place && place.geometry && map) {
                        const location = place.geometry.location; //ตำแหน่งแบบ lat long
                        console.log(place.formatted_address); //ตำแหน่งแบบชื่อ
                        setFormData({
                            ...formData,
                            location: place.formatted_address,
                            latitude: place.geometry.location.lat(),
                            longitude: place.geometry.location.lng(),
                        });
                        map.setCenter(location);
                        new google.maps.Marker({
                            position: location,
                            map: map,
                        });
                    }
                });
                autocomplete.addListener('predictions_changed', () => {
                    setPredictions(autocomplete.getPlacePredictions());
                });
            }
        });
    }, [map]);


    const handleSelectPrediction = (prediction: google.maps.places.AutocompletePrediction) => {
        console.log(prediction.description);

        if (inputRef.current) {
            inputRef.current.value = prediction.description;
            console.log("active");

        }
        setPredictions([]);

        setFormData({
            ...formData,
            location: prediction.description,
        });

    };

    useEffect(() => {
        // fetchData();
        fetchTempData()
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
                                    <TextField
                                        inputRef={inputRef}
                                        required
                                        fullWidth
                                    />
                                    {predictions.length > 0 && (
                                        <ul>
                                            {predictions.map((prediction, index) => (
                                                <li key={index} onClick={() => handleSelectPrediction(prediction)}>
                                                    {prediction.description}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                </Grid>

                                <Grid item xs={12}>
                                    <div ref={mapRef} style={{ width: '100%', height: '400px' }} />
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
