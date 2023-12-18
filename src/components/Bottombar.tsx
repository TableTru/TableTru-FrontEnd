'use client';

import React from 'react';
import {BottomNavigation,BottomNavigationAction } from '@mui/material'; 
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import PersonIcon from '@mui/icons-material/Person';
import {NextLinkComposed} from '@/components/Link';




export default function Bottombar() {
    

    const [value, setValue] = React.useState('recents');
  
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
  
    return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation className="w-full" value={value} onChange={handleChange}>
        <BottomNavigationAction
          component={NextLinkComposed}
          to={
            {
                pathname:'/'
            }
          }
          label="หน้าแรก"
          value="Home"
          icon={<HomeIcon />
        }
        />
        <BottomNavigationAction
          label="คำสั่งซื้อ"
          value="Activite"
          icon={<HistoryIcon />}
        />
        <BottomNavigationAction
            component={NextLinkComposed}
                to={
                    {
                        pathname:'/login'
                    }
                }
          label="โปรไฟล์"
          value="Profile"
          icon={<PersonIcon />}
        />
      </BottomNavigation >
      </Paper>
    );
  }