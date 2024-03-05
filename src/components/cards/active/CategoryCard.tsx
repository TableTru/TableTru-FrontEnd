"use client";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NextImage from "next/image";
import { getCategory } from '../../../services/category.service'


export default function CategoryCard<T>({category}:{category:T}) {

    const router = useRouter();

    return (
        <>
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Card
                  className="col-span-2 sm:col-span-4 h-[300px] "
                  isPressable
                  isHoverable
                  onPress={() => router.push(`/search/${category.category_name}`)}
                >
                  <CardHeader className="absolute z-10 bottom-2 min-h-full flex-col !items-center bg-black/30">
                    <div className="flex flex-grow gap-2 items-center">
                      <h2 className="text-white font-medium text-2xl">{category.category_name}</h2>
                    </div>
                  </CardHeader>
                  <CardBody className="overflow-visible p-0">
                    <Image
                      isBlurred
                      alt=""
                      className="z-0 w-full h-full object-cover"
                      src={category.category_image}
                    />
                  </CardBody>
                </Card>
              </div>
          
        </>
    );
}