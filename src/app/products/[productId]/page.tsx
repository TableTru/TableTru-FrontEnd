"use client";

import { useEffect, useState } from "react";

import { Image } from "@nextui-org/react";
import NextImage from "next/image";

import { NextPage, NextPageContext } from "next";
import DetailBox from "@/components/product/DetailBox";
import PromotionList from "@/components/product/ContactBox";
import SelectDateBox from "@/components/product/SelectDateBox";
import Galleries from "@/components/product/Galleries";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Map from "@/components/Map";
import ConfirmButton from "@/components/botton/ConfirmButton";
import dayjs from "dayjs";

import { useParams } from "next/navigation";

import { StoreInterface, Store } from "@/interfaces/StoreInterface";
import { storeTemp } from "@/data/store";
import { Review } from "@/interfaces/Review";

import { getStoreById } from "@/services/store.service";
import {GetAllReviewByStoreId} from '@/services/review.service'

// Import Promotion Code 
import { initialItems } from "@/data/promotion"
import { Item } from "@/interfaces/Promo"


const ProductDetail = () => {
    const params = useParams();
    const [storeData, setStoreData] = useState<object>({
        store_name: '',
        table_booking: '',
        store_description:'',
        OpenTimes: [
            {
                start_time:'',
                end_time:'',
                day:''
            },
            {
                start_time:'',
                end_time:'',
                day:''
            }
        ]
    });
    const [reviewData, setReviewData] = useState<Review[]>([])

    const fetchData = async () => {
        const storeId = Number(params.productId)
        console.log(storeId)
        const data = await getStoreById(storeId);

        console.log(data);

        if (data) {
            setStoreData(data);
        }

        const reviewArray = [];
        const reviews = await GetAllReviewByStoreId(storeId);
        console.log(reviews);

        if (reviews) {
            for (const reviewObject of reviews) {
                reviewArray.push(reviewObject);
            }
            setReviewData(reviewArray);
            console.log(reviewArray);
        }
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
                                    {/* <span className="px-2.5 py-0.5 text-xs text-red-600 bg-red-100 dark:bg-gray-700 rounded-xl dark:text-gray-200">
                                        New Arrival
                                    </span> */}
                                    <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                                        {storeData?.store_name}
                                    </h2>
                                    <div className="flex flex-wrap items-center mb-6">
                                    <Rating name="read-only" value={3.5} readOnly />
                                        <a
                                            className="mb-4 text-xs underline hover:text-red-600 dark:text-gray-400 dark:hover:text-gray-300 lg:mb-0"
                                        >
                                            3.5 reviews
                                        </a>
                                    </div>
                                </div>
                                <Stack direction="row" spacing={1}>
                                    <Chip
                                        icon={<RestaurantIcon />}
                                        label={`1`}
                                    />
                                    <Chip
                                        icon={<LocationOnIcon />}
                                        label={`1`}
                                    />
                                </Stack>

                                <SelectDateBox seats={storeData.table_booking}  openTime={storeData.OpenTimes} />

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

                                <PromotionList />

                                <div className="flex flex-cols gap-4 mb-6">
                                    {/*<button href="@/app/products/category/[category-slug]/[productId]/page#" className="w-full px-4 py-3 text-center text-gray-100 bg-red-600 border border-transparent dark:border-gray-700 hover:border-red-500 hover:text-red-700 hover:bg-red-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-xl" onClick="handleButtonConfirm()">*/}
                                    {/*    ยืนยันการจอง</button>*/}

                                    <ConfirmButton />
                                </div>
                            </div>
                        </div>
                    </div>
                    <DetailBox description={storeData.store_description} openTime={storeData.OpenTimes} review={reviewData} store_id={Number(params.productId)}/>
                </div>
            </section>
        </>
    );
};
export default ProductDetail;
