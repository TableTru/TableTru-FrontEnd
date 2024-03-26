'use client';
import { useState, useEffect } from "react";
import NextImage from "next/image";
import { Image } from "@nextui-org/react";
import { Galleria, GalleriaResponsiveOptions } from 'primereact/galleria';
import { PhotoService } from '@/data/photo';
import "./style.css"
import "./flag.css"
import { GetStoreImage } from '@/services/store.service'

const responsiveOptions: GalleriaResponsiveOptions[] = [
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
];

const menuImageTemp = [
    {
        created_at: "2024-03-26T06:31:25.986Z",
        store_id: 3,
        store_image_id: 3,
        store_image_name: "https://firebasestorage.googleapis.com/v0/b/fir-upload-file-8e06e.appspot.com/o/image%2F0eymTDE.png?alt=media&token=41bb21d3-d2f9-4baf-b960-f4fef7b39793",
        store_image_type: "ภาพเมนู",
        updated_at: "2024-03-26T06:31:25.986Z"
    },
    {
        created_at: "2024-03-26T06:31:25.964Z",
        store_id: 3,
        store_image_id: 2,
        store_image_name: "https://firebasestorage.googleapis.com/v0/b/fir-upload-file-8e06e.appspot.com/o/image%2F031.png?alt=media&token=13f71b49-3ebb-4fae-b5fb-407a31b67087",
        store_image_type: "ภาพเมนู",
        updated_at: "2024-03-26T06:31:25.964Z"
    },
    {
        created_at: "2024-03-26T06:31:25.949Z",
        store_id: 3,
        store_image_id: 1,
        store_image_name: "https://firebasestorage.googleapis.com/v0/b/fir-upload-file-8e06e.appspot.com/o/image%2F879627.png?alt=media&token=0b093e57-c822-4eff-a9aa-eb45dcf62a99",
        store_image_type: "ภาพเมนู",
        updated_at: "2024-03-26T06:31:25.949Z"
    }
]

export default function Galleries({ store_id }: { store_id: number }) {
    const [images, setImages] = useState<any>();

    const fetchData = async () => {
        const data = await GetStoreImage(store_id);
        console.log(data);

        if (data) {
            setImages(data);
        }
    };


    useEffect(() => {
        // fetchData()
        setImages(menuImageTemp)
    }, []);

    const itemTemplate = (item: any) => {
        return <img src={item.store_image_name} alt={item.store_image_id} style={{ width: '100%', height: '300px', display: 'block' }} />;
    };


    const thumbnailTemplate = (item: any) => {
        return <img src={item.store_image_name} alt={item.store_image_id} style={{ width: '100%', height: '100px', display: 'block' }}/>
    }

    return (
        <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
            <Galleria className="card" value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
    );
};
