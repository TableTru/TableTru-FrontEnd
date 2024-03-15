import { Item } from "@/interfaces/Promo";

export const initialItems: Item[] = [
    {
      id: 1,
      name: "ส่วนลด 10 %",
      set: true,
      limit: 1,
      created_at:new Date(),
      store_id: 1,
      expiration_date: new Date("2024-12-31"),
    },
    {
      id: 2,
      name: "ส่วนลด 20%",
      set: true,
      limit: 30,
      store_id: 1,
      created_at:new Date(),
      expiration_date: new Date("2024-12-31"),
    },
    {
      id: 3,
      name: "ส่วนลด 30%",
      set: true,
      limit:1,
      store_id: 2,
      created_at:new Date(),
      expiration_date: new Date("2024-12-31"),
    },
    {
      id: 4,
      name: "ส่วนลด 10% แถม 20%",
      set: true,
      limit:20,
      store_id: 2,
      created_at: new Date(),
      expiration_date: new Date("2024-12-31"),
    },
  ];

