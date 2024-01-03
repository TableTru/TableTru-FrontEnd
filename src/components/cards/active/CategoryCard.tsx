"use client";

import {Card, CardHeader, Image} from "@nextui-org/react";
import React from "react";
import {useRouter} from "next/navigation";


const CategoryCard = () => {
    const router = useRouter()
    return (
        <>
            <div className="inline-block px-3">
                <div
                    className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">

                    <Card className="col-span- sm:col-span-4 h-[300px]" isPressable onPress={() => router.push('/promo')}>
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <h2 className="text-black font-medium text-2xl">โค๊ตส่วนลด</h2>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="./images/Promo_code.png"
                        />
                    </Card>

                </div>
            </div>
        </>
    );
};
export default CategoryCard;