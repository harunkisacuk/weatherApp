// import { getWeather } from "services/weatherService";
import { getWeather } from "services/mockData";
import { useEffect, useState } from "react";
export const NextDaysForecast = () => {
  const [weathers, setWeathers] = useState([]);
  console.log("​NextDaysForecast -> wheaters", weathers);
  useEffect(() => {
    getWeather({ url: "/forecast/daily" }).then((res) => setWeathers(res.data));
  }, []);
  return (
    <>
      NextDaysForecast Page
      <br />
      {weathers?.map((weather) => (
        <div>
          {`${weather?.datetime} tarihinde hava ${weather?.temp}`}&#xb0; olacak
        </div>
      ))}
    </>
  );
};
