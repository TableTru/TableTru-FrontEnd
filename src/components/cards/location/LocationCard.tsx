"use client";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NextImage from "next/image";
import {getLocation} from '@/services/location.service'

interface Location {
    location_id: number
    location_name: string
    location_image_name: string
    createAt: Date
    updateAt: Date
}

const LocationCard = () => {
    const [locationData, setLocationData] = useState<Location[]>([]);

    const tempData = [
        {
            location_name: "สีลม",
            location_image_name:"https://cdn-images.prod.thinkofliving.com/wp-content/uploads/1/2021/11/03150807/Silom_Skyline-1.jpg"
        },
        {
            location_name: "สาทร",
            location_image_name:"https://app01.bhirajburi.co.th/uploads/community_1675147926372_%E0%B8%AA%E0%B8%B2%E0%B8%97%E0%B8%A3%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B8%A8%E0%B8%B9%E0%B8%99%E0%B8%A2%E0%B9%8C%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%98%E0%B8%B8%E0%B8%A3%E0%B8%81%E0%B8%B4%E0%B8%88%20(5).png"
        },
        {
            location_name: "พร้อมพงษ์",
            location_image_name:"https://park.co.th/wp-content/uploads/2020/03/rsz_shutterstock_788969065-768x512.jpg"
        },
        {
            location_name: "ราชเทวี",
            location_image_name:"https://origin.co.th/wp-content/uploads/2019/08/light-rails-459064_1920-696x464.jpg"
        },
        {
            location_name: "ห้าแยกลาดพร้าว",
            location_image_name:"https://static.estopolis.com/article/591e58ce15f02071ef23a882_591e81b315f02071ef23a8c9.jpg"
        },
        {
            location_name: "อโศก",
            location_image_name:"https://cdn-cms.pgimgs.com/areainsider/2019/05/Asoke_09.jpg"
        },

    ];

    const fetchData = async () => {
        const locationArray = []
        const data = await getLocation()
        console.log(data);

        if (data) {
            const locations = data
            for (const locationObj of locations) {
                locationArray.push(locationObj)
            }
        }
        setLocationData(locationArray)
        console.log(locationArray);
    }

    useEffect(() => {
        fetchData()
    }, [])

    const router = useRouter()
    return (
        <>
            {tempData.map((item, index) => (
            <div className="inline-block px-3" key={index}>
                <div
                    className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">

                        <Card className="col-span- sm:col-span-4 h-[300px] " isPressable isHoverable onPress={() => router.push('/search')}>
                            <CardHeader className="absolute z-10 bottom-2 min-h-full flex-col !items-center bg-black/30" >
                                <div className="flex flex-grow gap-2 items-center">
                                    <h2 className="text-white font-medium text-2xl">{item.location_name}</h2>
                                </div>
                            </CardHeader>
                            <CardBody className="overflow-visible p-0">
                            <Image
                                isBlurred
                                removeWrapper
                                alt={item.location_name}
                                className="z-0 w-full h-full object-cover"
                                src={item.location_image_name}
                            />
                            </CardBody>
                        </Card>

                </div>
            </div>
                                ))}
        </>
    );
};
export default LocationCard;