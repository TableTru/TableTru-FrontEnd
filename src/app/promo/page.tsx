"use client";
import BottomNavigationbar from "@/components/Bottombar";
import Appbar from "@/components/HeaderAppBar";
import ListCode from "@/components/promo/Code";
import CodeTest from "@/components/promo/CodeTest";
import Box from "@mui/joy/Box";
import BackgroundCard from "@/components/BackgroundImage";
import {useEffect} from "react";

function PromoCode() {

  const fetchData = async () => {

    // const PromoArray = [];
    // const data = await getPromo();
    // console.log(data);
    //
    // if (data) {
    //   const promo = data;
    //   for (const promoObj of promo) {
    //     PromoArray.push(promoObj);
    //   }
    // }
    // setPromoData(PromoArray);
    // console.log(PromoArray);

  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <BackgroundCard />
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        <CodeTest/>
      </div>
    </>
  );
}
export default PromoCode;
