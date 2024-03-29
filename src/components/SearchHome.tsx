'use client';

import { Box, Button } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";

export default function SearchHome() {
    const [search, setSearch] = useState('')

    const onClick = () => {
        console.log("onClick");
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setSearch(value);
        console.log('search:', value);
    }
    return (
        <>
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">

                <div >
                    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                            <div
                                className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="simple-search"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                name="search"
                                value={search}
                                onChange={handleChange}
                                onClick={onClick} />
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right' }}>
                            <a href={`/search?search=${search}`}>
                                <Button
                                sx={{ borderRadius: '0 0.5rem 0.5rem 0' }}
                                    variant="contained"
                                    className="search absolute inset-y-0 right-0 flex items-center px-3">
                                    Search
                                </Button>
                            </a>
                        </Box>
                    </Box>


                </div>


            </div>
        </>
    );
}