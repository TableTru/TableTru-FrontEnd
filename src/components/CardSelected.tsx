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
import { Grid } from "@mui/material";


export default function Component() {
  const router = useRouter();



  return (
    <div className="">

      <Grid container spacing={2} >
        <Grid item xs={6} sx={{ mt: 2, mb: 2 }}>
          <Card
            className="col-span-4 h-[200px] lg:h-[300px]"
            isPressable isHoverable onPress={() => router.push(`/search/`)}
          >
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <h2 className="text-black font-medium text-xl lg:text-2xl">ร้านอาหารแนะนำ</h2>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="./images/food_review.png"
            />
          </Card>
        </Grid>
        <Grid item xs={6} sx={{ mt: 2, mb: 2 }}>
          <Card
            className="col-span-4 h-[200px] lg:h-[300px] "
            isPressable isHoverable onPress={() => router.push('/search')}
          >
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <h4 className="text-black font-medium text-xl lg:text-2xl">ร้านใกล้ฉัน</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="./images/map.png"
            />
          </Card>
        </Grid>
      </Grid>
      {/*list โค๊ตส่วนลด*/}

      {/* <Card
        className="col-span-4 h-[200px] lg:h-[300px] "
        isPressable
        onPress={() => router.push("/promo")}
      >
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h2 className="text-black font-medium text-xl lg:text-2xl">โค้ดส่วนลด</h2>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover "
          src="./images/Promo_code.png"
        />
      </Card> */}

      {/*ร้านอาหารแนะนำ*/}



      {/*ร้านใกล้ฉัน*/}


    </div>
  );
}
