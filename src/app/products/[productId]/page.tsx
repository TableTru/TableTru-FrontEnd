"use client";

import { useEffect, useState } from "react";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { NextPage, NextPageContext } from "next";
import DetailBox from "@/components/product/DetailBox";
import UserBooking from "@/components/product/UserBooking";
import Galleries from "@/components/product/Galleries";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import Map from "@/components/Map";
import { useParams } from "next/navigation";
import { Review } from "@/interfaces/Review";
import { getStoreById } from "@/services/store.service";
import { GetAllReviewByStoreId } from '@/services/review.service'
import {CheckBookingTime} from '@/services/tableBooking.service'

// Import Promotion Code 
import { initialItems } from "@/data/promotion"
import { Item } from "@/interfaces/Promo"

const openTime = [
    {
        day: "Monday",
        end_time: "2024-02-23T21:00:00Z",
        openTime_id: 1,
        start_time: "2024-02-23T08:00:00Z",
        store_id: 1,
    },
    {
        day: "Tuesday",
        end_time: "2024-02-23T21:00:00Z",
        openTime_id: 1,
        start_time: "2024-02-23T09:00:00Z",
        store_id: 1,
    },
    {
        day: "Wednesday",
        end_time: "2024-02-23T21:00:00Z",
        openTime_id: 1,
        start_time: "2024-02-23T09:00:00Z",
        store_id: 1,
    },
    {
        day: "Thursday",
        end_time: "2024-02-23T21:00:00Z",
        openTime_id: 1,
        start_time: "2024-02-23T09:00:00Z",
        store_id: 1,
    },
    {
        day: "Friday",
        end_time: "2024-02-23T21:00:00Z",
        openTime_id: 1,
        start_time: "2024-02-23T09:00:00Z",
        store_id: 1,
    },
    {
        day: "Saturday",
        end_time: "2024-02-23T21:00:00Z",
        openTime_id: 1,
        start_time: "2024-02-23T09:00:00Z",
        store_id: 1,
    },
    {
        day: "Sunday",
        end_time: "2024-02-23T21:00:00Z",
        openTime_id: 1,
        start_time: "2024-02-23T09:00:00Z",
        store_id: 1,
    },
]

const ProductDetail = () => {
    const params = useParams();
    const [storeData, setStoreData] = useState({
        OpenTimes: openTime,
        category_id: 1,
        category_name: "temp",
        latitude: 0,
        location: "",
        longitude: 0,
        max_people_booking: 1,
        store_cover_image: "",
        store_description: "",
        store_id: 1,
        store_name: "temp",
        sum_rating: 2.1,
        table_booking: 4,
        updated_at: ""
    });
    const [reviewData, setReviewData] = useState<Review[]>([{
        rating_score: 3,
        rating_status: false,
        review_comment: "ทดสอบ",
        review_id: 1,
        store_id: 1,
        user_id: 38,
        username: "อังปอ"
    }])

    const [disableTimeData, setDisableTimeData] = useState<Review[]>([{
        rating_score: 3,
        rating_status: false,
        review_comment: "ทดสอบ",
        review_id: 1,
        store_id: 1,
        user_id: 38,
        username: "อังปอ"
    }])

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

        const disableBookingTimeArray = [];
        const disableBookingTimes = await CheckBookingTime(storeId, data.table_booking);
        console.log(disableBookingTimes);

        if (disableBookingTimes) {
            for (const disableBookingTimeObject of disableBookingTimes) {
                disableBookingTimeArray.push(disableBookingTimeObject);
            }
            setDisableTimeData(disableBookingTimeArray);
            console.log(disableBookingTimeArray);
        }
    }

    useEffect(() => {
        // fetchData();
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
                                        <Rating name="read-only" value={storeData.sum_rating} readOnly />
                                        <a
                                            className="mb-4 text-xs dark:text-gray-400 dark:hover:text-gray-300 lg:mb-0"
                                        >
                                            {storeData.sum_rating} reviews
                                        </a>
                                    </div>
                                </div>
                                <Stack direction="row" spacing={1}>
                                    <Chip
                                        icon={<RestaurantIcon />}
                                        label={storeData.category_name}
                                    />
                                </Stack>

                                <UserBooking seats={storeData.table_booking} openTime={storeData.OpenTimes} store_id={Number(params.productId)}/>

                            </div>
                        </div>
                    </div>
                    <DetailBox description={storeData.store_description} openTime={storeData.OpenTimes} review={reviewData} store_id={Number(params.productId)} sum_rating={storeData.sum_rating} />
                </div>
            </section>
        </>
    );
};
export default ProductDetail;
