import Appbar from "@/components/HeaderAppBar";
import SearchBar from "@/components/SearchBar";
import Filter from "@/components/Filter";
import RestaurantCard from "@/components/cards/Restaurantcard";
import ToggleTest from "@/components/AppBarToggle";
import { storeTemp } from "@/data/store";
import FilterBar from "@/components/FilterBar";

export default function SearchPage() {
    return (
        <>
            <div className="py-24 mx-8 md:mx-24 lg:mx-32">
                <form className="flex items-center justify-center ">
                    <SearchBar placeholder={"Search Keyword..."} />
                </form>
            </div>
            <section className="flex  ">
                <div className="flex flex-col mx-auto">
                    <Filter />
                </div>
                <section className="w-fit flex mr-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                    <RestaurantCard />
                </section>
            </section>
        </>
    );
}
