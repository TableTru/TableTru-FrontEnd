"use client";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NextImage from "next/image";
import { getCategory } from '../../../services/category.service'
import { CategoryInterface } from "@/interfaces/Category";



export default function CategoryCard({category}:{category:any}) {

    const router = useRouter();
    const categoryPathId = Number(category.category_id)+1

    return (
        <>
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Card
                  className="col-span-2 w-[200px] h-[200px] lg:col-span-4 lg:h-[300px] lg:w-[250px] "
                  isPressable
                  isHoverable
                  onPress={() => router.push(`/search?category=${categoryPathId}`)}
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