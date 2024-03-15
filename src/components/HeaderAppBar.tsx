"use client"

import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from "next/link";

const pages = [
  {
    name: 'หน้าแรก',
    path: '/'
  },
  {
    name: 'คำสั่งซื้อ',
    path: '/activity'
  },
  {
    name: 'ร้านของฉัน',
    path: '/store'
  },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

interface LocalStorageUser {
  user_id: number;
  username: string;
  password: string;
  profile_image: string;
  user_status: string;
  email: string;
  phone_num: string;
  latitude: number;
  longitude: number;
}

export default function HeaderAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState()

  const checkLoginStatus = () => {
    const userData = localStorage.getItem("userData")
    const userDataJson = JSON.parse(userData || "[]");
    if (userData) {
      console.log(userDataJson);
      setIsLogin(true)
      setUserData(userDataJson)
    } else {
      console.log("not login");
    }
  }

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pageClick = (path: string) => {
    window.location.replace(path)
    setAnchorElNav(null);
  }

  const profileClick = (path: string) => {
    window.location.replace(path)
    setAnchorElUser(null);
  }

  useEffect((() => {
    checkLoginStatus()
  }), [])

  return (
    <Box sx={{ flexGrow: 1, position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999 }}>
      <AppBar position="static" sx={{ bgcolor: '#c53030' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              TableTru
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.filter((page) => page.name !== "ร้านของฉัน" || isLogin).map((page) => (
                  <Link key={page.name} href={`${page.path}`}>
                    <MenuItem >
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  </Link>


                ))}

              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              TableTru
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {isLogin && userData.user_status === "merchant" ? (
                // ถ้าเป็น true จะแสดงส่วนนี้
                <>
                  {pages.map((page) => (
                    <Box key={page.name} sx={{ marginLeft: 2, marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                      <Link href={`${page.path}`}>
                        <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                          {page.name}
                        </Button>
                      </Link>
                    </Box>
                  ))}
                </>
              ) : (
                <>
                  {pages.filter((page) => page.name !== "ร้านของฉัน").map((page) => (
                    <Box key={page.name} sx={{ marginLeft: 2, marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                      <Link href={`${page.path}`}>
                        <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                          {page.name}
                        </Button>
                      </Link>
                    </Box>
                  ))}
                </>
              )}


            </Box>

            <Box sx={{ flexGrow: 0 }}>

              <Tooltip title="profile">
                <IconButton onClick={() => profileClick("/profile")} sx={{ p: 0 }}>
                  {isLogin ? (
                    <Avatar alt="Remy Sharp" src={`${userData.profile_image}`} />
                  ) : (
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  )}

                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box >

  );
}