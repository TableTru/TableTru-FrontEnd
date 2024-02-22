import Image from "next/image";
import Appbar from "@/components/HeaderAppBar";
import RestaurantCard from "@/components/cards/Restaurantcard";
import CardHomePage from "@/components/CardSelected";
import CategoriesScrollCards from "@/components/cards/active/HorizontalScrollCards";
import LocationScrollCards from "@/components/cards/location/HorizontalScrollCard";
import { Button } from "@nextui-org/react";
import Footer from "@/components/Footer"
import { useRouter } from "next/navigation";
import IconBottonSelect from "@/components/botton/MyLocation";
import BackgroundCard from "@/components/BackgroundImage";

export default function Home() {
  return (
    <>
      <BackgroundCard />
      <div className="min-h-screen mt-8 space-x-4">
        <div className={"flex item-center justify-center space-x-4"}>
          <CardHomePage />
        </div>
        <div className="flex flex-col m-auto p-auto">
          <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
            หมวดหมู่
          </h1>
          <CategoriesScrollCards />
        </div>
        <div className="flex flex-col m-auto p-auto">
          <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
            ที่อยู่
          </h1>
          <LocationScrollCards />
        </div>

        <div className="flex flex-col  m-auto p-auto">
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
            <a href="/products">
              <Button
                color="primary"
                className={"bg-red-700 w-96"}
              >
                ร้านทั้งหมด
              </Button>
            </a>
          </div>
        </div>
      </div>

    </>
  );
}
