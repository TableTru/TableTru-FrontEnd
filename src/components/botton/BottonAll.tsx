"use client";
import {Button, ButtonGroup} from "@nextui-org/react";
import {useRouter} from "next/navigation"

export default function BottonAll() {
    const router = useRouter();
    return(
        <Button color="primary" className={"bg-red-700 w-96"} onPress={() => router.push('/products')}>
            ร้านอาหารทั้งหมด
        </Button>
    );

    
};
