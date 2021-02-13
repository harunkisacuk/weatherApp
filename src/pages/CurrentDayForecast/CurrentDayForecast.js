// import { getWeather } from "services/weatherService";
import { getWeather } from "services/mockData";

import { useEffect, useState } from "react";
export const CurrentDayForecast = () => {
  const [weather, setWeather] = useState([]);
  console.log("​CurrentDayForecast -> weather", weather);
  useEffect(() => {
    getWeather().then((res) => setWeather(res.data[0]))
  }, []);
  return (
    <>
      <br />
      CurrentDayForecast Page
      {`${weather?.datetime} tarihinde hava ${weather?.temp}`}&#xb0; olacak
    </>
  );
};
