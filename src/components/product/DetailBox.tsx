"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";

import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";


import CardRating from "./detailBox/RatingBox"
import MenuImage from "./detailBox/MenuImage";
import AboutRestaurantBox from "./detailBox/AboutRestaurantBox"
import MainComment from "./detailBox/comments/MainComment";
import Divider from '@mui/material/Divider';

export default function DetailBox() {
    const [value, setValue] = React.useState("Review");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <>
            <div className="mb-6">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-xl">
                    <div className="p-3 lg:p-5 ">
                        <div className="p-2 rounded-xl lg:p-6 dark:bg-gray-800 bg-gray-50">
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                                    <TabList
                                        onChange={handleChange}
                                        aria-label="lab API tabs example"
                                    >
                                        <Tab label="รีวิว" value="Review" />
                                        <Tab label="รายละเอียด" value="Detail" />
                                        <Tab label="เมนู" value="Menu" />

                                    </TabList>
                                </Box>
                                <TabPanel value="Review">
                                    <div className="flex flex-row">
                                        <div className="flex flex-col">
                                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Overall Review</h3>
                                            <div className="flex items-center mb-4 text-yellow-300">
                                                <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                            </div>
                                        </div>

                                        <h3 className="text-5xl pl-4 py-2 text-center mg:pl-4">4.8</h3>
                                    </div>
                                    <Divider>การตอบกลับ</Divider>
                                    <div>
                                        <MainComment/>
                                        <CardRating/>
                                    </div>
                                </TabPanel>

                                <TabPanel value="Detail">
                                    <AboutRestaurantBox/>
                                </TabPanel>
                                <TabPanel value="Menu">
                                    <MenuImage/>
                                </TabPanel>

                            </TabContext>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
