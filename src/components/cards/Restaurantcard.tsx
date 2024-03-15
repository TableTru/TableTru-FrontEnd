"use client";

import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";

import { CardActionArea } from "@mui/material";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { spacing } from '@mui/system';

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import { getAllStore, getPreviewStore } from "@/services/store.service";

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

interface Store {
  store_id: number;
  category_id: number;
  location_id: number;
  store_name: string;
  store_description: string;
  store_menu_image: string;
  table_booking: number;
  sum_rating: number;
  latitude: number;
  longitude: number;
  open_time: Date;
  close_time: Date;
  createAt: Date;
  updateAt: Date;
}

const tempData = [
  {
    store_id: "1",
    store_name: "ร้านค้า1",
    sum_rating: "4",
    category: {
      category_name: "หมวดหมู่"
    },
    location_id: "2",
  },
  {
    store_id: "2",
    store_name: "ร้านค้า2",
    sum_rating: "2",
    category: {
      category_name: "หมวดหมู่"
    },
    location_id: "2",
  },
  {
    store_id: "3",
    store_name: "ร้านค้า3",
    sum_rating: "4",
    category: {
      category_name: "หมวดหมู่"
    },
    location_id: "สาทร",
  },
];

const handleClick = () => {
  console.info("You clicked the Chip.");
};

export default function Restaurantcard() {
  const [storeData, setStoreData] = useState<object[]>();

  // const [expanded, setExpanded] = useState(false);
  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const fetchData = async () => {
    const storeArray = [];
    const data = await getPreviewStore();
    console.log(data);

    if (data) {
      const stores = data;
      for (const storeObj of stores) {
        storeArray.push(storeObj);
      }
    }
    setStoreData(storeArray);
    console.log(storeArray);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {storeData.map((item) => (
        <Link href={`/products/${item.store_id}`}  key={item.store_id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="194"
                image="./images/Wineconnection.jpg"
                alt="Paella dish"
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

              <CardActions sx={{ my:2 }}>
                  <Chip icon={<RestaurantIcon />} label={item.category?.category_name} />
                  <Chip icon={<LocationOnIcon />} label={item.category_id} />
              </CardActions>
            </CardActionArea>
          </Card>
        </Link>
      ))}
    </>
  );
}
