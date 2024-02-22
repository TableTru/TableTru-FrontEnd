"use client";

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SignUpForm = () => {
    const userTemp = {
        user_id: 1,
        username: "Aungpor",
        password: "por1234",
        user_status: "user",
        profile_image: "https://pbs.twimg.com/media/FXTTYWfVUAAjIph?format=png&name=medium",
        email: "aungpor.napat@gmail.com",
        phone_num: "0813111234",
        latitude: 0,
        longitude: 0,
        createAt: new Date(),
        updateAt: new Date(),
    };

    const [formData, setFormData] = useState({
        username: userTemp.username,
        password: userTemp.password,
        email: userTemp.email,
        phone_number: userTemp.phone_num,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // ทำสิ่งที่ต้องการเมื่อ submit form
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                required
                fullWidth
                id="username"
                name="username"
                label="Username"
                autoComplete="username"
                value={formData.username}
                onChange={handleChange}
            />
            <TextField
                required
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
            />
            <TextField
                required
                fullWidth
                id="email"
                name="email"
                label="Email Address"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
            />
            <TextField
                required
                fullWidth
                id="phone_number"
                name="phone_number"
                label="Phone Number"
                autoComplete="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
                Sign Up
            </Button>
        </form>
    );
};

export default SignUpForm;
