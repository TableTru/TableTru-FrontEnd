"use client";

import { useEffect, useState } from "react";
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
import { GetStoreImageByType, editStore, getStoreById } from '@/services/store.service'

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
        store_image_name: "https://images.unsplash.com/photo-1710780953043-4dc3f98d2d50?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        created_date: new Date(),
        updated_date: new Date(),
    },
    {
        menu_id: "2",
        store_image_name: "https://images.unsplash.com/photo-1711052692809-7f72a69f2791?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

    const [value, setValue] = useState("Review");
    const [comment, setComment] = useState<string>('');
    const [rating, setRating] = useState<number | null>(0);
    const [menuImage, setMenuImage] = useState<any>(menuTemp);
    const [isLogin, setIsLogin] = useState(false);
    const [userData, setUserData] = useState()

    const [reviewData, setReviewData] = useState([{
        rating_score: 3,
        rating_status: false,
        review_comment: "ทดสอบ",
        review_id: 1,
        store_id: 1,
        user_id: 38,
        username: "อังปอ",
        profile_image: "https://pbs.twimg.com/media/FXTTYWfVUAAjIph?format=png&name=medium"
    }])

    const [storeData, setStoreData] = useState({
        OpenTimes: openTime,
        category_id: 1,
        category_name: "temp",
        latitude: 0,
        location: "16/9 ถ. หอวัง แขวงจตุจักร เขตจตุจักร กรุงเทพมหานคร 10900 ประเทศไทย",
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

    const handleChange = (event: SyntheticEvent, newValue: string) => {
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
            rating_score: rating,
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
        fetchReview()
    }

    const fetchData = async () => {
        const data = await getStoreById(store_id);

        console.log(data);

        if (data) {
            setStoreData(data);
        }

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

        const userData = localStorage.getItem("userData")
        const userDataJson = JSON.parse(userData || "[]");
        if (userData) {
            console.log(userDataJson);
            setIsLogin(true)
            setUserData(userDataJson)
        } else {
            console.log("not login");
        }
    }

    const fetchTemp = async () => {
        const ImageArray = [];

        for (const imageObject of menuTemp) {
            ImageArray.push(imageObject);
        }
        setMenuImage(ImageArray);
        console.log(ImageArray);

    }

    const fetchReview = async () => {
        const reviewArray = [];
        const reviews = await GetAllReviewByStoreId(store_id);
        console.log(reviews);

        if (reviews) {
            for (const reviewObject of reviews) {
                reviewArray.push(reviewObject);
            }
            setReviewData(reviewArray);
            console.log(reviewArray);
        }
    }

    useEffect(() => {
        setMenuImage(menuTemp)
        fetchReview()
        fetchData()
        // fetchTemp()
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
                                                <Rating name="read-only" value={storeData.sum_rating} readOnly />
                                            </div>
                                        </div>

                                        <h3 className="text-5xl pl-4 py-2 text-center mg:pl-4">{storeData.sum_rating}</h3>
                                    </div>
                                    <Divider>การตอบกลับ</Divider>
                                    <div>
                                        <form onSubmit={handleSubmit}>
                                            <div className={"my-4 flex flex-warp "}>
                                                {isLogin ? (
                                                    <Avatar alt="Profile" src={`${userData.profile_image}`} />
                                                ) : (
                                                    <Avatar alt="Profile" src="https://firebasestorage.googleapis.com/v0/b/fir-upload-file-8e06e.appspot.com/o/image%2F9.png?alt=media&token=bce8dee8-fb5a-4764-aae2-be8fb794d216" />
                                                )}
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
                                            reviewData.map((item, index) => {
                                                return (
                                                    <>
                                                        <List key={index} sx={{ width: "100%", bgcolor: "background.paper" }}>
                                                            <ListItem alignItems="flex-start">
                                                                <ListItemAvatar>
                                                                    <Avatar alt="Remy Sharp" src={`${item?.profile_image}`} />
                                                                </ListItemAvatar>

                                                                <ListItemText
                                                                    primary={`${item?.username}`}
                                                                    secondary={
                                                                        <>
                                                                            <Rating name="read-only" value={item.rating_score} readOnly />
                                                                            <br />
                                                                            <Typography variant={"body2"}>
                                                                                {`${item?.review_comment}`}
                                                                            </Typography>
                                                                        </>}
                                                                    sx={{ flexWrap: 'nowrap' }}
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
                                                        {openTime.map((time) => {
                                                            const openTimes = time.open_status ? dayjs.utc(time.start_time).format("hh:mm") : "ร้านปิด";
                                                            const closeTimes = time.open_status ? dayjs.utc(time.end_time).format("HH:mm") : "ร้านปิด";
                                                            return (
                                                                <tr key={time.day} className="flex flex-col flex-no wrap  sm:table-row mb-2 sm:mb-0">
                                                                    <td className="border-grey-light border bg-gray-100  p-3">{time.day}</td>
                                                                    <td className="border-grey-light border  p-3">{openTimes}</td>
                                                                    <td className="border-grey-light border  p-3">{closeTimes}</td>
                                                                </tr>
                                                            );
                                                        })}
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
                                                <Image
                                                    key={index}
                                                    width={1028}
                                                    height={2000}
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    src={item.store_image_name}
                                                    alt={item.store_image_name}
                                                    className="border-radius-zero"
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
