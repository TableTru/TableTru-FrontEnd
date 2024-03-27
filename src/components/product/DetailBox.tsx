"use client";

import * as React from "react";
import {
    Box,
    Tab,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Typography,
    Button,
    Rating,
    Skeleton,

} from "@mui/material";

import ReplyIcon from "@mui/icons-material/Reply"

import {
    TabContext,
    TabList,
    TabPanel,
} from "@mui/lab";


import { StoreInterface, Store } from "@/interfaces/StoreInterface";
import { User } from "@/interfaces/User";
import { useParams } from "next/navigation";
import ReplyBox from "@/components/product/detailBox/comments/ReplyBox"
import { styled } from "@mui/material/styles";
import "./TableResponsive.css"
import dayjs, { Dayjs } from "dayjs";
import { Review } from "@/interfaces/Review";
import { createReview, GetAllReviewByStoreId, GetStoreRatingCount } from '@/services/review.service'
import { GetStoreImageByType, editStore } from '@/services/store.service'

const Root = styled("div")(({ theme }) => ({
    width: "100%", ...theme.typography.body2, color: theme.palette.text.secondary, "& > :not(style) ~ :not(style)": {
        marginTop: theme.spacing(2),
    },
}));

import customParseFormat from "dayjs/plugin/customParseFormat";
import { Image } from "@nextui-org/react";


dayjs.extend(customParseFormat);

var utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

type Menu = {
    menu_id: string,
    menu_image: string,
    created_date: Date,
    updated_date: Date
}


const userTemp: User =
{
    user_id: 1,
    username: "Aungpor",
    password: "por1234",
    user_status: "user",
    profile_image: "https://pbs.twimg.com/media/FXTTYWfVUAAjIph?format=png&name=medium",
    email: "aungpor.napat@gmail.com",
    phone_num: "0813111234",
    latitude: 0,
    longitude: 0,
    createAt: new Date(),
    updateAt: new Date(),

}

const menuTemp: Menu[] = [
    {
        menu_id: "1",
        menu_image: "https://images.unsplash.com/photo-1710780953043-4dc3f98d2d50?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        created_date: new Date(),
        updated_date: new Date(),
    },
    {
        menu_id: "2",
        menu_image: "https://images.unsplash.com/photo-1711052692809-7f72a69f2791?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        created_date: new Date(),
        updated_date: new Date()
    }

]


type TimeTemp = {

    day: string
    start_time: string
    end_time: string

}


