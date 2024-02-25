'use client';

import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';






export default function DatePick() {
  const now = dayjs()
  const [dateTime, setDateTime] = React.useState(dayjs());

  const handleChange = () => {
    setDateTime;
  };


  return (
    <>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker label="วันที่"
            onChange={handleChange}
            format='DD-MM-YYYY'
            className='w-full'
            minDate={now}
          />
        </DemoContainer>
      </LocalizationProvider>

    </>
  );
}
