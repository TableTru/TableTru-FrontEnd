"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@nextui-org/react";

import { Button } from "flowbite-react";
import { useRouter, usePathname, useParams } from "next/navigation";
import { GetAllPromotionByStoreId, getAllPromotion } from "@/services/promotion.service";
import { withRouter } from "next/router";
import { getStoreById, getStoreImageByType } from "@/services/store.service";
import { Promotion } from "@/interfaces/Promo";
type PromotionCode = {
  promotion_code: number;
  store_id: number;
  promotion_id: number;
};

const initialItems: Promotion[] = [
  {
    promotion_id: 1,
    promotion_name: "",
    created_at: new Date(),
    store_id: 1,
    expiration_date: new Date("2024-12-31"),
  },
  {
    promotion_id: 2,
    promotion_name: "",
    store_id: 2,
    created_at: new Date(),
    expiration_date: new Date("2024-12-31"),
  },
];

export default function MyComponent() {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [promoData, setPromoData] = useState<any>([]);

  const fetchData = async () => {
    const userData = localStorage.getItem("userData")
    const userDataJson = JSON.parse(userData || "[]");
    const storePromos = await GetAllPromotionByStoreId(userDataJson.store_id);
    const promoArray = [];

    if (storePromos) {
      for (const promoObj of storePromos) {
        if (promoObj.promotion_id != 1) {
          promoArray.push(promoObj);
        }
        
      }
    }
    setPromoData(promoArray)
    console.log(promoArray);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const checkLoginStatus = () => {
    const userData = localStorage.getItem("userData");
    const userDataJson = JSON.parse(userData || "[]");
    if (userData) {
      console.log(userDataJson);
      setIsLogin(true);
    } else {
      console.log("not login");
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  // const handleButtonClick = (id: number) => {
  //   pathname === "/store/promo"
  //     ? null
  //     : setPromoData((prevItems) =>
  //       prevItems.map((item) =>
  //         item.promotion_id === id ? { ...item, set: false } : item
  //       )
  //     );
  // }
  return (
    <>
      {promoData.map((item) => (
        <div
          key={item.promotion_id}
          className="flex flex-col items-center justify-center"
        >
          <Card className="w-[300px]">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar isBordered radius="full" size="md" />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <span
                    className={
                      "text-small font-semibold leading-none text-default-600"
                    }
                  >
                    {item.promotion_name}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardBody className="px-3 py-3 text-small text-default-400">
              <p>{item.promotion_description}</p>
              <p className="mt-8 text-black">
                วันหมดอายุ:{" "}
                {`${new Date(item.expiration_date).toLocaleDateString("en-CA")}`}
              </p>
            </CardBody>
            {/* <CardFooter className="gap-3">
              {pathname === "/store/promo" ? null : (
                <>
                  {isLogin ? (
                    <Button
                      color="failure"
                      pill
                      onClick={() => handleButtonClick(item.promotion_id)}
                    //ตัว set ปุ่ม
                    // disabled={!item.set} 
                    >
                      เก็บโค้ด
                    </Button>
                  ) : (
                    <Button
                      color="failure"
                      pill
                      onClick={() => router.push("/login")}
                    //ตัว set ปุ่ม
                    // disabled={!item.set}
                    >
                      เข้าสู่ระบบ
                    </Button>
                  )}{" "}
                </>
              )}
            </CardFooter> */}
          </Card>
        </div>
      ))}
    </>
  )
}
