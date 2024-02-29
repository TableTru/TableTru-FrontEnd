'use client';

import * as React from 'react';
import { DemoItem, DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker, TimePicker } from '@mui/x-date-pickers';
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
            <DemoContainer components={['DateTimePicker',]}>
                    <DateTimePicker
                        defaultValue={now}
                        className='w-full'
                        label='วันที่และเวลา'
                        disablePast
                        onChange={handleChange}
                        minDateTime={now}
                        timeSteps={{ minutes: 30 }}
                        views={['year', 'month', 'day', 'hours', 'minutes']}
                    />
            </DemoContainer>
        </LocalizationProvider>
    );
}