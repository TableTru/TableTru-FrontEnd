"use client";

// components/LocationDistance.tsx

import { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    version: 'weekly',
    libraries: ['places'], // เพิ่ม libraries places
  });

const LocationDistance = () => {
  const [distance, setDistance] = useState<string | null>(null);

  useEffect(() => {
    loader.load().then(() => {
      const google = window.google;
      if (google) {
        navigator.geolocation.getCurrentPosition((position) => {
          const originLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          const destinationAddress = '50 ถนนงามวงศ์วาน แขวงลาดยาว เขตจตุจักร กรุงเทพมหานคร 10900 ประเทศไทย';
          
          const service = new google.maps.DistanceMatrixService();
          const request = {
            origins: [originLatLng],
            destinations: [destinationAddress],
            travelMode: google.maps.TravelMode.DRIVING
          };

          service.getDistanceMatrix(request, (response, status) => {
            if (status === google.maps.DistanceMatrixStatus.OK) {
              const distanceText = response.rows[0].elements[0].distance.text;
              setDistance(distanceText);
            } else {
              console.error('ไม่สามารถคำนวณระยะทางได้');
            }
          });
        });
      }
    });
  }, []);

  return <div>{distance ? `ระยะทาง: ${distance}` : 'กำลังคำนวณระยะทาง...'}</div>;
};

export default LocationDistance;
