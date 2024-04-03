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
    Checkbox,


} from "@mui/material";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CreateStoreDetail from "@/components/store/CreateStoreDetail";
import CircularProgress from '@mui/material/CircularProgress';
import Map from "@/components/Map";
import dayjs, { Dayjs } from 'dayjs';
import { Loader } from '@googlemaps/js-api-loader';
import { storage } from '@/services/firebaseConfig'
import { Input, message, Image, Progress, } from 'antd'
import CloseIcon from '@mui/icons-material/Close';
import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage'
import { createStore, checkStoreByName, getStoreById, createStoreImage, createOpenTime } from '@/services/store.service'
import { editUser } from "@/services/user.service";

const loader = new Loader({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    version: 'weekly',
    libraries: ['places'], // เพิ่ม libraries places
});

const OpenTimes = [
    {
        day: 'Monday',
        start_time: '2024-02-23T08:00:00Z',
        end_time: '2024-02-23T22:00:00Z',
        open_status: true
    },
    {
        day: 'Tuesday',
        start_time: '2024-02-23T08:00:00Z',
        end_time: '2024-02-23T22:00:00Z',
        open_status: true
    },
    {
        day: 'Wednesday',
        start_time: '2024-02-23T08:00:00Z',
        end_time: '2024-02-23T22:00:00Z',
        open_status: true
    },
    {
        day: 'Thursday',
        start_time: '2024-02-23T08:00:00Z',
        end_time: '2024-02-23T22:00:00Z',
        open_status: true
    },
    {
        day: 'Friday',
        start_time: '2024-02-23T08:00:00Z',
        end_time: '2024-02-23T22:00:00Z',
        open_status: true
    },
    {
        day: 'Saturday',
        start_time: '2024-02-23T08:00:00Z',
        end_time: '2024-02-23T22:00:00Z',
        open_status: true
    },
    {
        day: 'Sunday',
        start_time: '2024-02-23T08:00:00Z',
        end_time: '2024-02-23T22:00:00Z',
        open_status: true
    },
]

interface StoreImage {
    id: number;
    name: string;
    store_image_name: string;
    store_image_type: string;
}

var utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

