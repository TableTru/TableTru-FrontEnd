import React from "react";
import CodeTest from "@/components/promo/CodeTest";
import Appbar from "@/components/HeaderAppBar"
import AddIcon from '@mui/icons-material/Add';
import { Button } from "@nextui-org/react";
import Link from "next/link";


export default function PromotionStore() {
    return (
        <>

            <Appbar />
            <div className="min-h-screen w-fit mx-auto  mt-24 mb-5">
                <div className="flex space-x-8 justify-between pt-10">
                    <h2 className="text-2xl ">โค้ดโปรโมชั่น</h2>
                    <Link href={"/store/promo/create"}>
                        <Button color="primary" className="bg-red-700" startContent={<AddIcon />}>
                            เพิ่มโค้ตส่วนลด
                        </Button>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                    <CodeTest />
                </div>
            </div>
        </>
    );

};
