'use client';

import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs, { Dayjs } from 'dayjs';
import { storeTemp } from '@/data/store';

export default function TimePick() {
  const now = dayjs()
  const [time, setTime] = React.useState(dayjs());

  const handleChange = (time) => {
    setTime(time);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker label="เวลา"
          className='w-full'
          onChange={handleChange}
          timeSteps={{ minutes: 15 }}
          minTime={now}
          disablePast
           />
      </DemoContainer>
    </LocalizationProvider>
  );
}