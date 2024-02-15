import Appbar from "@/components/Appbar";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import RestaurantCard from "@/components/cards/Restaurantcard";
import {SearchIcon} from "@/components/SearchIcon";
import {Input} from "@nextui-org/react";

export default function SearchPage() {
    return (<>
        <Appbar/>
        <div className="py-20 mx-32">
                <form className="flex items-center justify-center ">
                    <SearchBar/>
                    <FilterBar/>
                </form>
            </div>

        <section
            className="w-fit flex mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            <RestaurantCard/>
        </section>
    </>);

};
