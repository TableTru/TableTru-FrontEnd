import BottomNavigationbar from "@/components/Bottombar";
import Appbar from "@/components/HeaderAppBar";
import ListCode from "@/components/promo/Code";
import Box from "@mui/joy/Box";
import BackgroundCard from "@/components/BackgroundImage";


function PromoCode() {
  return (
    <>
        <BackgroundCard/>
        <div className="min-h-screen w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          <ListCode />
          <ListCode />
          <ListCode />
          <ListCode />
          <ListCode />
          <ListCode />
          <ListCode />
        </div>
    </>
  );
}
export default PromoCode;
