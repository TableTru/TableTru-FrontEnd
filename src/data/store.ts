import { Store } from "@/interfaces/StoreInterface"


export const storeTemp: Store [] = [
    {
        store_id: 1,
        category_id: 1,
        location_id: 1,
        store_name: "ร้านค้าของฉัน",
        store_description: "hahahahahahahahahaha",
        table_booking: 8,
        sum_rating: 3.25,
        Latitude: "",
        longitude: "",
        OpenTimes: [
            {
                day: "วันจันทร์",
                open_time: "11:00",
                close_time: "21:00",
            },
            {
                day: "วันอังคาร",
                open_time: "12:00",
                close_time: "23:00",
            },
        ],
    },
]

    // {
    //     store_id: 2,
    //     category_id: 2,
    //     location_id: 2,
    //     store_name: "ร้านค้า 2",
    //     store_description: 'Lorem ipsum dolor sit amet, ctum id et est. Nam est lacus, tempus at libero eu, laoreet dignissim lorem.',
    //     table_booking: 8,
    //     sum_rating: 40,
    //     Latitude: '',
    //     longitude: '',
    //     OpenTimes: [
    //         {
    //             day: 'วันจันทร์',
    //             open_time: '',
    //             close_time: ''
    //         },
    //         {
    //             day: 'วันอังคาร',
    //             open_time: '',
    //             close_time: ''
    //         }
    //     ]
    // }


 