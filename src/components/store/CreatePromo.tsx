"use client";
import React, {useState} from "react";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import dayjs, {Dayjs} from "dayjs";
import {Box, Button, Container, TextField, Typography} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function CreatePromo() {
    const [formData, setFormData] = useState<any>({
        promo_name:'',
        description:'',
        status:true,
    });

    const [selectedDate,setSelectedDate] = useState<Dayjs|null>(null)

    const handleChange = (event:any) => {
        const { name, value } = event.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(name);
        console.log(value);
    };

    const handleChangeDate = (newValue) =>{
        // const newExpirationDate = dayjs(newValue).hour(23).minute(59);
        // setFormData(newExpirationDate.format("YYYY-MM-DD HH:mm"))
        //
        // console.log(newExpirationDate.format("YYYY-MM-DD HH:mm"))
        setSelectedDate(dayjs(newValue).hour(23).minute(59));
        console.log(dayjs(newValue).format("YYYY-MM-DD HH:mm"));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(name);
        console.log(value);
    };

    return (
        <>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography component="h1" variant="h5">
                        สร้างโปรโมชั่น
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Promotion Name"
                            name="promo_name"
                            autoComplete="promo_name"
                            autoFocus
                            value={formData.promo_name}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="description"
                            label="Description"
                            id="description"
                            autoComplete="description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={["DatePicker"]}>
                                <DatePicker
                                    label="วันหมดอายุ"
                                    disablePast
                                    className={"w-full"}
                                    value={selectedDate}
                                    onChange={handleChangeDate}
                                />
                            </DemoContainer>
                        </LocalizationProvider>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                            onClick={handleSubmit}
                        >
                            บันทึก
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    );
}