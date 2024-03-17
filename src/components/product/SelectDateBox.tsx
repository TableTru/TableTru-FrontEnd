import DatePick from "./selectBox/DatePick";
import TimePick from "./selectBox/TimePick";
import MenuList from './selectBox/MenuList';
import { DemoItem, DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker, DatePicker } from '@mui/x-date-pickers';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs, { Dayjs } from 'dayjs';
import * as React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

type TimeTemp = {

  day: string
  open_time: Dayjs
  close_time: Dayjs

}

export default function SelectDateBox({seats,openTime} : { seats : number , openTime:Array<TimeTemp>} ) {

  const now = dayjs();

  const [time, setTime] = React.useState<Dayjs | null>(null);

  const handleChangeTime = (event:SelectChangeEvent) => {
    setTime(event.target.value as string);
  };

  const [value, setValue] = React.useState(null);


  const seatNumbers = Array.from({ length:seats },(_,index)=> index+1);
  // seatNumbers = Array.from({length: seats}, (_, i) => i + 1)
  const [seat, setSeat] = React.useState("");
  console.log(seatNumbers)

  const handleChangeSeat = (event:SelectChangeEvent) => {
    // setSeat(prevState => ({
    //   ...prevState,
    //   [event.target.name]:[event.target.value]
    // }));
    setSeat(event.target.value)
  };


  React.useEffect(() => {
    console.log(setSeat);
}, [setSeat])


  React.useEffect(() => {
    console.log(setTime);
  },[setTime])

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
                <DemoContainer components={['DatePicker']}>
                  <DateTimePicker
                      className='w-full'
                      label='วันที่และเวลา'
                      disablePast
                      value={time}
                      onChange={(newValue)=>setTime(newValue)}
                      minDateTime={now}
                      timeSteps={{ minutes: 30 }}
                      // maxTime={openTime.open_time}
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
                      onChange={handleChangeSeat}
                  >
                    {
                      seatNumbers.map((num,index) => {
                        return(<MenuItem key={index} value={index}>{num}</MenuItem>
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
