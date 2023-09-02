import React, { useEffect } from 'react';
import axios from "axios";
export default function geolocation() {
  const successCallback = (position) => {
    const { latitude, longitude } = position.coords;
}
  const errorCallback = (error) => {
    console.log(error);
  };
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

 
  return (
    <div>geolocation</div>
  )
}
