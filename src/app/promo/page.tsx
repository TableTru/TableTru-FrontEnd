"use client";
import BottomNavigationbar from "@/components/Bottombar";
import Appbar from "@/components/HeaderAppBar";
import ListCode from "@/components/promo/Code";
import CodeTest from "@/components/promo/CodeTest";
import Box from "@mui/joy/Box";
import BackgroundCard from "@/components/BackgroundImage";
import {useEffect} from "react";

type Item = {
  id: number; name: string; set: boolean;
};

const PromotionCode = [
  {
    promotion_id: 1,
    promotion_name: "ส่วนลด 10%",
    promotion_description:"รับส่วนลด 10% ทันที! ลดราคาได้เลยทุกรายการที่เลือก",
    store_id: 1,
    expiration_date: "30/11/2024"
  },

  {
    promotion_id: 2,
    promotion_name: "ส่วนลด 20%",
    promotion_description:"ลดราคา 20% ทันที! โปรโมทส่วนลดพิเศษที่ไม่ควรพลาด!",
    store_id: 1,
    expiration_date: "31/12/2024"

  },
]


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
      {/*<div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">*/}
      {/*  {*/}
      {/*    PromotionCode.map((promotion, index)=>{*/}
      {/*      return(*/}
      {/*        <ListCode key={index} promotion={promotion}/>*/}
      {/*      );*/}
      {/*    })*/}
      {/*  }*/}
      {/*</div>*/}
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        <CodeTest/>
      </div>
    </>
  );
}
export default PromoCode;
