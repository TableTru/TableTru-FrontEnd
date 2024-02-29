import Appbar from "@/components/HeaderAppBar";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import RestaurantCard from "@/components/cards/Restaurantcard";
import ToggleTest from '@/components/AppBarToggle'
import { storeTemp } from "@/data/store";

export default function SearchPage() {
    return (<>
    
        <div className="py-24 mx-8 md:mx-24 lg:mx-32">
                <form className="flex items-center justify-center ">
                    <SearchBar placeholder={"Search Keyword..."}/>
                    <FilterBar/>
                    {/* <ToggleTest/> */}
                </form>
            </div>


        <section
            className="w-fit flex mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            <RestaurantCard store={storeTemp}/>
        </section>
    </>);

};
