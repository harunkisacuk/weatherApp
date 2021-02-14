import { Card } from "components";


export const CurrentDayForecast = ({ weather, city }) => {

  return (
    <Card
      temp={weather?.temp}
      time={weather?.ob_time}
      icon={weather?.weather?.icon}
      city={city}
    />
  );
};
