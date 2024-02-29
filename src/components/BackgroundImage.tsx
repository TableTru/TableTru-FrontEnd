import { Store } from "@/interfaces/StoreInterface";
import Search from "./SearchBar";
import { storeTemp } from "@/data/store";

const productsTemp = [
    {
        store_id: 1,
        category_id: 1,
        location_id: 1,
        store_name: "ร้านค้าของฉัน",
        store_description: "hahahahahahahahahaha",
        table_booking: 8,
        sum_rating: 3.25,
        Latitude: "",
        longitude: "",
        OpenTimes: [
            {
                day: "วันจันทร์",
                open_time: "11:00",
                close_time: "21:00",
            },
            {
                day: "วันอังคาร",
                open_time: "12:00",
                close_time: "23:00",
            },
        ],
    },
    {
        store_id: 2,
        category_id: 2,
        location_id: 2,
        store_name: "ร้านค้า 2",
        store_description:
            "Lorem ipsum dolor sit amet, ctum id et est. Nam est lacus, tempus at libero eu, laoreet dignissim lorem.",
        table_booking: 8,
        sum_rating: 40,
        Latitude: "",
        longitude: "",
        OpenTimes: [
            {
                day: "วันจันทร์",
                open_time: "",
                close_time: "",
            },
            {
                day: "วันอังคาร",
                open_time: "",
                close_time: "",
            },
        ],
    },
];

export default function BackgroundCard (){
    return(
        <section className="relative bg-fixed bg-bottom bg-no-repeat bg-cover " style= {{backgroundImage:`url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}} >
                 <div className="w-full px-4 mx-auto bg-black sm:px-6 bg-opacity-50">
                     <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                         <div className="pb-12 text-center md:pb-16">
                             <h1 className="mb-4 text-5xl font-extrabold tracking-tighter text-white md:text-6xl leading-tighter"
                                 data-aos="zoom-y-out">Experience Exclusivity with  <span
                                 className="text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-red-700 ">Tabletru!</span>
                             </h1>
                             <div className="max-w-3xl mx-auto">
                                 <p className="mb-8 text-xl text-white" data-aos="zoom-y-out" data-aos-delay="150">Elevate your dining experience with Tabletru. Book now for unforgettable culinary adventures at top restaurants! </p>
                                 <div className="flex max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center gap-x-4"
                                      data-aos="zoom-y-out" data-aos-delay="300">
                                     <div>
                                     </div>
                                     <Search placeholder={"Search Keyword..."} store={ productsTemp }/>
                                 </div>
                             </div>
                         </div>
                     </div>

                 </div>

        </section>
    );

}