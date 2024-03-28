"use client";

import { SyntheticEvent, useEffect, useState } from "react";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
} from "@mui/material";
import { DemoItem, DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";


import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
// with date-fns v3.x



import { MultiSectionDigitalClock } from '@mui/x-date-pickers/MultiSectionDigitalClock';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker, DatePicker } from "@mui/x-date-pickers";
import { TimePicker, TimePickerProps } from "@mui/x-date-pickers/TimePicker";
import dayjs, { Dayjs } from "dayjs";
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
// import AdapterDateFns from '@mui/x-date-pickers/AdapterDateFns';
import { Item } from "@/interfaces/Promo";
import { initialItems } from "@/data/promotion";
import Swal from "sweetalert2";
import Map from "@/components/Map";
import { createTableBooking } from '@/services/tableBooking.service'
import { GetAllPromotionByStoreId } from '@/services/promotion.service'
import timezone from "dayjs/plugin/timezone";
import customParseFormat from "dayjs/plugin/customParseFormat";
import utc from 'dayjs/plugin/utc'

type TimeTemp = {
  day: string;
  start_time: string;
  end_time: string;
};

dayjs.extend(utc)
dayjs.extend(timezone);
const localTimeZone = 'Asia/Bangkok';

export default function UserBooking({ seats, openTime, store_id, address }: { seats: number; openTime: Array<TimeTemp>; store_id: number, address: string }) {
  const now = dayjs();
  const [date, setDate] = useState<Dayjs | null>();
  const [time, setTime] = useState<Dayjs | null>();
  const [seat, setSeat] = useState();
  const [selectPromotion, setSelectPromotion] = useState();
  const [promotionData, setPromotionData] = useState<Item[]>(initialItems);
  const seatNumbers = Array.from({ length: seats }, (_, index) => index + 1);
  const userData = localStorage.getItem("userData")
  const userDataJson = JSON.parse(userData || "[]");

  const [dateString, setDateString] = useState('')
  const [combineTime, setCombineTime] = useState<Dayjs | null>()

  const fetchData = async () => {
    const promotionArray = [];
    const promotions = await GetAllPromotionByStoreId(store_id);
    console.log(promotions);
    const currentDate = new Date();

    if (promotions) {
      for (const promotionObject of promotions) {
        const expireDate = new Date(promotionObject.expiration_date)
        if (currentDate < expireDate) {
          console.log("expireDate ยังไม่เป็นเวลาที่ผ่านมา");
          promotionArray.push(promotionObject);
        } else {
          console.log("expireDate เป็นเวลาที่ผ่านมาแล้ว");
        }
        
      }
      setPromotionData(promotionArray);
      console.log(promotionArray);
    }
  }

  // const fetchDateTime = async () => {
  //   console.log(now.format('dddd'));
  //   setDate(now)

  //   const initDateData = now.format("YYYY-MM-DD")

  //   const openingHours = openTime.find(item => item.day === dayjs(now).format('dddd'));
  //   console.log(openingHours);
  //   if (openingHours) {
  //     const startTime = openingHours.start_time
  //     console.log(startTime);
  //     console.log(dayjs(startTime).utcOffset(7).format("HH:mm"));

  //     const combineTime = `combineTime = ${initDateData} ${dayjs(startTime).utcOffset(7).format("HH:mm")}`
  //     console.log(combineTime);
  //     const combineTimeDayjs = dayjs(combineTime)
  //     setCombineTime(combineTimeDayjs)
  //     setTime(combineTimeDayjs)
  //   }


  // }


  const handleChangeTime = (timeValue: dayjs.Dayjs) => {
    setDate(timeValue);
    console.log(timeValue.format("YYYY-MM-DD HH:mm"));
    setDateString(timeValue.format("YYYY-MM-DD"))
    setCombineTime(timeValue)
    // setTime(timeValue)
  };

  const handleOnlyTime = (time: any) => {
    if (dateString != '') {
      const combineTime = `combineTime = ${dateString} ${time.format("HH:mm")}`
      console.log(combineTime);
      const combineTimeDayjs = dayjs(combineTime)
      setCombineTime(combineTimeDayjs)
      setTime(combineTimeDayjs)
      console.log(combineTimeDayjs.format("YYYY-MM-DD HH:mm"));
    }
    else {
      setCombineTime(time)
      setTime(time)
      setDate(time)
      console.log(time.format("YYYY-MM-DD HH:mm"));
    }



  };

  const handleChangeSeat = (event: any) => {
    // setSeat(prevState => ({
    //   ...prevState,
    //   [event.target.name]:[event.target.value]
    // }));
    setSeat(event.target.value);
    console.log(event.target.value);
  };

  // const handelDisableTime = (timeValue: dayjs.Dayjs) => {
  //   let timeData = timeValue

  //   for (let i = 0; i < 23; i++) {
  //     timeData = timeData.add(1, 'hour');
  //     const openingHours = openTime.find(item => item.day === dayjs(timeData).format('dddd'));
  //     if (openingHours) {
  //       const startTime = dayjs.utc(openingHours.start_time).hour();
  //       const endTime = dayjs.utc(openingHours.end_time).hour();

  //       if (!openingHours) {
  //         return false;
  //       }
  //       else {
  //         return timeData.hour() < startTime || timeData.hour() >= endTime;
  //       }
  //     }
  //   }
  // }


  const handleChangePromotion = (event: any) => {
    setSelectPromotion(event.target.value)
    console.log(event.target.value);
  }


  console.log(openTime)

  // const startTime = openTime.map((item) => dayjs.utc(item.start_time).hour())
  // const endTime = openTime.map((item) => dayjs.utc(item.end_time).hour())

  // console.log(startTime);
  // console.log(endTime);


  const handleButtonConfirm = async () => {
    if (date != null && time != null && seat != null) {
      Swal.fire({
        title: "แน่ใจหรือว่าจะยืนยัน",
        text: "โปรดตรวจสอบรายละเอียดการจอง",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "ยืนยัน",
        confirmButtonColor: "#0E9F6E",
        cancelButtonText: "ย้อนกลับ",
        reverseButtons: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "ยืนยันสำเร็จ",
            text: "",
            icon: "success",
            confirmButtonText: "ตกลง",
            confirmButtonColor: "#0E9F6E",
          });
          if (!selectPromotion) {

            const defaultPromotion = 1
            const submitObject = {
              store_id: store_id,
              user_id: userDataJson.user_id,
              table_booking_count: seat,
              table_booking_status: "ยังไม่ถึงกำหนด",
              table_booking_time: `${dayjs(combineTime).format("YYYY-MM-DDTHH:mm:ss") + "Z"}`,
              promotion_id: defaultPromotion
            };

            console.log("active");
            console.log(submitObject);
            await createTableBooking(submitObject);
          }
          else {
            const submitObject = {
              store_id: store_id,
              user_id: userDataJson.user_id,
              table_booking_count: seat,
              table_booking_status: "ยังไม่ถึงกำหนด",
              table_booking_time: `${dayjs(combineTime).format("YYYY-MM-DDTHH:mm:ss") + "Z"}`,
              promotion_id: selectPromotion
            };
            console.log("active");
          console.log(submitObject);
          await createTableBooking(submitObject);
          }
        }
      });
    }
    else {
      Swal.fire({
        title: "โปรดตรวจสอบรายละเอียดการจอง",
        text: "โปรดตรวจสอบรายละเอียดการจอง",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "ยืนยัน",
        confirmButtonColor: "#0E9F6E",
        cancelButtonText: "ย้อนกลับ",
        reverseButtons: true,
        showConfirmButton: false
      })
    }

  };

  const shouldDisableTime: TimePickerProps<Dayjs>['shouldDisableTime'] = (
    value,
    view,
  ) => {
    console.log(value);


    // Find the opening hours for the current day
    const openingHours = openTime.find(item => item.day === dayjs(date).format('dddd'));
    console.log(openingHours);


    // If no opening hours are defined for the current day, enable all times
    if (!openingHours) {
      return false;
    }
    // Get the start and end times for the current day
    const startTime = dayjs.utc(openingHours.start_time).hour();
    const endTime = dayjs.utc(openingHours.end_time).hour();

    console.log(startTime);
    console.log(endTime);
    console.log(value.hour());
    console.log(value.hour() < startTime || value.hour() >= endTime)

    // Check if the selected hour falls outside of opening hours
    return value.hour() < startTime || value.hour() >= endTime;
  }

  useEffect(() => {
    // fetchDateTime()
    console.log(date);
    fetchData()

    if (date) {
      shouldDisableTime
    }

  }, []);

  return (
    <>
      <div className="mb-6 ">
        <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
          รายละเอียด:
        </h2>
        <div className="bg-gray-100 dark:bg-gray-700 rounded-xl ">
          <div className="p-2 lg:p-5">
            <div className="flex flex-col justify-center gap-x-10 gap-y-4">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker, TimePicker, MultiSectionDigitalClock"]}>


                  <DatePicker
                    label="วันที่"
                    disablePast
                    format="YYYY/MM/DD"
                    minDate={now}
                    value={date}
                    onChange={(newValue) => handleChangeTime(newValue)}
                  />


                  <TimePicker
                    label="เวลา"
                    value={time}
                    shouldDisableTime={shouldDisableTime}

                    timeSteps={{ minutes: 30 }}
                    onChange={(newValue) => handleOnlyTime(newValue)}
                  />
                </DemoContainer>
              </LocalizationProvider>

              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    จำนวนที่นั่ง
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={seat}
                    label="จำนวนที่นั่ง"
                    onChange={handleChangeSeat}
                  >
                    {seatNumbers.map((item, index) => {
                      return (
                        <MenuItem key={index} value={item}>
                          {item}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-xl">
          <div className="p-3 lg:p-5 ">
            {/* Map */}
            <Map address={address} />
            <div className="p-2 rounded-xl lg:p-6 dark:bg-gray-800 bg-gray-50">
              {address}
            </div>
          </div>
        </div>
      </div>

      <div className={"mb-6"}>
        <Box sx={{ minWidth: 120 }}>
          <p className={"mb-2"}>โปรโมชั่น</p>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              เลือกโค้ดส่วนลด
            </InputLabel>
            <Select
              key={selectPromotion}
              labelId="demo-simple-select-label"
              value={selectPromotion}
              id="demo-simple-select"
              label="เลิอกโค้ตส่วนลด"
              onChange={handleChangePromotion}
            >
              {promotionData.map((item, index) => (
                <MenuItem key={index} value={item.promotion_id}>
                  {item.promotion_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="flex flex-cols gap-4 mb-6">
        <button
          className="w-full px-4 py-3 text-center text-gray-100 bg-red-600
            border border-transparent dark:border-gray-700 hover:border-red-500
            hover:text-red-700 hover:bg-red-100 dark:text-gray-400 dark:bg-gray-700
            dark:hover:bg-gray-900 rounded-xl"
          onClick={handleButtonConfirm}
        >
          ยืนยันการจอง
        </button>
      </div>
    </>
  );
}
