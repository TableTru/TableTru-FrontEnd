"use client";

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import FilterList from '@mui/icons-material/FilterList';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

export default function AppBarToggle() {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: string, open: boolean) =>
      (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton size="large" onClick={toggleDrawer(anchor, true)} sx={{ ml: "16px" }} aria-label="FilterListIcon"> <FilterList className="appBar" color="primary" /> </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <Box
              sx={{ width: anchor === 'top' ? 'auto' : 250 }}
              role="presentation"
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <FormControl sx={{ p: "16px" }}>
                <FormLabel id="demo-radio-buttons-group-label">เรียงตาม</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="default"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="default" control={<Radio />} label="ค่าเริ่มต้น" />
                  <FormControlLabel value="lowToHigh" control={<Radio />} label="ราคาต่ำไปสูง" />
                  <FormControlLabel value="highest" control={<Radio />} label="ราคาสูงสุด" />
                  <FormControlLabel value="reviewScore" control={<Radio />} label="คะแนนรีวิว" />
                  <FormControlLabel value="nearest" control={<Radio />} label="ใกล้ที่สุดก่อน" />
                </RadioGroup>
              </FormControl>
              <Divider />
              <FormControl sx={{ p: "16px" }}>
                <FormLabel id="demo-radio-buttons-group-label">หมวดหมู่</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="all-category"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="all" control={<Radio />} label="ทั้งหมด" />
                  <FormControlLabel value="thai" control={<Radio />} label="ไทย" />
                  <FormControlLabel value="international" control={<Radio />} label="นานาชาติ" />
                  <FormControlLabel value="japanese" control={<Radio />} label="ญิ่ปุ่น" />
                  <FormControlLabel value="chinese" control={<Radio />} label="จีน" />
                  <FormControlLabel value="italian" control={<Radio />} label="อิตาลี" />
                  <FormControlLabel value="fusions" control={<Radio />} label="ฟิวชั่น" />
                </RadioGroup>
              </FormControl>
              <Divider />
              <FormControl sx={{ p: "16px" }}>
                <FormLabel id="demo-radio-buttons-group-label">ที่อยู่</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="all-location"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="silom" control={<Radio />} label="สีลม" />
                  <FormControlLabel value="satorn" control={<Radio />} label="สาทร" />
                  <FormControlLabel value="promppong" control={<Radio />} label="พร้อมพงษ์" />
                  <FormControlLabel value="rachatevi" control={<Radio />} label="ราชเทวี" />
                  <FormControlLabel value="ladprao" control={<Radio />} label="ห้าแยกลาดพร้าว" />
                  <FormControlLabel value="asok" control={<Radio />} label="อโศก" />
                </RadioGroup>
              </FormControl>



            </Box>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