export default function CreateStore() {
    const [menuUploading, setMenuUploading] = useState(false)
    const [subImageUpload, setSubImageUpload] = useState(false)
    const [menuProgressUpload, setProgressUpload] = useState(0)
    const [subImageProgressUpload, setSubImageProgressUpload] = useState(0)
    const [menuData, setMenuData] = useState<StoreImage[]>([])
    const [subImageData, setSubImageData] = useState<StoreImage[]>([])
    const [mainImage, setMainImage] = useState('')
    const [isMainImageUpload, setIsMainImageUpload] = useState(false)
    const [mainProgressUpload, setMainProgressUpload] = useState(0)

    const [createError, setCreateError] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    const [openTimeData, setOpenTimeData] = useState<Object[]>(OpenTimes)
    const [locationData, setLocationData] = useState<object>({
        location: '',
        latitude: null,
        longitude: null,
    })
    const [formData, setFormData] = useState<any>({
        category_id: 1,
        store_name: '',
        table_booking: 0,
        max_people_booking: 0,
        sum_rating: null,
        store_description: '',
        latitude: null,
        longitude: null,
        location: '',
        store_cover_image: ''
    })

    const handleChange = (e) => {
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
        // console.log(formData.OpenTimes);
    };

    const handleCheckBoxChange = (index) => {
        const updatedOpenTimeData = [...openTimeData];
        updatedOpenTimeData[index] = {
            ...updatedOpenTimeData[index],
            open_status: !updatedOpenTimeData[index].open_status,
        };
        setOpenTimeData(updatedOpenTimeData);
    };


    const handleOpenTimeChange = (index: number, newValue: any) => {
        const newOpenTimes = openTimeData
        newOpenTimes[index].start_time = newValue.format('YYYY-MM-DDTHH:mm:ssZ');
        setOpenTimeData(newOpenTimes);
        console.log(newValue.format('YYYY-MM-DDTHH:mm:ssZ'))
    };

    const handleCloseTimeChange = (index: number, newValue: any) => {
        const newCloseTimes = openTimeData
        newCloseTimes[index].end_time = newValue.format('YYYY-MM-DDTHH:mm:ssZ');
        setOpenTimeData(newCloseTimes);
        console.log(newValue.format('YYYY-MM-DDTHH:mm:ssZ'))
    };


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log(formData);
        console.log(openTimeData);

        if (
            formData.store_name !== "" && formData.location != ""
        ) {
            const checkStoreNameRes = await checkStoreByName(formData.store_name)
            if (!checkStoreNameRes) {
                const userData = localStorage.getItem("userData")
                const userDataJson = JSON.parse(userData || "[]");
                const createStoreRes = await createStore(formData)
                console.log(createStoreRes);
                userDataJson.store_id = createStoreRes.store_id
                userDataJson.user_status = "merchant"
                localStorage.setItem('userData', JSON.stringify(userDataJson));

                // const createStoreRes = { store_id: 1 }

                const newUserData = {
                    user_id: userDataJson.user_id,
                    store_id: createStoreRes.store_id,
                    user_status: "merchant"
                }
                await editUser(userDataJson.user_id, newUserData)

                const newmenuImageData = menuData.filter(item => item.data_type !== "old");
                const newSubImageData = subImageData.filter(item => item.data_type !== "old");

                console.log(newmenuImageData);
                console.log(newSubImageData);

                for (const menuImageObject of newmenuImageData) {
                    const menuImageWithStoreId = {
                        store_id: createStoreRes.store_id,
                        store_image_name: menuImageObject.store_image_name,
                        store_image_type: menuImageObject.store_image_type
                    }
                    await createStoreImage(menuImageWithStoreId)
                }

                for (const subImageObject of newSubImageData) {
                    const subImageWithStoreId = {
                        store_id: createStoreRes.store_id,
                        store_image_name: subImageObject.store_image_name,
                        store_image_type: subImageObject.store_image_type
                    }
                    await createStoreImage(subImageWithStoreId)
                }

                for (const openTimeObject of openTimeData) {
                    const openTimeStoreId = {
                        ...openTimeObject,
                        store_id: createStoreRes.store_id,
                    }
                    await createOpenTime(openTimeStoreId)
                }


                setIsLoading(true);
                setTimeout(() => {
                    window.location.replace('/store');
                }, 5000); // 5000 milliseconds = 5 seconds
            }
            else {
                setCreateError("มีร้านค้าชื่อนี้แล้ว")
                console.log("error");

            }
        } else {
            setCreateError("โปรดใสข้อมูลให้ครบ")
        }


    };

    const mapRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [predictions, setPredictions] = useState<google.maps.places.AutocompletePrediction[]>([]);
    const markerRef = useRef(null);

    useEffect(() => {
        loader.load().then(() => {
            const google = window.google;
            if (mapRef.current && !map) {
                const geolocation = navigator.geolocation;
                if (geolocation) {
                    geolocation.getCurrentPosition(
                        (position) => {
                            const initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                            const newMap = new google.maps.Map(mapRef.current, {
                                center: initialLocation,
                                zoom: 12,
                            })
                            setMap(newMap);
                            // newMap.setCenter(initialLocation);
                            // new google.maps.Marker({
                            //     position: initialLocation,
                            //     map: newMap,
                            // });
                        },
                        (error) => {
                            if (error.code === error.PERMISSION_DENIED) {
                                const newMap = new google.maps.Map(mapRef.current, {
                                    center: { lat: 13.7563, lng: 100.5018 }, // ตำแหน่งเริ่มต้นที่กรุงเทพมหานคร,
                                    zoom: 12,
                                })
                                setMap(newMap);
                                // newMap.setCenter({ lat: 13.7563, lng: 100.5018 });
                                // new google.maps.Marker({
                                //     position: { lat: 13.7563, lng: 100.5018 },
                                //     map: newMap,
                                // });
                            }
                        }
                    );
                }
                else {
                    console.log("my location off");

                }
            }
            if (inputRef.current && google) {
                const autocomplete = new google.maps.places.Autocomplete(inputRef.current);
                autocomplete.addListener('place_changed', () => {
                    const place = autocomplete.getPlace();
                    if (place && place.geometry && map) {
                        const location = place.geometry.location; //ตำแหน่งแบบ lat long
                        console.log(place.formatted_address); //ตำแหน่งแบบชื่อ
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
                        if (markerRef.current) {
                            markerRef.current.setMap(null); // เอาออกจากแผนที่
                        }

                        // เพิ่ม Marker ใหม่
                        const newMarker = new google.maps.Marker({
                            position: location,
                            map: map,
                        });

                        // เก็บ Marker ใหม่ลงใน ref
                        markerRef.current = newMarker;
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
                        const newUrl = { id: menuData.length + 1, name: name, store_image_name: `${url}`, store_image_type: "ภาพเมนู" };
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

    const removeMenuImage = (urlToDelete: string) => {
        console.log(urlToDelete);
        const newArray = menuData.filter(item => item.store_image_name !== urlToDelete);
        setMenuData(newArray)
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
                        const newUrl = { id: subImageData.length + 1, name: name, store_image_name: `${url}`, store_image_type: "ภาพประกอบ" };
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

    const removeSubImage = (urlToDelete: string) => {
        console.log(urlToDelete);
        const newArray = subImageData.filter(item => item.store_image_name !== urlToDelete);
        setSubImageData(newArray)
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
        setFormData({
            ...formData,
            location: locationData.location,
            latitude: locationData.latitude,
            longitude: locationData.longitude,
        });
    }, [locationData]);

    return (
        <>
            <ThemeProvider theme={createTheme()}>
                <Container component="main" maxWidth="md">
                    <CssBaseline />

                    <Box sx={{ mt: 16, mb: 8, display: 'flex', flexDirection: 'column', alignItems: 'left', }}>
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
                                                            name="category_id"
                                                            value={formData.category_id}
                                                            label="เลิอกโค้ตส่วนลด"
                                                            onChange={handleChange}
                                                        >
                                                            <MenuItem value={1}>ไทย</MenuItem>
                                                            <MenuItem value={2}>นานาชาติ</MenuItem>
                                                            <MenuItem value={3}>ญิ่ปุ่น</MenuItem>
                                                            <MenuItem value={4}>จีน</MenuItem>
                                                            <MenuItem value={5}>อิตาเลี่ยน</MenuItem>
                                                            <MenuItem value={6}>ฟิวชั่น</MenuItem>
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
                                                    <div className="container my-5">
                                                        <div className="col-lg-8 space-y-5 offset-lg-2 ">
                                                            <Input
                                                                type="file"
                                                                placeholder="Select file to upload"
                                                                accept="image/png, image/jpeg"
                                                                onChange={(files) => handleSelectedMainImage(files.target.files)}
                                                            />
                                                            {isMainImageUpload &&
                                                                <Progress percent={mainProgressUpload}/>}

                                                            {mainImage && (
                                                                <>
                                                                    <Image
                                                                        src={mainImage}
                                                                        alt={mainImage}
                                                                        style={{
                                                                            width: "100%",
                                                                            height: 200,
                                                                            objectFit: "cover"
                                                                        }}
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
                                                                        accept="image/png, image/jpeg"
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
                                                                        <ListItemText primary={item.name} />
                                                                        <ListItemIcon>
                                                                            <Button onClick={() => removeMenuImage(item.store_image_name)} size="small">Remove</Button>
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
                                                                        accept="image/png, image/jpeg"
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
                                                                        <ListItemText primary={item.name} />
                                                                        <ListItemIcon>
                                                                            <Button onClick={() => removeSubImage(item.store_image_name)} size="small">Remove</Button>
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

                                                    {openTimeData.map((item, index) => (
                                                        <Box key={index} >
                                                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                                                <Checkbox
                                                                    size="small"
                                                                    sx={{ height: '40px' }}
                                                                    checked={item.open_status}
                                                                    onClick={() => handleCheckBoxChange(index)}
                                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                                />
                                                                <Box className="grid grid-cols-1 gap-2 md:grid-cols-3 gap-4">
                                                                    <p className="flex item-center text-center">{item.day}</p>
                                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                        <DemoContainer components={["TimePicker"]}>
                                                                            <TimePicker
                                                                                label="เวลาเปิด"
                                                                                className={"w-full"}
                                                                                disabled={!item.open_status}
                                                                                value={dayjs.utc(item.start_time)}
                                                                                onChange={(newValue) => handleOpenTimeChange(index, newValue)}
                                                                            />
                                                                        </DemoContainer>
                                                                    </LocalizationProvider>
                                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                        <DemoContainer components={["TimePicker"]}>
                                                                            <TimePicker
                                                                                label="เวลาปิด"
                                                                                className={"w-full"}
                                                                                disabled={!item.open_status}
                                                                                value={dayjs.utc(item.end_time)}
                                                                                onChange={(newValue) => handleCloseTimeChange(index, newValue)}
                                                                            />
                                                                        </DemoContainer>
                                                                    </LocalizationProvider>
                                                                </Box>
                                                            </Box>




                                                        </Box>

                                                    ))}
                                                </div>
                                            </Grid>
                                        </AccordionDetails>
                                    </Accordion>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="subtitle1" color="#ff1744" >{createError}</Typography>
                                </Grid>
                            </Grid>
                            <Link href="/store">
                                <Button
                                    sx={{ marginTop: 3 }}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    disabled={isLoading}
                                >
                                    {isLoading ? <CircularProgress /> : 'สร้างร้านค้า'}
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
}
