"use client";
import React, { useEffect, useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useParams } from "next/navigation";
import { createPromotion, GetAllPromotionByStoreId } from "@/services/promotion.service";
import Link from 'next/link'
export default function CreatePromo() {
    const [promoName, setPromoName] = useState<string | null>("")
    const [promoDescription, setPromoDescription] = useState<string | null>("")
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null)
    const params = useParams();

    const handleChangeName = (event: any) => {
        setPromoName(event.target.value as string)
        console.log(event.target.value as string)
    };

    const handleChangeDescription = (event: any) => {
        setPromoDescription(event.target.value as string)
        console.log(event.target.value as string)
    }

    const handleChangeDate = (newValue: any) => {
        setSelectedDate(dayjs(newValue).hour(23).minute(59));
        console.log(dayjs(newValue).format("YYYY-MM-DD HH:mm"));
    }


    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const userData = localStorage.getItem("userData")
        const userDataJson = JSON.parse(userData || "[]");
        const formData = {
            promotion_name: promoName,
            store_id: userDataJson.store_id,
            promotion_description: promoDescription,
            expiration_date: selectedDate
        };
        console.log(formData);
        try {
            const createPromotionRes = await createPromotion(formData)
            console.log(createPromotionRes)
            window.location.replace("/store/promo");
        } catch (error) {
            console.log("error");
        }
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
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="promo_name"
                            label="ชื่อโปรโมชั่น"
                            name="promo_name"
                            autoComplete="promo_name"
                            autoFocus
                            value={promoName}
                            onChange={(newValue) => handleChangeName(newValue)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            multiline
                            rows={4} // ตั้งค่าจำนวนบรรทัดที่แสดง
                            name="promo_description"
                            label="คำอธิบายโปรโมชั่น"
                            id="promo_description"
                            autoComplete="description"
                            value={promoDescription}
                            onChange={(newValue) => handleChangeDescription(newValue)}
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={["DatePicker"]}>
                                <DatePicker
                                    label="วันหมดอายุ"
                                    disablePast
                                    className={"w-full"}
                                    format={"YYYY-MM-DD"}
                                    name={"expiration_date"}
                                    value={selectedDate}
                                    onChange={handleChangeDate}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}>
                            บันทึก
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    );
}