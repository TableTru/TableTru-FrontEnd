'use client';

import { useEffect, useState } from "react";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,

} from "@mui/material";
import { DemoItem, DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker, DatePicker } from "@mui/x-date-pickers";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs, { Dayjs } from "dayjs";
import { Item } from "@/interfaces/Promo"
import { initialItems } from "@/data/promotion"
import Swal from "sweetalert2";
import Map from "@/components/Map";

type TimeTemp = {

  day: string
  start_time: string
  end_time: string

}

var utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

export default function UserBooking({ seats, openTime }: { seats: number, openTime: Array<TimeTemp> }) {
  const now = dayjs();
  const [times, setTimes] = useState<Dayjs>();
  const [seat, setSeat] = useState();
  const [promotionData, setPromotionData] = useState<Item[]>(initialItems);
  const seatNumbers = Array.from({ length: seats }, (_, index) => index + 1)

  const handleChangeTime = (time: any) => {
    setTimes(time);
    console.log(time.format("YYYY-MM-DD HH:mm"));
  };



  const minTime = () => {
    openTime.map((time) => {
      dayjs(time.start_time);
    })
  };
  const maxTime = () => {
    openTime.map((time) => {
      dayjs(time.end_time);
      console.log(time.end_time)
    })
  };

  const handleChangeSeat = (event: any) => {
    // setSeat(prevState => ({
    //   ...prevState,
    //   [event.target.name]:[event.target.value]
    // }));
    setSeat(event.target.value);
    console.log(event.target.value);

  };

  const handleButtonConfirm = () => {
    Swal.fire({
      title: "แน่ใจหรือว่าจะยืนยัน",
      text: "โปรดตรวจสอบรายละเอียดการจอง",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ยืนยัน",
      confirmButtonColor: "#0E9F6E",
      cancelButtonText: "ย้อนกลับ",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "ยืนยันสำเร็จ",
          text: "",
          icon: "success",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#0E9F6E",
        });
        const submitObject = {
          table_booking: seat,
          booking_time: times.format('YYYY-MM-DDTHH:mm:ssZ')
        }
        console.log("active");
        console.log(submitObject);
        

      }

    })
  }

  useEffect(() => {
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
                <DemoContainer components={["DatePicker"]}>
                  <DateTimePicker
                    className="w-full"
                    label="วันที่และเวลา"
                    disablePast
                    value={times}
                    onChange={(newValue) => setTimes(newValue)}
                    minDateTime={now}
                    shouldDisableTime={(timeValue, clockType) =>// เช็คปี
                      clockType === 'hours' && (timeValue.hour() < 8 || timeValue.hour() > 21)  // เช็คชั่วโมงที่เป็น 12.00 เท่านั้น
                    }
                    timeSteps={{ minutes: 30 }}
                    views={["year", "month", "day", "hours", "minutes"]}
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
            <InputLabel id="demo-simple-select-label">เลือกโค้ดส่วนลด</InputLabel>
            <Select
              key={seat}
              labelId="demo-simple-select-label"
              value={seat}
              id="demo-simple-select"
              label="เลิอกโค้ตส่วนลด"
              onChange={handleChangeSeat}
            >
              {
                promotionData.map((item, index) => (
                  <MenuItem key={index} value={index}>{item.name}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="flex flex-cols gap-4 mb-6">
        <button className="w-full px-4 py-3 text-center text-gray-100 bg-red-600
            border border-transparent dark:border-gray-700 hover:border-red-500
            hover:text-red-700 hover:bg-red-100 dark:text-gray-400 dark:bg-gray-700
            dark:hover:bg-gray-900 rounded-xl" onClick={handleButtonConfirm}>
          ยืนยันการจอง
        </button>
      </div>
    </>
  );
};
