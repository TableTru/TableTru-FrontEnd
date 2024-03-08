import BottomNavigationbar from "@/components/Bottombar";
import Appbar from "@/components/HeaderAppBar";
import ListCode from "@/components/promo/Code";
import Box from "@mui/joy/Box";
import BackgroundCard from "@/components/BackgroundImage";

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


  return (
    <>
      <BackgroundCard />
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {
          PromotionCode.map((promotion, index)=>{
            return(
              <ListCode key={index} promotion={promotion}/>
            );
          })
        }
        
      </div>
    </>
  );
}
export default PromoCode;
