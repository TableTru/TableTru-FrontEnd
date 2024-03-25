"use client";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NextImage from "next/image";
import { getLocation } from '@/services/location.service'


const LocationCard = ({ location }: { location: any }) => {
    const router = useRouter()
    return (
        <>
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Card className="col-span-2 w-[200px] h-[200px] lg:col-span-4 lg:h-[300px] lg:w-[250px] "
                    isPressable isHoverable
                    onPress={() => router.push(`/search?location=${location.location_path}&filter=2`)}
                    key={location.location_id}>
                    <CardHeader className="absolute z-10 bottom-2 min-h-full flex-col !items-center bg-black/30" >
                        <div className="flex flex-grow gap-2 items-center">
                            <h2 className="text-white font-medium text-2xl">{location.location_name}</h2>
                        </div>
                    </CardHeader>
                    <CardBody className="overflow-visible p-0">
                        <Image
                            isBlurred
                            removeWrapper
                            alt={location.location_name}
                            className="z-0 w-full h-full object-cover"
                            src={location.location_image_name}
                        />
                    </CardBody>
                </Card>
            </div>
        </>
    );
};
export default LocationCard;