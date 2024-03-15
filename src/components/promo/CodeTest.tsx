import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@nextui-org/react";

import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";

import { initialItems } from "@/data/promotion"
import { Item } from "@/interfaces/Promo"
import { PromotionCodePivot } from "@/data/promotionPivot";

type PromotionCode = {
  promotion_code: number;
  store_id: number;
  promotion_id: number;
};



export default function MyComponent() {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

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

  const handleButtonClick = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, set: false } : item))
    );
  };
  return items.map((item) => (
    <div key={item.id} className="flex flex-col items-center justify-center">
      <Card className="max-w-[340px]">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar isBordered radius="full" size="md" />
            <div className="flex flex-col gap-1 items-start justify-center">
              <span
                className={
                  "text-small font-semibold leading-none text-default-600"
                }
              >
                {item.name}
              </span>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400">
          <p>{item.name}</p>
          <p className="mt-8">วันหมดอายุ: {`${item.expiration_date.toLocaleDateString('en-GB')}`}</p>
        </CardBody>
        <CardFooter className="gap-3">
          {isLogin ? (
            <Button
              color="failure"
              pill
              onClick={() => handleButtonClick(item.id)}
              disabled={!item.set}
            >
              เก็บโค้ด
            </Button>
          ) : (
            <Button
              color="failure"
              pill
              onClick={() => router.push("/login")}
              disabled={!item.set}
            >
              เข้าสู่ระบบ
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  ));
}