export default function DetailBox({ description, openTime, review, store_id, sum_rating }: { description: string, openTime: Array<TimeTemp>, review: Array<Review>, store_id: number, sum_rating: number }) {

    const [value, setValue] = React.useState("Review");
    const [comment, setComment] = React.useState<string>('');
    const [rating, setRating] = React.useState<number | null>(0);
    const [menuImage, setMenuImage] = React.useState<any>(menuTemp);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const handleCommentChange = (event: any) => {
        setComment(event.target.value as string)
        console.log(event.target.value as string)
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const userData = localStorage.getItem("userData")
        const userDataJson = JSON.parse(userData || "[]");
        const formData = {
            review_comment: comment,
            rating: rating,
            user_id: userDataJson.user_id,
            store_id: store_id
        }
        console.log(formData)
        try {
            const createReviewRes = await createReview(formData)
            if (rating != 0) {
                const ratingCount = await GetStoreRatingCount(store_id, true)

                const updateStore = {
                    sum_rating: ((sum_rating * (ratingCount - 1)) + rating) / ratingCount
                }
                await editStore(store_id, updateStore)
            }
        } catch (error) {
            console.log("error");
        }
        setComment('');
        setRating(0);
    }

    const fetchData = async () => {
        console.log(store_id)
        const ImageArray = [];
        const Images = await GetStoreImageByType(store_id, "ภาพเมนู");
        console.log(Images);

        if (Images) {
            for (const imageObject of Images) {
                ImageArray.push(imageObject);
            }
            setMenuImage(ImageArray);
            console.log(ImageArray);
        }
    }

    React.useEffect(() => {
        setMenuImage(menuTemp)
        // fetchData()
    }, []);

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
                                        <form onSubmit={handleSubmit}>
                                            <div className={"my-4 flex flex-warp "}>
                                                <Avatar alt="Leonic" src="/static/images/avatar/1.jpg" />
                                                <div className={"mx-4 flex-cols"}>
                                                    <Typography component="h3">ให้คะแนนรีวิว</Typography>

                                                    <Rating
                                                        name="simple-controlled"
                                                        value={rating}
                                                        onChange={(event, newValue) => {
                                                            setRating(newValue);
                                                            console.log(newValue)
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                                                <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                                                    <label className="sr-only">Your comment</label>
                                                    <textarea id="comment"
                                                        value={comment}
                                                        onChange={handleCommentChange}
                                                        className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                                        placeholder="Write a comment..." required />
                                                </div>
                                                <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                                                    <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-800">
                                                        Post comment
                                                    </button>
                                                </div>
                                            </div>
                                        </form>

                                        {/* Review card Component */}
                                        {
                                            review.map((item, index) => {
                                                return (
                                                    <>
                                                        <List key={index} sx={{ width: "100%", bgcolor: "background.paper" }}>
                                                            <ListItem alignItems="flex-start">
                                                                <ListItemAvatar>
                                                                    <Avatar alt="Remy Sharp" src={`${item?.store_id}`} />
                                                                </ListItemAvatar>

                                                                <ListItemText
                                                                    primary={`${item?.username}`}
                                                                    secondary={
                                                                        <>
                                                                            <Rating name="read-only" value={item.rating_score} readOnly />
                                                                            {`${item?.review_comment}`}
                                                                        </>}
                                                                />
                                                            </ListItem>
                                                        </List>
                                                    </>
                                                );
                                            })
                                        }
                                    </div>
                                </TabPanel>

                                <TabPanel value="Detail">

                                    <Root>
                                        <Typography>
                                            {description}
                                        </Typography>
                                        <Divider> เวลาทำการ </Divider>
                                        {/*DateList*/}

                                        <div className="flex items-center justify-center">

                                            <div className="container  ">
                                                <table className="w-full flex flex-row overflow-x-scroll hide-scroll-bar flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                                                    <thead className="text-gray-800">
                                                        <tr className="bg-gray-200 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                                            <th className="p-3 text-left">วันที่</th>
                                                            <th className="p-3 text-left">เปิด</th>
                                                            <th className="p-3 text-left w-110px">ปิด</th>
                                                        </tr>
                                                        <tr className="bg-gray-200 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                                            <th className="p-3 text-left">วันที่</th>
                                                            <th className="p-3 text-left">เปิด</th>
                                                            <th className="p-3 text-left w-110px">ปิด</th>
                                                        </tr>
                                                        <tr className="bg-gray-200 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                                            <th className="p-3 text-left">วันที่</th>
                                                            <th className="p-3 text-left">เปิด</th>
                                                            <th className="p-3 text-left w-110px" >ปิด</th>
                                                        </tr>
                                                        <tr className="bg-gray-200 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                                            <th className="p-3 text-left">วันที่</th>
                                                            <th className="p-3 text-left">เปิด</th>
                                                            <th className="p-3 text-left w-110px">ปิด</th>
                                                        </tr>
                                                        <tr className="bg-gray-200 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                                            <th className="p-3 text-left">วันที่</th>
                                                            <th className="p-3 text-left">เปิด</th>
                                                            <th className="p-3 text-left w-110px">ปิด</th>
                                                        </tr>
                                                        <tr className="bg-gray-200 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                                            <th className="p-3 text-left">วันที่</th>
                                                            <th className="p-3 text-left">เปิด</th>
                                                            <th className="p-3 text-left w-110px">ปิด</th>
                                                        </tr>
                                                        <tr className="bg-gray-200 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                                            <th className="p-3 text-left">วันที่</th>
                                                            <th className="p-3 text-left">เปิด</th>
                                                            <th className="p-3 text-left w-110px">ปิด</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="flex-1 sm:flex-none">
                                                        {
                                                            openTime.map((time) => {

                                                                const openTimes = dayjs.utc(time.start_time).format("hh:mm")
                                                                const closeTimes = dayjs.utc(time.end_time).format("HH:mm")

                                                                return (
                                                                    <>
                                                                        <tr className="flex flex-col flex-no wrap  sm:table-row mb-2 sm:mb-0">
                                                                            <td className="ิborder-grey-light border bg-gray-100  p-3">{time.day}</td>
                                                                            <td className="border-grey-light border  p-3">{openTimes}</td>
                                                                            <td className="border-grey-light border  p-3">{closeTimes}</td>
                                                                        </tr>
                                                                    </>

                                                                );
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </Root>
                                </TabPanel>
                                <TabPanel value="Menu">
                                    <>
                                        <div className={"flex-cols items-center"}>
                                            {menuImage.map((item, index) => (
                                                <Image key={index} width={1028} height={2000}
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    src={item.store_image_name}
                                                    alt={item.store_image_name}
                                                />
                                            ))}
                                        </div>
                                    </>
                                    {/* <img src={menuTemp.menu_image} alt={menuTemp.menu_id}/> */}
                                    {/* <Skeleton variant="rectangular" width={210} height={118} /> */}
                                </TabPanel>
                            </TabContext>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
