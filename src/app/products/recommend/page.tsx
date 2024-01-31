import RestaurantCard from "@/components/cards/Restaurantcard"
import Appbar from "@/components/Appbar"
export default function RecommentPage() {
    return (
        <>
            <Appbar/>
            <section
                className="w-fit flex mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                <h3>Recommend Page</h3>
                <RestaurantCard/>
            </section>

        </>
    );
}

