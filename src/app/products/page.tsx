import RestaurantCard from "@/components/cards/Restaurantcard"
import Appbar from "@/components/Appbar"
const FoodDetail = () => {
    const list = [
        {
          title: "Orange",
          img: "/images/fruit-1.jpeg",
          price: "$5.50",
        },
        {
          title: "Tangerine",
          img: "/images/fruit-2.jpeg",
          price: "$3.00",
        },
        {
          title: "Raspberry",
          img: "/images/fruit-3.jpeg",
          price: "$10.00",
        },
      ];
    return (
        <>
        <Appbar/>
        <section   
        className="w-fit flex mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
        </section>
        </>
    );
};

export default FoodDetail;