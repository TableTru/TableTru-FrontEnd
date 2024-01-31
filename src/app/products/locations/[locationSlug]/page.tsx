import RestaurantCard from "@/components/cards/Restaurantcard"
import Appbar from "@/components/Appbar"
export default function LocationRestaurantList({ params }: { params: { locationName: string} }) {
    return (
        <>
            <Appbar/>
            <section
                className="w-fit flex mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                <h3> Category Page </h3>
                <h2> {params.locationName} </h2>
                <RestaurantCard/>

            </section>

        </>
    );
}

