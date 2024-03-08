import DatePick from "./selectBox/DatePick";
import TimePick from "./selectBox/TimePick";
import MenuList from './selectBox/MenuList';
import { DemoItem, DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker, TimePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import * as React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



export default function SelectDateBox({seats} : { seats : number }) {

  const now = dayjs()
  const [time, setTime] = React.useState(dayjs());

  const handleChangeTime = (time) => {
    setTime(time);
  };


  const [seat, setSeat] = React.useState("");

  const seatNumbers = [];
  // seatNumbers = Array.from({length: seats}, (_, i) => i + 1)

  console.log(seatNumbers)

  const handleChange = (event: SelectChangeEvent) => {
    setSeat(event.target.value as string);
  };
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
                <DemoContainer components={['DateTimePicker',]}>
                  <DateTimePicker
                      defaultValue={now}
                      className='w-full'
                      label='วันที่และเวลา'
                      disablePast
                      onChange={handleChangeTime}
                      minDateTime={now}
                      timeSteps={{ minutes: 30 }}
                      views={['year', 'month', 'day', 'hours', 'minutes']}
                  />
                </DemoContainer>
              </LocalizationProvider>

              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">จำนวนที่นั่ง</InputLabel>
                  <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={seat}
                      label="จำนวนที่นั่ง"
                      onChange={handleChange}
                  >
                    {
                      seatNumbers.map((num) => {
                        return(
                            <>
                                <MenuItem value={1}>{num}</MenuItem>
                            </>
                        );
                      })
                    }

                    {/*<MenuItem value={1}>1</MenuItem>*/}
                    {/*<MenuItem value={2}>2</MenuItem>*/}
                    {/*<MenuItem value={3}>3</MenuItem>*/}

                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
