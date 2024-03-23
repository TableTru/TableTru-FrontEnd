'use client';

import "./SearchBar.css"
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState, useRef } from "react";
import {
  Accordion,
  FormControl,
  AccordionDetails,
  AccordionActions,
  AccordionSummary,
  FormControlLabel,
  FormLabel,
  Divider,
  Checkbox,
  Grid,
  MenuItem,
  Select,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  version: 'weekly',
  libraries: ['places'], // เพิ่ม libraries places
});

export default function Search({ placeholder }: { placeholder: string }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [predictions, setPredictions] = useState<google.maps.places.AutocompletePrediction[]>([]);
  const searchParams = useSearchParams()
  const search = searchParams.get('search')

  const onClick = () => {
    console.log("active");

  }

  useEffect(() => {
    loader.load().then(() => {
      const google = window.google;
      if (mapRef.current && !map) {
        const geolocation = navigator.geolocation;
        if (geolocation) {
          geolocation.getCurrentPosition(
            (position) => {
              const initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
              const newMap = new google.maps.Map(mapRef.current, {
                center: initialLocation,
                zoom: 12,
              })
              setMap(newMap);
              // newMap.setCenter(initialLocation);
              // new google.maps.Marker({
              //     position: initialLocation,
              //     map: newMap,
              // });
            },
            (error) => {
              if (error.code === error.PERMISSION_DENIED) {
                const newMap = new google.maps.Map(mapRef.current, {
                  center: { lat: 13.7563, lng: 100.5018 }, // ตำแหน่งเริ่มต้นที่กรุงเทพมหานคร,
                  zoom: 12,
                })
                setMap(newMap);
                // newMap.setCenter({ lat: 13.7563, lng: 100.5018 });
                // new google.maps.Marker({
                //     position: { lat: 13.7563, lng: 100.5018 },
                //     map: newMap,
                // });
              }
            }
          );
        }
        else {
          console.log("my location off");

        }
      }
      if (inputRef.current && google) {
        const autocomplete = new google.maps.places.Autocomplete(inputRef.current);
        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace();
          if (place && place.geometry && map) {
            const location = place.geometry.location; //ตำแหน่งแบบ lat long
            console.log(place.formatted_address); //ตำแหน่งแบบชื่อ
            // setFormData({
            //     ...formData,
            //     location: place.formatted_address,
            //     latitude: place.geometry.location.lat(),
            //     longitude: place.geometry.location.lng(),
            // });
            map.setCenter(location);
            new google.maps.Marker({
              position: location,
              map: map,
            });
          }
        });
        autocomplete.addListener('predictions_changed', () => {
          setPredictions(autocomplete.getPlacePredictions());
        });
      }
    });
  }, [map]);

  const handleSelectPrediction = (prediction: google.maps.places.AutocompletePrediction) => {
    console.log(prediction.description);

    if (inputRef.current) {
      inputRef.current.value = prediction.description;
      console.log("active");

    }
    setPredictions([]);
  };

  return (
    <>
      <h1>Query: {search}</h1>
      <label htmlFor="simple-search" className="sr-only">Search</label>
      <div className="relative w-full">
        <div
          className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input type="text" id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder} required />
      </div>

      <div className="py-4">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Filter & Order
          </AccordionSummary>
          <AccordionDetails>

            <Grid item xs={12}>
              <Typography variant="subtitle1">ค้นหาพิกัดของร้าน</Typography>
              <TextField
                inputRef={inputRef}
                required
                fullWidth
              />
              {predictions.length > 0 && (
                <ul>
                  {predictions.map((prediction, index) => (
                    <li key={index} onClick={() => handleSelectPrediction(prediction)}>
                      {prediction.description}
                    </li>
                  ))}
                </ul>
              )}

            </Grid>

            <Grid container spacing={2} >
              <Grid item xs={6} sx={{ mt: 2, mb: 2 }}>
                <Typography variant="subtitle1">เรียงตาม</Typography>
                <Select

                  fullWidth
                  id="filter"
                  name="filter"
                  label="filter"
                  value={1}
                >
                  <MenuItem value={1}>คะแนนรีวิว</MenuItem>
                  <MenuItem value={2}>ใกล้ฉัน</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={6} sx={{ mt: 2, mb: 2 }}>
                <Typography variant="subtitle1">หมวดหมู่</Typography>
                <Select

                  fullWidth
                  id="order"
                  name="order"
                  label="order"
                  value={1}
                >
                  <MenuItem value={1}>ทั้งหมด</MenuItem>
                  <MenuItem value={2}>ไทย</MenuItem>
                  <MenuItem value={3}>นานาชาติ</MenuItem>
                  <MenuItem value={4}>ญิ่ปุ่น</MenuItem>
                  <MenuItem value={5}>จีน</MenuItem>
                  <MenuItem value={6}>อิตาลี</MenuItem>
                  <MenuItem value={7}>ฟิวชั่น</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </AccordionDetails>
          <AccordionActions>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onClick}
            >
              ยืนยัน
            </Button>
          </AccordionActions>
        </Accordion>
      </div>
    </>
  );
}