import {Dayjs} from "dayjs";

export interface StoreInterface<T> {
    [key: string]: T;
  }

  type TimeTemp = {

    day: string
    open_time: Dayjs
    close_time: Dayjs

}

export interface Store {
    store_id: number;
    category_id: number;
    location_id: number;
    store_name: string;
    store_description: string;
    table_booking: number;
    sum_rating: number;
    Latitude: string;
    longitude: string;
    OpenTimes: TimeTemp[];
}