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
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs, { Dayjs } from "dayjs";
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
// import AdapterDateFns from '@mui/x-date-pickers/AdapterDateFns';
import { Item } from "@/interfaces/Promo";
import { initialItems } from "@/data/promotion";
import Swal from "sweetalert2";
import Map from "@/components/Map";
import { createTableBooking } from '@/services/tableBooking.service'
import { GetAllPromotionByStoreId } from '@/services/promotion.service'

type TimeTemp = {
  day: string;
  start_time: string;
  end_time: string;
};

var utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

export default function UserBooking({ seats, openTime, store_id }: { seats: number; openTime: Array<TimeTemp>; store_id: number }) {
  const now = dayjs();
  const [date, setDate] = useState<Dayjs | null>();
  const [tempTime, setTempTime] = useState();
  const [seat, setSeat] = useState();
  const [selectPromotion, setSelectPromotion] = useState();
  const [promotionData, setPromotionData] = useState<Item[]>(initialItems);
  const seatNumbers = Array.from({ length: seats }, (_, index) => index + 1);
  const userData = localStorage.getItem("userData")
  const userDataJson = JSON.parse(userData || "[]");

  const [dateString, setDateString] = useState('')
  const [timeString, setTimeString] = useState('')

  const fetchData = async () => {
    const promotionArray = [];
    const promotions = await GetAllPromotionByStoreId(store_id);
    console.log(promotions);

    if (promotions) {
      for (const promotionObject of promotions) {
        promotionArray.push(promotionObject);
      }
      setPromotionData(promotionArray);
      console.log(promotionArray);
    }
  }


  const handleChangeTime = (time: any) => {
    setDate(time);
    console.log(time.format("YYYY-MM-DD HH:mm"));
    setDateString(time.format("YYYY-MM-DD"))
  };

  const handleOnlyTime = (time: any) => {
    setTempTime(time)
    console.log(time.format("YYYY-MM-DD HH:mm"));
    setTimeString(time.format("HH:mm"))

    const combineTime = `combineTime = ${dateString} ${time.format("HH:mm")}`
    console.log(combineTime);

  };

  const handleChangeSeat = (event: any) => {
    // setSeat(prevState => ({
    //   ...prevState,
    //   [event.target.name]:[event.target.value]
    // }));
    setSeat(event.target.value);
    console.log(event.target.value);
  };


  const handleChangePromotion = (event: any) => {
    setSelectPromotion(event.target.value)
    console.log(event.target.value);
  }


  console.log(openTime)

  const startTime = openTime.map((item) => dayjs.utc(item.start_time).hour())
  const endTime = openTime.map((item) => dayjs.utc(item.end_time).hour())

  console.log(startTime);
  console.log(endTime);


  const handleButtonConfirm = async () => {
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
        const submitObject = {
          store_id: store_id,
          user_id: userDataJson.user_id,
          table_booking: seat,
          table_booking_status: "ยังไม่ถึงกำหนด",
          booking_time: dayjs(date).format("YYYY-MM-DDTHH:mm:ssZ"),
          promotion: selectPromotion
        };
        console.log("active");
        console.log(submitObject);
        await createTableBooking(submitObject);
      }
    });
  };

  useEffect(() => { }, []);

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
                    value={tempTime}
                    shouldDisableTime={(timeValue, clockType) => {

                      if (clockType === 'hours') {
                        // Get the day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
                        const currentDay = dayjs(timeValue).day();

                        // Find the opening hours for the current day
                        const openingHours = openTime.find(day => day.day === dayjs(timeValue).format('dddd'));

                        // If no opening hours are defined for the current day, enable all times
                        if (!openingHours) {
                          return false;
                        }
                        // Get the start and end times for the current day
                        const startTime = dayjs.utc(openingHours.start_time).hour();
                        const endTime = dayjs.utc(openingHours.end_time).hour();
                        // Check if the selected hour falls outside of opening hours
                        return timeValue.hour() < startTime || timeValue.hour() >= endTime;
                      }
                      return false; // Enable minutes and seconds for all hours
                    }}

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
            <Map address="1600 Amphitheatre Parkway, Mountain View, CA" />
            <div className="p-2 rounded-xl lg:p-6 dark:bg-gray-800 bg-gray-50">
              123/xyz Location
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
                <MenuItem key={index} value={index}>
                  {item.name}
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
