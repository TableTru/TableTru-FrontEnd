
import NextImage from "next/image";
import { Image } from "@nextui-org/react";
export default function Galleries() {
return(
    <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">


    <div className="top-0 overflow-hidden ">
        <div className="relative mb-6 lg:mb-10 lg:h-96">
            <a className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 text-red-500 bi bi-chevron-left dark:text-red-200" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
                    </path>
                </svg>
            </a>
            <Image className="object-contain w-full lg:h-full" src="https://i.postimg.cc/0jwyVgqz/Microprocessor1-removebg-preview.png" alt="" />
            <a className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" classNameName="w-5 h-5 text-red-500 bi bi-chevron-right dark:text-red-200" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                    </path>
                </svg>
            </a>
        </div>
        <div className="flex mx-2 md:flex">
            <div className="w-1/2 p-2 sm:w-1/4">
                <a className="block border border-gray-200 hover:border-red-400 dark:border-gray-700 dark:hover:border-red-300" href="#">
                    <Image
                        className="object-contain w-full lg:h-28" src="https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png" alt="" />
                </a>
            </div>
            <div className="w-1/2 p-2 sm:w-1/4">
                <a className="block border border-gray-200 hover:border-red-400 dark:border-gray-700 dark:hover:border-red-300" href="#">
                    <Image
                        className="object-contain w-full lg:h-28" src="https://i.postimg.cc/8kJBrw03/download-removebg-preview.png" alt="" />
                </a>
            </div>
            <div className="w-1/2 p-2 sm:w-1/4">
                <a className="block border border-gray-200 hover:border-red-400 dark:border-gray-700 dark:hover:border-red-300" href="#">
                    <Image
                        className="object-contain w-full lg:h-28" src="https://i.postimg.cc/0jwyVgqz/Microprocessor1-removebg-preview.png" alt="" />
                </a>
            </div>
            <div className="w-1/2 p-2 sm:w-1/4">
                <a className="block border border-gray-200 hover:border-red-400 dark:border-gray-700 dark:hover:border-red-300" href="#">
                    <Image
                        className="object-contain w-full lg:h-28" src="https://i.postimg.cc/0N4Kk1PN/black-microprocessors-removebg-preview.png" alt="" />
                </a>
            </div>
        </div>
    </div> 
</div>
);    
};
