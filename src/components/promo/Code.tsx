"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import { Promotion } from "@/interfaces/Promo";


export default function PromoCode({promotion} : {promotion:Promotion}) {
    const [isFollowed, setIsFollowed] = React.useState(false);
    
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
                    </CardFooter>
                </Card>
            </div>
        </>
    );
}
