"use client";
import Image from "next/image";
import Appbar from "@/components/Appbar";
import BottomNavigationbar from "@/components/Bottombar";
import RestaurantCard from "@/components/cards/Restaurantcard";
import CardHomePage from "@/components/CardSelected";
import CategoriesScrollCards from "@/components/cards/active/HorizontalScrollCards";
import LocationScrollCards from "@/components/cards/location/HorizontalScrollCard";
import { Button } from "@nextui-org/react";

import { useRouter } from "next/navigation";
import IconBottonSelect from "@/components/botton/MyLocation";
import BackgroundCard from "@/components/BackgroundImage";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Appbar />
      <BackgroundCard />
      <div className="min-h-screen mt-8 space-x-4">
        <div className={"flex item-center justify-center space-x-4"}>
          <CardHomePage />
        </div>
        <div className="flex flex-col bg-white m-auto p-auto">
          <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
            หมวดหมู่
          </h1>
          <CategoriesScrollCards />
        </div>
        <div className="flex bg-white m-auto p-auto">
                    <h1 className="flex py-5 lg:px-20 md:px-20 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
                        ที่อยู่
                    </h1>
                    {/* <Button
                      color="primary"
                      className={"bg-red-700"}
                      onPress={() => router.push("/products/locarions")}
                      >
                    ดูทั้งหมด
                    </Button> */}
            </div>
        <LocationScrollCards />
        
        <div className="flex flex-col bg-white m-auto p-auto">
          <h1 className="flex py-4 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
            ร้านอาหารทั้งหมด
          </h1>
          
          <section
            id="Projects"
            className="w-fit flex item-center justify-around center mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5"
          >
            <RestaurantCard />

          </section>
          <div className="flex item-center justify-center gap-4 py-8">
            <Button
              color="primary"
              className={"bg-red-700 w-96"}
              onPress={() => router.push("/products")}
            >
              ร้านทั้งหมด
            </Button>
          </div>
        </div>
      </div>
<footer className="bg-white rounded-lg shadow pb-16 dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</footer>
<BottomNavigationbar />


    </>
  );
}
