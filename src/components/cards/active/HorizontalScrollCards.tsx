"use client";

import { ReactNode } from "react"
import { Carousel } from "flowbite-react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";




const HorizontalScrollCards = ({ children }: { children: ReactNode }) => {
  //

  const router = useRouter();

  return (
    <>
      {/* <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                    <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
                    <CategoryCard />
                    </div>
                </div> */}

      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div
          className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
        >
          {children}
        </div>
      </div>
    </>
  );
};
export default HorizontalScrollCards;
