import DatePick from "./selectBox/DatePick";
import TimePick from "./selectBox/TimePick";
import MenuList from "./selectBox/MenuList";
import { DemoItem, DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker, DatePicker } from "@mui/x-date-pickers";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs, { Dayjs } from "dayjs";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type TimeTemp = {

  day: string
  start_time: string
  end_time: string

}

var utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

export default function SelectDateBox({ seats, openTime }: { seats: number, openTime: Array<TimeTemp> }) {

  const now = dayjs();

  const [times, setTimes] = React.useState<Dayjs | null>(null);

  const handleChangeTime = (time: any) => {
    setTimes(time);
    console.log(time.format("YYYY-MM-DD HH:mm"));
  };
  const [value, setValue] = React.useState(null);

  const seatNumbers = Array.from({ length: seats }, (_, index) => index + 1);
  // seatNumbers = Array.from({length: seats}, (_, i) => i + 1)
  const [seat, setSeat] = React.useState();

  console.log(seatNumbers);

  
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
  };

  React.useEffect(() => {
    console.log(setSeat);
  }, [setSeat]);

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
                      clockType === 'hours' && (timeValue.hour() < 8 || timeValue.hour() > 21 )  // เช็คชั่วโมงที่เป็น 12.00 เท่านั้น
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
                    {seatNumbers.map((num, index) => {
                      return (
                        <MenuItem key={index} value={index}>
                          {num}
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
    </>
  );
};
