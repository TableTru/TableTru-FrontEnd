import Image from "next/image";
import Appbar from "@/components/Appbar";
import BottomNavigationbar from "@/components/Bottombar";
import Botton from "@/components/Botton";
import RestaurantCard from "@/components/cards/Restaurantcard";
import CardHomePage from "@/components/CardSelected" 

export default function Home() {
  return (
    <>
      <Appbar />
      <div className="min-h-screen mt-8 space-x-4 ">
        <div className="flex item-center justify-center space-x-4">
          <CardHomePage />
        </div>
      </div>
      <BottomNavigationbar />
    </>
  );
}
