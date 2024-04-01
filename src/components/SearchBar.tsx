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
  Link,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Stack,
  CardActions,
  Chip,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Loader } from '@googlemaps/js-api-loader';
import Rating from "@mui/material/Rating";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { getAllStore, getStorePreview, searchSortRating, searchSortLocation } from "@/services/store.service";
import MyLocation from './botton/MyLocation';

const loader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  version: 'weekly',
  libraries: ['places'], // เพิ่ม libraries places
});


const tempData = [
  {
    store_id: "1",
    store_name: "ร้านค้า1",
    sum_rating: "4",
    store_cover_image: 'https://pbs.twimg.com/media/GH0mlobbgAARNLo?format=jpg&name=medium',
    category: {
      category_name: "หมวดหมู่"
    },
    location_id: "2",
  },
  {
    store_id: "2",
    store_name: "ร้านค้า2",
    sum_rating: "2",
    store_cover_image: 'https://pbs.twimg.com/media/GH0mlobbgAARNLo?format=jpg&name=medium',
    category: {
      category_name: "หมวดหมู่"
    },
    location_id: "2",
  },
  {
    store_id: "3",
    store_name: "ร้านค้า3",
    sum_rating: "4",
    store_cover_image: 'https://firebasestorage.googleapis.com/v0/b/fir-upload-file-8e06e.appspot.com/o/image%2F0eymTDE.png?alt=media&token=41bb21d3-d2f9-4baf-b960-f4fef7b39793',
    category: {
      category_name: "หมวดหมู่"
    },
    location_id: "สาทร",
  },
];

