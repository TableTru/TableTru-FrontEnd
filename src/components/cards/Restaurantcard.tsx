'use client';

import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';


import { CardActionArea } from '@mui/material';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link'

import { getStore } from '@/services/store.service'

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
  store_id: number
  category_id: number
  location_id: number
  store_name: string
  store_description: string
  store_menu_image: string
  table_booking: number
  sum_rating: number
  latitude: number
  longitude: number
  open_time: Date
  close_time: Date
  createAt: Date
  updateAt: Date
}

const tempData = [
  {
    store_id: "1",
    store_name: "ร้านค้า1"
  },
  {
    store_id: "2",
    store_name: "ร้านค้า2"
  }
]

export default function Restaurantcard() {
  const [storeData, setStoreData] = useState<Store[]>([]);

  // const [expanded, setExpanded] = useState(false);
  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const fetchData = async () => {
    const storeArray = []
    const data = await getStore()
    console.log(data);

    if (data) {
      const stores = data
      for (const storeObj of stores) {
        storeArray.push(storeObj)
      }
    }
    setStoreData(storeArray)
    console.log(storeArray);
  }


  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {tempData.map((item) => (
        <div>
          <Link href={`/products/${item.store_id}`}>
            
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="194"
                    image="./images/Wineconnection.jpg"
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {item.store_name}
                    </Typography>
                  </CardContent>

                  {/* <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions> */}
                </CardActionArea>
              </Card>
          </Link>
        </div >
      ))
      }
    </>

  );
}
