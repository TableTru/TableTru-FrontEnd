import BottomNavigationbar from "@/components/Bottombar";
import Appbar from "@/components/HeaderAppBar";
import AllPromotionCard from "@/components/promo/AllPromotionCard";
import Box from "@mui/joy/Box";
import BackgroundCard from "@/components/BackgroundImage";
import { getAllPromotionCode } from "@/services/promotionCode.service";
import { Promotion } from "@/interfaces/Promo";
function PromoCode() {

  return (
    <>
      <BackgroundCard />
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        <AllPromotionCard />
      </div>
    </>
  );
}
export default PromoCode;
