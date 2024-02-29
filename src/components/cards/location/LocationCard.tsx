"use client";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NextImage from "next/image";
import { getLocation } from '@/services/location.service'

type Location = {
    location_id: number
    location_name: string
    location_image_name: string
}


const LocationCard = ({ location }: { location: Location }) => {
    const router = useRouter()
    return (
        <>
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Card className="col-span- sm:col-span-4 h-[300px] "
                    isPressable isHoverable
                    onPress={() => router.push(`/search/${location.location_name}`)}
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