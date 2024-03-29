"use client";
// components/GoogleMap.tsx

import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import TextField from '@mui/material/TextField';

const loader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  version: 'weekly',
  libraries: ['places'], // เพิ่ม libraries places
}); const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [predictions, setPredictions] = useState<google.maps.places.AutocompletePrediction[]>([]);

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
              newMap.setCenter(initialLocation);
                new google.maps.Marker({
                  position: initialLocation,
                  map: newMap,
                });
            },
            (error) => {
              if (error.code === error.PERMISSION_DENIED) {
                const newMap = new google.maps.Map(mapRef.current, {
                  center: { lat: 13.7563, lng: 100.5018 }, // ตำแหน่งเริ่มต้นที่กรุงเทพมหานคร,
                  zoom: 12,
                })
                setMap(newMap);
                newMap.setCenter({ lat: 13.7563, lng: 100.5018 });
                new google.maps.Marker({
                  position: { lat: 13.7563, lng: 100.5018 },
                  map: newMap,
                });
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
    if (inputRef.current) {
      inputRef.current.value = prediction.description;
    }
    setPredictions([]);
  };

  return (
    <div>
      <TextField inputRef={inputRef} label="Search for a place" variant="outlined" />
      {predictions.length > 0 && (
        <ul>
          {predictions.map((prediction, index) => (
            <li key={index} onClick={() => handleSelectPrediction(prediction)}>
              {prediction.description}
            </li>
          ))}
        </ul>
      )}
      <div ref={mapRef} style={{ width: '100%', height: '400px' }} />
    </div>
  );
};

export default GoogleMap;
