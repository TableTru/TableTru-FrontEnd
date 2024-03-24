"use client";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NextImage from "next/image";
import { getCategory } from '@/services/category.service'
import { CategoryInterface } from "@/interfaces/Category";

// const CategorytempData = [
//   {
//     category_id: 1,
//     category_name: "ไทย",
//     category_image: "https://images.unsplash.com/photo-1554054204-b2f70b09d031?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   },
//   {
//     category_id: 2,
//     category_name: "นานาชาติ",
//     category_image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   },
//   {
//     category_id: 3,
//     category_name: "ญิ่ปุ่น",
//     category_image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   },
//   {
//     category_id: 4,
//     category_name: "จีน",
//     category_image: "https://images.unsplash.com/photo-1544601284-7fe39c93d4d4?q=80&w=1654&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   },
//   {
//     category_id: 5,
//     category_name: "อิตาเลี่ยน",
//     category_image: "https://images.unsplash.com/photo-1627042633145-b780d842ba45?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   },
//   {
//     category_id: 6,
//     category_name: "ฟิวชั่น",
//     category_image: "https://api2.krua.co/wp-content/uploads/2022/06/ArticlePic_1670x1095-02-8-734x1024.jpg"
//   },

// ];

interface Category {
  category_id: number
  category_name: string
  category_image: string
  createAt: Date
  updateAt: Date
}


export default function CategoryCard() {

  const [categoryData, setCategoryData] = useState<Category[]>([]);

    const router = useRouter();

    const fetchData = async () => {
      const categoryArray = []
      const data = await getCategory()
      console.log(data);

      if (data) {
          const categories = data
          for (const categoryObj of categories) {
              categoryArray.push(categoryObj)
          }
      }
      setCategoryData(categoryArray)
      console.log(categoryArray);
  }

  useEffect(() => {
    fetchData()
}, [])


    return (
      <>
      {categoryData.map((item, index) => (
            <div className="inline-block px-3" key={index}>
              <div className="inline-block px-3" key={index}>
               <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Card className="col-span-2 w-[200px] h-[200px] lg:col-span-4 lg:h-[300px] lg:w-[250px] "
                    isPressable isHoverable
                    onPress={() => router.push(`/search/${item.category_name}`)}
                    key={item.category_id}>
                    <CardHeader className="absolute z-10 bottom-2 min-h-full flex-col !items-center bg-black/30" >
                        <div className="flex flex-grow gap-2 items-center">
                            <h2 className="text-white font-medium text-2xl">{item.category_name}</h2>
                        </div>
                    </CardHeader>
                    <CardBody className="overflow-visible p-0">
                        <Image
                            isBlurred
                            removeWrapper
                            alt={item.category_name}
                            className="z-0 w-full h-full object-cover"
                            src={item.category_image}
                        />
                    </CardBody>
                </Card>
            </div>
            </div>
            </div>
         ))}
      </>
          
    );
}