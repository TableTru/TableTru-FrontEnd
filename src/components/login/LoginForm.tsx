"use client";
import React, { useEffect, useState } from "react";
import { Image } from "@nextui-org/react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { Button, TextField, Container, Paper, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";

import { getLoginUser } from '@/utills/auth'
import { useRouter } from "next/router";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const Login = async () => {
    if (formData.username != '' || formData.username != '') {
      const user = await getLoginUser(formData)
      if (user) {
        localStorage.setItem('userData', JSON.stringify(user));
        console.log("login pass " + user.username);
        window.location.replace('/')
      } else {
        console.log("username or password is incorect");
      }
    }
  }

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    Login()
  };

  return (
    <div className="">
      <Container component="main" maxWidth="xs">
        <div className="avata">
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

        </div>

        <div>
          <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: 1 }}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              margin="normal"
              name="username"
              type="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              margin="normal"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"

            /> */}
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
          </form>

          <Grid container>
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item>
              <Link href="/register" variant="body2">
                {"Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}