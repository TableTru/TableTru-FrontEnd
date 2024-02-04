import RestaurantCard from "@/components/cards/Restaurantcard"
import Appbar from "@/components/Appbar"
import SearchFilterBar from "@/components/SearchHeader"
import SearchBar from "@/components/SearchBar"
import FilterBar from "@/components/FilterBar"

const FoodDetail = () => {

    return (
        <>
        <Appbar/>
        <div className="py-20 px-2">
        <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
          <div className="md:flex">
            <div className="w-full p-3">
              <div className="relative flex items-center ">
               <SearchBar/>
               <FilterBar/>
              </div>
            </div>
          </div>
        </div>
      </div>
        
        <section   
        className="w-fit flex mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            <RestaurantCard />
        </section>
        </>
    );
};

export default FoodDetail;