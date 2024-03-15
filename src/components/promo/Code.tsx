"use client";
import React, {useEffect, useState,  useRef} from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import { Promotion } from "@/interfaces/Promo";
import { PromotionCode } from "@/interfaces/PromoPivot"
import ProfileCard from "@/components/profile/ProfileCard";
import Botton from "@/components/Botton";
import StoreHome from "@/components/store/StoreHome";
import {Store} from "@/interfaces/StoreInterface";


export default function PromoCode({promotion, PromoUser} : {promotion:Promotion, Promo: PromotionCode}) {
    
    const [isFollowed, setIsFollowed] = React.useState(false);
    const [isLogin, setIsLogin] = useState(false);

    //เก็บข้อมูลโปรโมชั่น โค้ตที่จะเอาไปแสดง
    const [promocode, setPromocode] = useState <PromotionCode[]> ( );

    const checkLoginStatus = () => {
        const userData = localStorage.getItem("userData")
        const userDataJson = JSON.parse(userData || "[]");
        if (userData) {
            console.log(userDataJson);
            setIsLogin(true)
        } else {
            console.log("not login");
            window.location.replace('/login')
        }
    }

    // useEffect((() => {
    //     checkLoginStatus()
    // }), [])


    function collectCode(){
        //use backends collect id coding


    }

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <Card className="max-w-[340px]">
                    <CardHeader className="justify-between">
                        <div className="flex gap-5">
                            <Avatar isBordered radius="full" size="md" src={promotion?.store_id} />
                            <div className="flex flex-col gap-1 items-start justify-center">
                                <h4 className="text-small font-semibold leading-none text-default-600">{promotion?.promotion_name}</h4>
                            </div>
                        </div>
                    </CardHeader>
                    <CardBody className="px-3 py-0 text-small text-default-400">
                        <p>
                            {promotion?.promotion_description}
                        </p>

                        <p className="mt-8">
                            วันหมดอายุ:{promotion?.expiration_date}
                        </p>
                    </CardBody>
                    <CardFooter className="gap-3">

                            <Button
                                className={isFollowed ? "bg-transparent cursor-not-allowed text-foreground border-default-200" : "bg-red-700 text-white"}
                                radius="full"
                                size="sm"
                                variant={isFollowed ? "bordered" : "solid"}
                                onPress={() => setIsFollowed(!isFollowed)}

                            >
                                {isFollowed ? "เก็บโค้ต" : "เก็บโค้ต"}

                            </Button>
                            <p>Please Login</p>

                    </CardFooter>
                </Card>
            </div>
        </>
    );
}
