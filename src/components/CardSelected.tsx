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
    <div className="max-w-[900px] gap-2 grid grid-cols-12 px-8">
      {/*list โค๊ตส่วนลด*/}
      <Card
        className="col-span-10 sm:col-span-4 h-[300px]"
        isPressable
        onPress={() => router.push("/promo")}
      >
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

      {/*ร้านอาหารแนะนำ*/}

      <Card
        className="col-span-10 sm:col-span-4 h-[300px]"
        isPressable
        onPress={() => router.push("/products")}
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
        isPressable
        onPress={() => router.push("/products")}
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

      {/* <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
       <CardHeader className="absolute z-10 top-1 flex-col items-start"> */}
         {/* <h2 className="text-black font-medium text-2xl"> หมวดหมู่ </h2>*/}
      {/*  </CardHeader>*/}
      {/*  <Image*/}
      {/*    removeWrapper*/}
      {/*    alt="Card example background"*/}
      {/*    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"*/}
      {/*    src="./images/category.png"*/}
      {/*  />*/}
      {/*</Card> */}
      {/*<Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">*/}
      {/*  <CardHeader className="absolute z-10 top-1 flex-col items-start">*/}
      {/*    <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>*/}
      {/*    <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>*/}
      {/*  </CardHeader>*/}
      {/*  <Image*/}
      {/*    removeWrapper*/}
      {/*    alt="Relaxing app background"*/}
      {/*    className="z-0 w-full h-full object-cover"*/}
      {/*    src="./images/all.png"*/}
      {/*  />*/}
      {/*  <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">*/}
      {/*    <div className="flex flex-grow gap-2 items-center">*/}
      {/*      <Image*/}
      {/*        alt="Breathing app icon"*/}
      {/*        className="rounded-full w-10 h-11 bg-black"*/}
      {/*        src="/images/breathing-app-icon.jpeg"*/}
      {/*      />*/}
      {/*      <div className="flex flex-col">*/}
      {/*        <p className="text-tiny text-white/60">Breathing App</p>*/}
      {/*        <p className="text-tiny text-white/60">Get a good night sleep.</p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <Button radius="full" size="sm">Get App</Button>*/}
      {/*  </CardFooter>*/}
      {/* </Card> */}
    </div>
  );
}
