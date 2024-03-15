'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

//Import Pivot Promocode Table
import { PromotionCodePivot } from "@/data/promotionPivot"
import { PromotionCode } from "@/interfaces/PromoPivot"


export default function ContentBox() {

    const [promotionCode,setPromotionCode] = React.useState<PromotionCode[]>(PromotionCodePivot);
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
                    label="เลิอกโค้ตส่วนลด"
                    onChange={handleChange}
                >

            {/* {filteredPromotionCodes.map(promotionCode => (
                <MenuItem key={promotionCode.promotion_code_id}>{promotionCode.promotion_id}</MenuItem>
            ))
            } */}
                </Select>
            </FormControl>
        </Box>
        </div>
    );
}