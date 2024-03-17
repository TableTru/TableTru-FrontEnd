import Image from "next/image";
import Appbar from "@/components/HeaderAppBar";
import RestaurantCard from "@/components/cards/Restaurantcard";
import CardHomePage from "@/components/CardSelected";
import CategoriesScrollCards from "@/components/cards/active/HorizontalScrollCards";
import { Button } from "@nextui-org/react";
import Footer from "@/components/Footer"
import { useRouter } from "next/navigation";
import IconBottonSelect from "@/components/botton/MyLocation";
import BackgroundCard from "@/components/BackgroundImage";
import CategoryCard from "@/components/cards/active/CategoryCard";
import LocationCard from "@/components/cards/active/LocationCard"
import {storeTemp} from "@/data/store"
 

const CategorytempData = [
  {
    category_id: 1,
    category_name: "ไทย",
    category_image: "https://images.unsplash.com/photo-1554054204-b2f70b09d031?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    category_id: 2,
    category_name: "นานาชาติ",
    category_image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    category_id: 3,
    category_name: "ญิ่ปุ่น",
    category_image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    category_id: 4,
    category_name: "จีน",
    category_image: "https://images.unsplash.com/photo-1544601284-7fe39c93d4d4?q=80&w=1654&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    category_id: 5,
    category_name: "อิตาเลี่ยน",
    category_image: "https://images.unsplash.com/photo-1627042633145-b780d842ba45?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    category_id: 6,
    category_name: "ฟิวชั่น",
    category_image: "https://api2.krua.co/wp-content/uploads/2022/06/ArticlePic_1670x1095-02-8-734x1024.jpg"
  },

];


const LocationtempData = [
  {
    location_id: 1,
    location_name: "สีลม",
    location_image_name: "https://cdn-images.prod.thinkofliving.com/wp-content/uploads/1/2021/11/03150807/Silom_Skyline-1.jpg"
  },
  {
    location_id: 2,
    location_name: "สาทร",
    location_image_name: "https://app01.bhirajburi.co.th/uploads/community_1675147926372_%E0%B8%AA%E0%B8%B2%E0%B8%97%E0%B8%A3%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B8%A8%E0%B8%B9%E0%B8%99%E0%B8%A2%E0%B9%8C%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%98%E0%B8%B8%E0%B8%A3%E0%B8%81%E0%B8%B4%E0%B8%88%20(5).png"
  },
  {
    location_id: 3,
    location_name: "พร้อมพงษ์",
    location_image_name: "https://park.co.th/wp-content/uploads/2020/03/rsz_shutterstock_788969065-768x512.jpg"
  },
  {
    location_id: 4,
    location_name: "ราชเทวี",
    location_image_name: "https://origin.co.th/wp-content/uploads/2019/08/light-rails-459064_1920-696x464.jpg"
  },
  {
    location_id: 5,
    location_name: "ห้าแยกลาดพร้าว",
    location_image_name: "https://static.estopolis.com/article/591e58ce15f02071ef23a882_591e81b315f02071ef23a8c9.jpg"
  },
  {
    location_id: 6,
    location_name: "อโศก",
    location_image_name: "https://cdn-cms.pgimgs.com/areainsider/2019/05/Asoke_09.jpg"
  },

];





export default function Home() {
  return (
    <>
      <BackgroundCard />
      <div className="min-h-screen mt-8 space-x-4">
        <div className={"flex item-center justify-center space-x-4"}>
          <CardHomePage />
        </div>
        <div className="flex flex-col m-auto p-auto">
          <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-2xl lg:text-4xl text-gray-800">
            หมวดหมู่
          </h1>
          <CategoriesScrollCards>
            {
              CategorytempData.map((category) => {
                return (
                  <>
                    <div className="inline-block px-3">
                      <CategoryCard category={category} />
                    </div>
                  </>
                )
              })
            }
          </CategoriesScrollCards>
        </div>
        <div className="flex flex-col m-auto p-auto">
          <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-2xl lg:text-4xl text-gray-800">
            ที่อยู่
          </h1>
          <CategoriesScrollCards>
            {
              LocationtempData.map((location) => {
                return (
                    <>
                      <div className="inline-block px-3">
                        <LocationCard location={location} />
                      </div>
                    </>
                )
              })
            }
          </CategoriesScrollCards>


        </div>

        <div className="flex flex-col  m-auto p-auto">
          <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-2xl lg:text-4xl text-gray-800">
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
                className={"bg-red-700 w-72 lg:w-96"}
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
