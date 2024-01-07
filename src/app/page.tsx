import Image from "next/image";
import Appbar from "@/components/Appbar";
import BottomNavigationbar from "@/components/Bottombar";
import RestaurantCard from "@/components/cards/Restaurantcard";
import CardHomePage from "@/components/CardHomePage";
import HorizontalScrollCards from "@/components/cards/HorizontalScrollCards";
import { Button, ButtonGroup } from "@nextui-org/react";
import ButtonAll from "@/components/botton/BottonAll";
import Footer from "@/components/Footer";
import Search from "@/components/Search";
export default function Home() {
    return (
        <>
            <Appbar />
            <div className="min-h-screen mt-8 space-x-4">
                <div className="flex my-24 item-center justify-center space-x-4">
                    <Search />
                </div>
                <div className={"flex item-center justify-center space-x-4"}>
                    <CardHomePage />
                </div>
                <div className="flex flex-col bg-white m-auto p-auto">
                    <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
                        หมวดหมู่
                    </h1>
                    <HorizontalScrollCards />
                </div>
                <div className="flex flex-col bg-white m-auto p-auto">
                    <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
                        ที่อยู่
                    </h1>
                    <HorizontalScrollCards />
                </div>
                <div className="flex flex-col bg-white m-auto p-auto">
                    <h1 className="flex py-4 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
                        ร้านอาหารทั้งหมด
                    </h1>
                    <section
                        id="Projects"
                        className="w-fit flex item-center justify-around center mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
                    >
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                        <RestaurantCard />
                    </section>
                </div>
                <div className="flex items-center justify-center py-20">
                    <ButtonAll />
                </div>
            </div>
            <Footer/>
        </>
    );
}
