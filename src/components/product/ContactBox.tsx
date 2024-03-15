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
import { initialItems } from "@/data/promotion"
import { Item } from "@/interfaces/Promo"
import {useState} from "react";

type PromotionCode = {
    promotion_code: number;
    store_id: number;
    promotion_id: number;
};

export default function ContentBox() {

    const [items, setItems] = useState<Item[]>(initialItems);
    const [seat, setSeat] = React.useState('');
    const [IsExpiration, setIsExpiration] = React.useState(false);
    
    const handleChange = (event) => {
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
                    value={seat}
                    id="demo-simple-select"
                    label="เลิอกโค้ตส่วนลด"
                    onChange={handleChange}
                >

            {/* {filteredPromotionCodes.map(promotionCode => (
                <MenuItem key={promotionCode.promotion_code_id}>{promotionCode.promotion_id}</MenuItem>
            ))
            } */}
                    {
                        items.map((item,index) => {
                            return(
                                <>
                                    <MenuItem key={index} value={index}>{item.name}</MenuItem>
                                </>
                            );})
                    }
                </Select>
            </FormControl>
        </Box>
        </div>
    );
}