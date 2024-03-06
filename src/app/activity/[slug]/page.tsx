'use client';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import React,{useState} from "react";
import Map from "@/components/Map";



const ActivityDetail= (props) => {



    return (
        <>
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


        </>
    );
}; export default ActivityDetail