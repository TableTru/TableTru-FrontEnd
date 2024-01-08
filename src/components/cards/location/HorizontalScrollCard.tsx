import LocationCard from "@/components/cards/location/LocationCard";

const HorizontalScrollCards = () => {
    return (
        <>
                <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                    <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
                    <LocationCard />
                    </div>
                </div>
        </>
    );
};
export default HorizontalScrollCards;