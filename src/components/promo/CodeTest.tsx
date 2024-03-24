'use client';

import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@nextui-org/react";

import { Button } from "flowbite-react";
import { useRouter, usePathname } from 'next/navigation'

import { withRouter } from 'next/router'

import { Promotion } from "@/interfaces/Promo"

type PromotionCode = {
  promotion_code: number;
  store_id: number;
  promotion_id: number;
};

const initialItems: Promotion[] = [
  {
    id: 1,
    name: "ส่วนลด 10 %",
    set: true,
    limit: 1,
    created_at: new Date(),
    store_id: 1,
    expiration_date: new Date("2024-12-31"),
  },
  {
    id: 2,
    name: "ส่วนลด 20%",
    set: true,
    limit: 30,
    store_id: 1,
    created_at: new Date(),
    expiration_date: new Date("2024-12-31"),
  },
  {
    id: 3,
    name: "ส่วนลด 30%",
    set: true,
    limit: 1,
    store_id: 2,
    created_at: new Date(),
    expiration_date: new Date("2024-12-31"),
  },
  {
    id: 4,
    name: "ส่วนลด 10% แถม 20%",
    set: true,
    limit: 20,
    store_id: 2,
    created_at: new Date(),
    expiration_date: new Date("2024-12-31"),
  },
];


export default function MyComponent() {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  const pathname = usePathname();


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
                {item.name}
              </span>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400">
          <p>{item.name}</p>
          <p className="mt-8 text-black">วันหมดอายุ: {`${item.expiration_date.toLocaleDateString('en-CA')}`}</p>
        </CardBody>
        <CardFooter className="gap-3">
          {pathname === '/store/promo' ? null :
            <>
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

              )} </>}
        </CardFooter>
      </Card>
    </div>
  ));
}
