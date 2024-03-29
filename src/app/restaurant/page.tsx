import RestaurantCard from "@/components/cards/Restaurantcard";

export default function RestaurantPage() {

    return (<>
        <div className="py-20 px-2">
            <h3 className={"text-3xl text-center"}>ร้านอาหารทั้งหมด</h3>
        </div>
        <section
            className="w-fit flex mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            <RestaurantCard/>
        </section>
    </>);
};