export default function Search({ placeholder }: { placeholder: string }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [predictions, setPredictions] = useState<google.maps.places.AutocompletePrediction[]>([]);
  const searchParams = useSearchParams()
  const locationQuery = searchParams.get('location')
  const searchQuery = searchParams.get('search')
  const categoryQuery = searchParams.get('category')
  const filterQuery = searchParams.get('filter')

  const [storeData, setStoreData] = useState<object[]>([]);
  const [locationData, setLocationData] = useState<string | null>(locationQuery)
  const [categoryId, setCategoryId] = useState<number>(Number(categoryQuery))
  const [search, setSearch] = useState<string | null>(searchQuery)
  const [filter, setFilter] = useState(1)

  const onClick = async () => {
    console.log(search);
    console.log(locationData);
    console.log(categoryId);
    console.log(filter);

    var newCategoryId = 0

    if (categoryId != 0) {
      newCategoryId = categoryId - 1
    }

    const searchObject = {
      search: search,
      location: locationData,
      category_id: newCategoryId
    }

    console.log(searchObject);


    if (filter == 1) {
      //เรียงตาม rating
      const searchRes = await searchSortRating(searchObject.search ?? '', searchObject.category_id)
      console.log(searchRes);

      const storeArray = [];

      if (searchRes) {
        const stores = searchRes;
        for (const storeObj of stores) {
          storeArray.push(storeObj);
        }
      }
      setStoreData(storeArray);
      console.log(storeArray);

    }
    else {
      const searchRes = await searchSortLocation(searchObject.search?? '', searchObject.category_id, searchObject.location)
      console.log(searchRes);

      const storeArray = [];

      if (searchRes) {
        const stores = searchRes;
        for (const storeObj of stores) {
          storeArray.push(storeObj);
        }
      }
      setStoreData(storeArray);
      console.log(storeArray);
    }
  }


  const myLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const geocoder = new google.maps.Geocoder();
      const latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      geocoder.geocode({ 'location': latLng }, (results, status) => {
        if (status === 'OK') {
          if (results[0]) {
            console.log(results[0].formatted_address); // แสดงชื่อสถานที่
            setLocationData(results[0].formatted_address)
          } else {
            console.log('No results found');
          }
        } else {
          console.error('Geocoder failed due to: ' + status);
        }
      });
    });

  }

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    switch (name) {
      case 'search':
        setSearch(value);
        console.log('search:', value);
        break;
      case 'location':
        setLocationData(value)
        console.log('location:', value);
        break;
      case 'category':
        setCategoryId(value)
        console.log('category:', value);
        break;
      case 'filter':
        setFilter(value)
        if (value == 3) {
          navigator.geolocation.getCurrentPosition((position) => {
            const geocoder = new google.maps.Geocoder();
            const latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            geocoder.geocode({ 'location': latLng }, (results, status) => {
              if (status === 'OK') {
                if (results[0]) {
                  console.log(results[0].formatted_address); // แสดงชื่อสถานที่
                  setLocationData(results[0].formatted_address)
                } else {
                  console.log('No results found');
                }
              } else {
                console.error('Geocoder failed due to: ' + status);
              }
            });
          });
        }
        console.log('filter:', value);
        break;
      default:
        break;
    }
  }

  const fetchData = async () => {
    var newCategoryId = 0

    if (categoryId != 0) {
      newCategoryId = categoryId - 1
    }

    const searchObject = {
      search: search,
      location: locationData,
      category_id: newCategoryId
    }

    console.log(searchObject);
    if (filter == 1) {
      //เรียงตาม rating
      const searchRes = await searchSortRating(searchObject.search ?? '', searchObject.category_id)
      console.log(searchRes);

      const storeArray = [];

      if (searchRes) {
        const stores = searchRes;
        for (const storeObj of stores) {
          storeArray.push(storeObj);
        }
      }
      setStoreData(storeArray);
      console.log(storeArray);

    }
    else {
      const searchRes = await searchSortLocation(searchObject.search ?? '', searchObject.category_id, searchObject.location)
      console.log(searchRes);

      const storeArray = [];

      if (searchRes) {
        const stores = searchRes;
        for (const storeObj of stores) {
          storeArray.push(storeObj);
        }
      }
      setStoreData(storeArray);
      console.log(storeArray);
    }
  };

  useEffect(() => {
    if (categoryId == 0) {
      setCategoryId(1)
    }
    fetchData()
    console.log("fetch active");

  }, [locationData, categoryId, filter]);

  useEffect(() => {
    loader.load().then(() => {
      const google = window.google;
      const autocomplete = new google.maps.places.Autocomplete(inputRef.current);
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (place && place.geometry) {
          const location = place.geometry.location; //ตำแหน่งแบบ lat long
          console.log(place.formatted_address); //ตำแหน่งแบบชื่อ
          setLocationData(place.formatted_address);
        }
      });
      autocomplete.addListener('predictions_changed', () => {
        setPredictions(autocomplete.getPlacePredictions());
      });
    });
    console.log("location update2");
  }, [map]);

  const handleSelectPrediction = (prediction: google.maps.places.AutocompletePrediction) => {
    console.log(prediction.description);

    if (inputRef.current) {
      inputRef.current.value = prediction.description;
      console.log("active");

    }
    setPredictions([]);
  };

  useEffect(() => {
    setLocationData(locationData)
    console.log("location update1");
  }, [locationData]);

  useEffect(() => {
    if (filterQuery != null) {
      setFilter(Number(filterQuery))
      if (Number(filterQuery) == 3) {
        loader.load().then(() => {
          navigator.geolocation.getCurrentPosition((position) => {
            const geocoder = new google.maps.Geocoder();
            const latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            geocoder.geocode({ 'location': latLng }, (results, status) => {
              if (status === 'OK') {
                if (results[0]) {
                  console.log(results[0].formatted_address); // แสดงชื่อสถานที่
                  setLocationData(results[0].formatted_address)
                } else {
                  console.log('No results found');
                }
              } else {
                console.error('Geocoder failed due to: ' + status);
              }
            });
          });
        })

      }
    }
    console.log(filterQuery);

    console.log(filter);

  }, []);

  return (
    <>
      <label htmlFor="simple-search" className="sr-only">Search</label>
      <div className="relative w-full">
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
          <div
            className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="text" id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder={placeholder}
            name="search"
            value={search}
            onChange={handleChange} />
          <Button
            sx={{ borderRadius: '0 0.5rem 0.5rem 0' }}
            variant="contained"
            onClick={onClick}
            className="search absolute inset-y-0 right-0 flex items-center px-3">
            Search
          </Button>
        </Box>

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

            <Grid item xs={6}>
              <Typography variant="subtitle1">ค้นหาพิกัดของร้าน</Typography>
              <TextField
                inputRef={inputRef}
                required
                fullWidth
                name="location"
                value={locationData}
                onChange={handleChange}
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
                  value={filter}
                  onChange={handleChange}
                >
                  <MenuItem value={1}>คะแนนรีวิว</MenuItem>
                  <MenuItem value={2}>ตำแหน่งสถานที่</MenuItem>
                  <MenuItem value={3}>ร้านค้าใกล้ฉัน</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={6} sx={{ mt: 2, mb: 2 }}>
                <Typography variant="subtitle1">หมวดหมู่</Typography>
                <Select

                  fullWidth
                  id="category"
                  name="category"
                  label="category"
                  value={categoryId}
                  onChange={handleChange}
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
          {/* <AccordionActions>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onClick}
            >
              ยืนยัน
            </Button>
          </AccordionActions> */}
        </Accordion>
      </div>

      <div className="flex flex-col  m-auto p-auto">
        <div className="w-fit flex item-center justify-around center mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5">
          {storeData.map((item) => (
            <Link href={`/restaurant/${item.store_id}`} key={item.store_id}>
              <Card sx={{ maxWidth: 345, width: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="194"
                    width={345}
                    image={item.store_cover_image}
                    alt="Paella dish"
                    style={{ maxHeight: '230px' }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      {item.store_name}
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <Rating name="read-only" value={item.sum_rating} readOnly />
                      <Typography component="legend">{item.sum_rating} reviews</Typography>
                    </Stack>
                  </CardContent>

                  <CardActions sx={{ my: 2 }}>
                    <Chip icon={<RestaurantIcon />} label={item.category_name} />
                  </CardActions>
                </CardActionArea>
              </Card>
            </Link>
          ))}
        </div>
      </div>


    </>
  );
}