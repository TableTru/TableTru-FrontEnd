'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



export default function BasicSelect({seats}:{seats:number}) {
  

  const [seat, setSeat] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSeat(event.target.value as string);
  };
  //making loop of seats
  // let arrSeats= [];

  // let i = 0;
  // while(i < seats){
  //   arrSeats.push(i+1)
  // }
  // console.log(arrSeats)
  

  return (
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


          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
}