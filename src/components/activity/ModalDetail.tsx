"use client";

import React,{useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Map from "@/components/Map";
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LoyaltyIcon from '@mui/icons-material/Loyalty';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    const [seat, setSeat] = useState(2);
    const [date, setDate] = useState(new Date().toDateString());
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    //เลือกจาก select
    const [promocode, setPromocode] = useState("ส่วนลด 10%");

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">รายละเอียด</h2>
                    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li className="flex items-center">
                            <PersonIcon/>
                            {seat}
                        </li>
                        <li className="flex items-center">
                            <CalendarMonthIcon/>
                            {date}
                        </li>
                        <li className="flex items-center">
                            <AccessTimeIcon/>
                            {time}
                        </li>
                        <li className="flex items-center">
                            <LoyaltyIcon/>
                            {promocode}
                        </li>
                    </ul>
                    <Map address="1600 Amphitheatre Parkway, Mountain View, CA" className={"width:200"} />
                </Box>
            </Modal>
        </div>
    );
}
