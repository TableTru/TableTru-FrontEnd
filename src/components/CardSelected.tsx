"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { NextLinkComposed } from "@/components/Link";
import { useRouter } from "next/navigation";
import IconBottonSelect from "@/components/botton/MyLocation";





export default function Component() {
  const router = useRouter();

  return (
    <div className="max-w-[900px] gap-4 grid grid-cols-12 px-8">
      {/*list โค๊ตส่วนลด*/}
      <Card
        className="col-span-10 sm:col-span-4 h-[300px]"
        isPressable
        onPress={() => router.push("/promo")}
      >
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h2 className="text-black font-medium text-2xl">โค้ดส่วนลด</h2>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="./images/Promo_code.png"
        />
      </Card>

      {/*ร้านอาหารแนะนำ*/}

      <Card
        className="col-span-10 sm:col-span-4 h-[300px]"
        isPressable isHoverable onPress={() => router.push(`/search/`)}
      >
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h2 className="text-black font-medium text-2xl">ร้านอาหารแนะนำ</h2>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="./images/food_review.png"
        />
      </Card>

      {/*ร้านใกล้ฉัน*/}

      <Card
        className="col-span-10 sm:col-span-4 h-[300px]"
        isPressable isHoverable onPress={() => router.push('/search')}
      >
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h4 className="text-black font-medium text-2xl">ร้านใกล้ฉัน</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="./images/map.png"
        />
      </Card>
    </div>
  );
}
