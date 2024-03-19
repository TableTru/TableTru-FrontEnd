"use client";

import React, { useEffect, useState, useRef } from "react";
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
    ListItemIcon,


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
import Map from "@/components/Map";
import dayjs, { Dayjs } from 'dayjs';
import { Loader } from '@googlemaps/js-api-loader';
import { Input, message, Image, Progress, } from 'antd'
import { storage } from '@/services/firebaseConfig'
import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage'
import { getStoreById, editStore, editOpenTime, createStoreImage, checkStoreByName, GetStoreImageByType } from '@/services/store.service'

const loader = new Loader({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    version: 'weekly',
    libraries: ['places'], // เพิ่ม libraries places
});

interface StoreImage {
    store_image_id: number;
    store_id: number;
    store_image_name: string;
    store_image_type: string;
}

const storeTemp: object =
{
    store_id: 1,
    category_id: 1,
    location_id: 1,
    store_name: "ร้านค้าของฉัน",
    store_image_name: "https://firebasestorage.googleapis.com/v0/b/fir-upload-file-8e06e.appspot.com/o/image%2FFc71O5zaIAEsFzE.png?alt=media&token=781cb1e2-2044-4bf2-8038-b8b841413915",
    store_description: 'hahahahahahahahahaha',
    table_booking: 4,
    max_people_booking: 10,
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

const menuImageTemp: StoreImage[] = [
    {
        store_image_id: 1,
        store_id: 1,
        store_image_name: "https://firebasestorage.googleapis.com/v0/b/fir-upload-file-8e06e.appspot.com/o/image%2FScreenshot%202024-02-14%20001400.png?alt=media&token=add73e3c-5097-40a0-ae85-7f0168423ca6",
        store_image_type: "ภาพเมนู"
    },
    {
        store_image_id: 2,
        store_id: 1,
        store_image_name: "https://firebasestorage.googleapis.com/v0/b/fir-upload-file-8e06e.appspot.com/o/image%2FFc71O5zaIAEsFzE.png?alt=media&token=781cb1e2-2044-4bf2-8038-b8b841413915",
        store_image_type: "ภาพเมนู"
    },
]

const subImageTemp: StoreImage[] = [
    {
        store_image_id: 1,
        store_id: 1,
        store_image_name: "https://firebasestorage.googleapis.com/v0/b/fir-upload-file-8e06e.appspot.com/o/image%2FScreenshot%202024-02-14%20001400.png?alt=media&token=add73e3c-5097-40a0-ae85-7f0168423ca6",
        store_image_type: "ภาพประกอบ"
    },
    {
        store_image_id: 2,
        store_id: 1,
        store_image_name: "https://firebasestorage.googleapis.com/v0/b/fir-upload-file-8e06e.appspot.com/o/image%2FFc71O5zaIAEsFzE.png?alt=media&token=781cb1e2-2044-4bf2-8038-b8b841413915",
        store_image_type: "ภาพประกอบ"
    },
]

export default function EditStore() {
    const [menuUploading, setMenuUploading] = useState(false)
    const [subImageUpload, setSubImageUpload] = useState(false)
    const [menuProgressUpload, setProgressUpload] = useState(0)
    const [subImageProgressUpload, setSubImageProgressUpload] = useState(0)
    const [menuData, setMenuData] = useState<object[]>([])
    const [subImageData, setSubImageData] = useState<object[]>([])
    const [mainImage, setMainImage] = useState('')
    const [isMainImageUpload, setIsMainImageUpload] = useState(false)
    const [mainProgressUpload, setMainProgressUpload] = useState(0)

    const [defaultName, setDefaultName] = useState('')
    const [removeImage, setRemoveImage] = useState<number[]>([])
    const [locationData, setLocationData] = useState<object>({
        location: '',
        latitude: null,
        longitude: null,
    })
    const [formData, setFormData] = useState<any>({
        store_id: null,
        category_id: null,
        store_name: '',
        store_image_name: "https://firebasestorage.googleapis.com/v0/b/fir-upload-file-8e06e.appspot.com/o/image%2FFc71O5zaIAEsFzE.png?alt=media&token=781cb1e2-2044-4bf2-8038-b8b841413915",
        table_booking: 0,
        max_people_booking: 0,
        sum_rating: null,
        store_description: '',
        latitude: 13.8920878,
        longitude: 100.5267991,
        location: '50 ถนน งามวงศ์วาน แขวงลาดยาว เขตจตุจักร กรุงเทพมหานคร 10900 ประเทศไทย',
        OpenTimes: [],
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        if (name === "max_people_booking" || name === "table_booking") {
            const intValue = parseInt(value, 10)
            setFormData((prevData: any) => ({
                ...prevData,
                [name]: intValue,
            }));
        } else {
            setFormData((prevData: any) => ({
                ...prevData,
                [name]: value,
            }));
        }

        console.log(name);
        console.log(value);
        console.log(formData);
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
        const checkStoreNameRes = await checkStoreByName(formData.store_name)
        if (formData.store_name != defaultName) {
            if (!checkStoreNameRes) {
                const userData = localStorage.getItem("userData")
                const userDataJson = JSON.parse(userData || "[]");

                const editRes = await editStore(userDataJson.user_id, formData)
                console.log(editRes);

                for (const openTimeObject of formData.OpenTimes) {
                    const editOpenTimeRes = await editOpenTime(openTimeObject.openTime_id, openTimeObject)
                    console.log(editOpenTimeRes);
                    
                }

                const newmenuImageData = menuData.filter(item => item.data_type !== "old");
                const newSubImageData = subImageData.filter(item => item.data_type !== "old");

                console.log(newmenuImageData);
                console.log(newSubImageData);

                for (const menuImageObject of newmenuImageData) {
                    const menuImageWithStoreId = {
                        store_id: menuImageObject.store_id,
                        store_image_name: menuImageObject.store_image_name,
                        store_image_type: menuImageObject.store_image_type
                    }
                    await createStoreImage(menuImageWithStoreId)
                }

                for (const subImageObject of newSubImageData) {
                    const subImageWithStoreId = {
                        store_id: subImageObject.store_id,
                        store_image_name: subImageObject.store_image_name,
                        store_image_type: subImageObject.store_image_type
                    }
                    await createStoreImage(subImageWithStoreId)
                }

                for (const openTimeObject of formData.OpenTimes) {
                    await editOpenTime(openTimeObject.openTime_id, openTimeObject)
                }
                // window.location.replace('/profile')
            } else {
                // setCreateError("มีร้านค้าชื่อนี้แล้ว")
                console.log("error");
            }
        } else{
            const userData = localStorage.getItem("userData")
            const userDataJson = JSON.parse(userData || "[]");

            const editRes = await editStore(userDataJson.user_id, formData)
            console.log(editRes);

            for (const openTimeObject of formData.OpenTimes) {
                const editOpenTimeRes = await editOpenTime(openTimeObject.openTime_id, openTimeObject)
            }

            const newmenuImageData = menuData.filter(item => item.data_type !== "old");
            const newSubImageData = subImageData.filter(item => item.data_type !== "old");

            console.log(newmenuImageData);
                console.log(newSubImageData);

            for (const menuImageObject of newmenuImageData) {
                const menuImageWithStoreId = {
                    store_id: menuImageObject.store_id,
                    store_image_name: menuImageObject.store_image_name,
                    store_image_type: menuImageObject.store_image_type
                }
                await createStoreImage(menuImageWithStoreId)
            }

            for (const subImageObject of newSubImageData) {
                const subImageWithStoreId = {
                    store_id: subImageObject.store_id,
                    store_image_name: subImageObject.store_image_name,
                    store_image_type: subImageObject.store_image_type
                }
                await createStoreImage(subImageWithStoreId)
            }
            // window.location.replace('/profile')
        }


    };



    const fetchData = async () => {
        const userData = localStorage.getItem("userData")
        const userDataJson = JSON.parse(userData || "[]");
        const data = await getStoreById(userDataJson.store_id);
        console.log(data);

        if (data) {
            setFormData(data)
            setDefaultName(data.store_name)
            console.log(data);
        }
        const menuImage = await GetStoreImageByType(userDataJson.store_id, "ภาพเมนู")
        const subImage = await GetStoreImageByType(userDataJson.store_id, "ภาพประกอบ")

        console.log(menuImage);
        console.log(subImage);

        const menuImageArray = []
        const subImageArray = []

        if (menuImage.lenght != 0) {

            for (const menuImageObject of menuImage) {
                const newMenuImage = {
                    store_id: menuImageObject.store_id,
                    store_image_name: menuImageObject.store_image_name,
                    store_image_type: menuImageObject.store_image_type,
                    data_type: "old"
                }
                menuImageArray.push(newMenuImage)

            }
        }

        if (subImage.lenght != 0) {
            for (const subImageObject of subImage) {
                const newSubImage = {
                    store_id: subImageObject.store_id,
                    store_image_name: subImageObject.store_image_name,
                    store_image_type: subImageObject.store_image_type,
                    data_type: "old"
                }
                subImageArray.push(newSubImage)

            }
        }


        setMenuData(menuImageArray)
        setSubImageData(subImageArray)
        setMainImage(data.store_cover_image)


    };

    const fetchTempData = async () => {
        console.log("fetchTempData active");

        const menuImageArray = []
        const subImageArray = []
        for (const menuImageObject of menuImageTemp) {
            const newMenuImage = {
                store_id: menuImageObject.store_id,
                store_image_name: menuImageObject.store_image_name,
                store_image_type: menuImageObject.store_image_type,
                data_type: "old"
            }
            menuImageArray.push(newMenuImage)

        }

        for (const subImageObject of subImageTemp) {
            const newSubImage = {
                store_id: subImageObject.store_id,
                store_image_name: subImageObject.store_image_name,
                store_image_type: subImageObject.store_image_type,
                data_type: "old"
            }
            subImageArray.push(newSubImage)

        }
        setMenuData(menuImageArray)
        setFormData(storeTemp)
        setSubImageData(subImageArray)
        setMainImage("https://firebasestorage.googleapis.com/v0/b/fir-upload-file-8e06e.appspot.com/o/image%2FFc71O5zaIAEsFzE.png?alt=media&token=781cb1e2-2044-4bf2-8038-b8b841413915")
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
                        console.log(formData);

                        // setFormData({
                        //     ...formData,
                        //     location: place.formatted_address,
                        //     latitude: place.geometry.location.lat(),
                        //     longitude: place.geometry.location.lng(),
                        // });
                        setLocationData({
                            location: place.formatted_address,
                            latitude: place.geometry.location.lat(),
                            longitude: place.geometry.location.lng(),
                        })
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

    const handleSelectedMenuImage = (files: any) => {
        if (files && files[0].size < 10000000) {
            const imageFile = files[0]
            const name = imageFile.name
            const storageRef = ref(storage, `image/${name}`)
            const uploadTask = uploadBytesResumable(storageRef, imageFile)

            setMenuUploading(true)

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100

                    setProgressUpload(progress) // to show progress upload

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
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        const userData = localStorage.getItem("userData")
                        const userDataJson = JSON.parse(userData || "[]");
                        //url is download url of file
                        const newUrl = { id: menuData.length + 1, store_id: formData.store_id, name: name, store_image_name: `${url}`, store_image_type: "ภาพเมนู", data_type: "new" };
                        console.log(newUrl);

                        setMenuData([...menuData, newUrl])
                        setMenuUploading(false)
                    })
                },
            )
        } else {
            message.error('File size too large')
        }
    }

    const removeMenuImage = (image: object) => {
        console.log(image);
        if (image.data_type == "old") {
            const newArray = menuData.filter(item => item.store_image_name !== image.store_image_name);
            setRemoveImage([...removeImage, image.store_id])
            setMenuData(newArray)
        } else {
            const newArray = menuData.filter(item => item.store_image_name !== image.store_image_name);
            setMenuData(newArray)
        }

    }

    const handleSelectedSubImage = (files: any) => {
        if (files && files[0].size < 10000000) {
            const imageFile = files[0]
            const name = imageFile.name
            const storageRef = ref(storage, `image/${name}`)
            const uploadTask = uploadBytesResumable(storageRef, imageFile)

            setSubImageUpload(true)

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100

                    setSubImageProgressUpload(progress) // to show progress upload

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
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        const userData = localStorage.getItem("userData")
                        const userDataJson = JSON.parse(userData || "[]");
                        //url is download url of file
                        const newUrl = { id: subImageData.length + 1, store_id: formData.store_id, name: name, store_image_name: `${url}`, store_image_type: "ภาพประกอบ", data_type: "new" };
                        console.log(newUrl);

                        setSubImageData([...subImageData, newUrl])
                        setSubImageUpload(false)
                    })
                },
            )
        } else {
            message.error('File size too large')
        }
    }

    const removeSubImage = (image: object) => {

        if (image.data_type == "old") {
            const newArray = subImageData.filter(item => item.store_image_name !== image.store_image_name);
            setSubImageData(newArray)
            setRemoveImage([...removeImage, image.store_id])
        } else {
            const newArray = subImageData.filter(item => item.store_image_name !== image.store_image_name);
            setSubImageData(newArray)
        }
    }

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

                        setFormData({ ...formData, store_cover_image: url });
                    })
                },
            )
        } else {
            message.error('File size too large')
        }
    }

    useEffect(() => {
        if (formData.store_id === null) {
            fetchData();
            // fetchTempData()
        } else {
            setFormData({
                ...formData,
                location: locationData.location,
                latitude: locationData.latitude,
                longitude: locationData.longitude,
            });
        }


    }, [locationData]);

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
                                                            name="category_id"
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

                                                <Grid item xs={6}>
                                                    <Typography variant="subtitle1">
                                                        จำนวนโต๊ะที่เปิดให้จอง
                                                    </Typography>
                                                    <TextField required
                                                        fullWidth
                                                        type="number"
                                                        id="table_booking"
                                                        name="table_booking"
                                                        label="table_booking"
                                                        autoComplete="table_booking"
                                                        value={formData.table_booking}
                                                        onChange={handleChange}
                                                    />
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <Typography variant="subtitle1">
                                                        ที่นั่งสำหรับ 1 โต๊ะ
                                                    </Typography>
                                                    <TextField required
                                                        fullWidth
                                                        type="number"
                                                        id="max_people_booking"
                                                        name="max_people_booking"
                                                        label="max_people_booking"
                                                        autoComplete="max_people_booking"
                                                        value={formData.max_people_booking}
                                                        onChange={handleChange}
                                                    />
                                                </Grid>

                                                <Grid item xs={12}>
                                                    <Typography variant="subtitle1">รูปภาพปกร้าน</Typography>
                                                    <div className="container mt-5">
                                                        <div className="col-lg-8 offset-lg-2">
                                                            <Input
                                                                type="file"
                                                                placeholder="Select file to upload"
                                                                accept="image/png"
                                                                onChange={(files) => handleSelectedMainImage(files.target.files)}
                                                            />
                                                            {isMainImageUpload && <Progress percent={mainProgressUpload} />}

                                                            {mainImage && (
                                                                <>
                                                                    <Image
                                                                        src={mainImage}
                                                                        alt={mainImage}
                                                                        style={{ width: "100%", height: 200, objectFit: 'cover' }}
                                                                    />
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                </Grid>

                                                <Grid item xs={12}>
                                                    <Typography variant="subtitle1">อัปโหลดเมนู</Typography>
                                                    <div className="container mt-5">
                                                        <div className="col-lg-8 offset-lg-2">
                                                            <Box >
                                                                <Box sx={{ width: '50%', display: 'flex', flexDirection: 'row' }}>
                                                                    <Input
                                                                        type="file"
                                                                        placeholder="Select file to upload"
                                                                        accept="image/png"
                                                                        onChange={(files) => handleSelectedMenuImage(files.target.files)}
                                                                    />
                                                                </Box>

                                                                <Box sx={{ width: '50%', display: 'flex', flexDirection: 'row' }}>
                                                                    {menuUploading && <Progress percent={menuProgressUpload} />}
                                                                </Box>
                                                            </Box>

                                                            <List>
                                                                {menuData.map((item, index) => (
                                                                    <ListItem key={index}>
                                                                        <ListItemAvatar>
                                                                            <Image
                                                                                key={index}
                                                                                src={item.store_image_name}
                                                                                alt={item.store_image_name}
                                                                                style={{ width: 100, height: 100, objectFit: 'cover' }}
                                                                            />
                                                                        </ListItemAvatar>
                                                                        <ListItemText primary={item.store_image_name} />
                                                                        <ListItemIcon>
                                                                            <Button onClick={() => removeMenuImage(item)} size="small">Remove</Button>
                                                                        </ListItemIcon>
                                                                    </ListItem>
                                                                ))}
                                                            </List>
                                                        </div>
                                                    </div>
                                                </Grid>

                                                <Grid item xs={12}>
                                                    <Typography variant="subtitle1">
                                                        รูปภาพประกอบ
                                                    </Typography>
                                                    <div className="container mt-5">
                                                        <div className="col-lg-8 offset-lg-2">
                                                            <Box >
                                                                <Box sx={{ width: '50%', display: 'flex', flexDirection: 'row' }}>
                                                                    <Input
                                                                        type="file"
                                                                        placeholder="Select file to upload"
                                                                        accept="image/png"
                                                                        onChange={(files) => handleSelectedSubImage(files.target.files)}
                                                                    />
                                                                </Box>

                                                                <Box sx={{ width: '50%', display: 'flex', flexDirection: 'row' }}>
                                                                    {subImageUpload && <Progress percent={subImageProgressUpload} />}
                                                                </Box>
                                                            </Box>

                                                            <List>
                                                                {subImageData.map((item, index) => (
                                                                    <ListItem key={index}>
                                                                        <ListItemAvatar>
                                                                            <Image
                                                                                key={index}
                                                                                src={item.store_image_name}
                                                                                alt={item.store_image_name}
                                                                                style={{ width: 100, height: 100, objectFit: 'cover' }}
                                                                            />
                                                                        </ListItemAvatar>
                                                                        <ListItemText primary={item.store_image_name} />
                                                                        <ListItemIcon>
                                                                            <Button onClick={() => removeSubImage(item)} size="small">Remove</Button>
                                                                        </ListItemIcon>
                                                                    </ListItem>
                                                                ))}
                                                            </List>

                                                        </div>
                                                    </div>

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
