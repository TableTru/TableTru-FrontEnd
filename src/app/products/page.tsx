import RestaurantCard from "@/components/cards/Restaurantcard"
import Appbar from "@/components/Appbar"
const FoodDetail = () => {
    return (
        <>
        <Appbar/>
        <section id="Projects"
                 className="w-fit flex mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
        </section>
        </>
    );
};

export default FoodDetail;