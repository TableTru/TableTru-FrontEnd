'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function ContentBox() {
    const [seat, setSeat] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setSeat(event.target.value as string);
    };

    return (
        <div className={"mb-6"}>
        <Box sx={{ minWidth: 120 }}>
            <p className={"mb-2"}>โปรโมชั่น</p>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">เลือกโค้ดส่วนลด</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={seat}
                    label="เลิอกโค้ตส่วนลด"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>ส่วนลด 10%</MenuItem>
                    <MenuItem value={2}>ส่วนลด 20%</MenuItem>
                    <MenuItem value={3}>ส่วนลด 30%</MenuItem>
                </Select>
            </FormControl>
        </Box>
        </div>
    );
}