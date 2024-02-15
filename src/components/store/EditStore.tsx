"use client";

import * as React from "react";
import {Image} from "@nextui-org/react";
import {
    Tabs,
    Tab,
    Container,
    Box,
    Avatar,
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
    Paper


} from "@mui/material";

import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {TimePicker} from "@mui/x-date-pickers/TimePicker";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CreateStoreDetail from "@/components/store/CreateStoreDetail";
import ImageUpload from "@/components/store/ImageUpload";


export default function EditStore() {
    const rows = [{
        name: "วันจันทร์", open: "10:00", close: "12:00",
    }, {
        name: "วันอังคาร", open: "10:00", close: "12:00",
    },];

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const newRegisterData = {
            username: data.get("username") as string,
            password: data.get("password") as string,
            email: data.get("email") as string,
            phone_number: data.get("phone_number") as string,
        };

    };

    const categoryData = [{label: "The Shawshank Redemption", year: 1994}, {
        label: "The Godfather", year: 1972
    }, {label: "The Godfather: Part II", year: 1974},];

    return (<>
        <ThemeProvider theme={createTheme()}>
            <Container component="main" maxWidth="md">
                <CssBaseline/>

                <Box sx={{marginTop: 8, display: "flex", alignItems: "left",}}>
                    <Typography component="h1" variant="h4">
                        แก้ไขร้านค้า
                    </Typography>
                </Box>

                <Box component="form" noValidate onSubmit={handleSubmit} sx={{my: 3}}>
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
                            <Typography variant="subtitle1">
                                คำอธิบายร้าน
                            </Typography>
                            <TextField
                                required
                                fullWidth
                                id="store_description"
                                // label="คำอธิบายร้าน"
                                name="store_description"
                                autoComplete="store_description"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="subtitle1">
                                อัปโหลดเมนู
                            </Typography>
                            {/* <Image src="https://pbs.twimg.com/media/FXTTYWfVUAAjIph?format=png&name=medium" /> */}
                            <ImageUpload/>
                        </Grid>

                        <Grid item xs={12}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    รายละเอียดร้านค้า
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle1">
                                                หมวดหมู่
                                            </Typography>
                                            <Autocomplete
                                                disablePortal
                                                id="combo-box-demo"
                                                options={categoryData}
                                                renderInput={(params) => <TextField {...params} label="หมวดหมู่"/>}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography variant="subtitle1">
                                                แก้ไขรูปภาพ
                                            </Typography>
                                            {/* <Image src="https://pbs.twimg.com/media/FXTTYWfVUAAjIph?format=png&name=medium" /> */}
                                            <ImageUpload/>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography variant="subtitle1">
                                                จำนวนโต๊ะที่เปิดให้จอง
                                            </Typography>
                                            <TextField
                                                required
                                                fullWidth
                                                id="table_num"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sx={{marginTop: 3}}>
                                        <Typography variant="subtitle1">
                                            วันที่เปิด-ปิด
                                        </Typography>

                                        {/*Monday*/}
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 gap-4">
                                            <div className={"flex items-start md:items-center"}>
                                                <p>จันทร์</p>
                                            </div>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer fullWidth components={["TimePicker"]}>
                                                <TimePicker label="เวลาเปิด" className={"w-full"}/>
                                            </DemoContainer>
                                        </LocalizationProvider>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={["TimePicker"]}>
                                                <TimePicker label="เวลาปิด" className={"w-full"}/>
                                            </DemoContainer>
                                        </LocalizationProvider>

                                            <div className={"flex items-start md:items-center"}>
                                                <p>อังคาร</p>
                                            </div>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DemoContainer fullWidth components={["TimePicker"]}>
                                                    <TimePicker label="เวลาเปิด" className={"w-full"}/>
                                                </DemoContainer>
                                            </LocalizationProvider>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DemoContainer components={["TimePicker"]}>
                                                    <TimePicker label="เวลาปิด" className={"w-full"}/>
                                                </DemoContainer>
                                            </LocalizationProvider>
                                        </div>

                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    </Grid>
                    <Link href="/store">
                        <Button sx={{marginTop: 3}}
                                type="submit"
                                fullWidth
                                variant="contained"
                        >
                            แก้ไขร้านค้า
                        </Button>
                    </Link>
                </Box>

            </Container>
        </ThemeProvider>
    </>);
}