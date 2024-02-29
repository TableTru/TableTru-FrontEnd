'use client';

import { useEffect, useState } from "react";

import { Image } from "@nextui-org/react";
import NextImage from "next/image";

import { NextPage, NextPageContext } from "next";
import DetailBox from "@/components/product/DetailBox";
import ContactBox from "@/components/product/ContactBox"
import SelectDateBox from "@/components/product/SelectDateBox";
import Galleries from "@/components/product/Galleries";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Map from "@/components/Map";
import ConfirmButton from "@/components/botton/ConfirmButton";


import { StoreInterface, Store } from "@/interfaces/StoreInterface"
import { storeTemp } from "@/data/store"

import { getStore } from "@/services/store.service";


const product = {
    name: "test",
    detail: "ร้านอาหารที่เน้นความหลากหลายของเมนูพิซซ่า พาสต้า ชีสนำเข้า เนื้ออบนำเข้า ที่คุณสามารถดีไซน์มื้ออาหารของคุณเองได้ และเรายังมีเบเกอรี่โฮมเมด และขนมอบมีไว้บริการลูกค้า โดยลูกค้าสามารถเลือกรับประทานที่ร้าน หรือซื้อกลับไปฝากคนที่บ้านก็ได้"
}

const ProductDetail = () => {


    //from data/products
    const [storeData, setStoreData] = useState<Store>();

    

    const fetchData = async () => {
        // const data = await getStoreById(params.store_id);
        // console.log(data);

        // if (data) {
        //     setStoreData(data);
        //     console.log(data);
        // }

        setStoreData(storeTemp);

    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <section className="my-24 py-10 dark:bg-gray-800">
                <div className="max-w-6xl px-4 mx-auto">

                    <div className="flex flex-wrap mb-24 -mx-4">
                        <Galleries />

                        <div className="w-full px-4 md:w-1/2">
                            <div className="lg:pl-20">
                                <div className="mb-6 ">
                                    <span className="px-2.5 py-0.5 text-xs text-red-600 bg-red-100 dark:bg-gray-700 rounded-xl dark:text-gray-200">New
                                        Arrival</span>
                                    <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                                        {storeData?.store_name}
                                    </h2>
                                    <div className="flex flex-wrap items-center mb-6">
                                        <ul className="flex mb-4 mr-2 lg:mb-0">
                                            <li>
                                                <a href="@/app/products/category/[category-slug]/[productId]/page#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                        </path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="@/app/products/category/[category-slug]/[productId]/page#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                        </path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="@/app/products/category/[category-slug]/[productId]/page#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                        </path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="@/app/products/category/[category-slug]/[productId]/page#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                        </path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="@/app/products/category/[category-slug]/[productId]/page#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                        </path>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                        <a className="mb-4 text-xs underline hover:text-red-600 dark:text-gray-400 dark:hover:text-gray-300 lg:mb-0" href="@/app/products/category/[category-slug]/[productId]/page#">
                                           {storeData?.sum_rating}
                                        </a>
                                    </div>
                                </div>
                                <Stack direction="row" spacing={1}>
                                    <Chip icon={<RestaurantIcon />} label={`${storeData?.category_id}`} />
                                    <Chip icon={<LocationOnIcon />} label={`${storeData?.location_id}`} />
                                </Stack>

                                <SelectDateBox />

                                <div className="mb-6">
                                    <div className="bg-gray-100 dark:bg-gray-700 rounded-xl">
                                        <div className="p-3 lg:p-5 ">
                                            {/* Map */}
                                            <Map address="1600 Amphitheatre Parkway, Mountain View, CA" />
                                            <div className="p-2 rounded-xl lg:p-6 dark:bg-gray-800 bg-gray-50">
                                                123/xyz Location
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <ContactBox />

                                <div className="flex flex-cols gap-4 mb-6">
                                    {/*<button href="@/app/products/category/[category-slug]/[productId]/page#" className="w-full px-4 py-3 text-center text-gray-100 bg-red-600 border border-transparent dark:border-gray-700 hover:border-red-500 hover:text-red-700 hover:bg-red-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-xl" onClick="handleButtonConfirm()">*/}
                                    {/*    ยืนยันการจอง</button>*/}

                                    <ConfirmButton />
                                </div>
                            </div>
                        </div>
                    </div>
                    <DetailBox />

                </div>

            </section>


        </>
    );
};
export default ProductDetail;
