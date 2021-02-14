import { ForecastCard } from "components";
import { FaHome } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import {
  Wrapper,
  WrapperInput,
  WrapperCards,
  Input,
  Button,
  Title,
} from "./NextDaysForecast.styles";
import { useState } from "react";
export const NextDaysForecast = ({ weathers, city }) => {
  const [minTemp, setMinTemp] = useState(-100);
  const [maxTemp, setMaxTemp] = useState(100);
  const history = useHistory();

  const handleBack = () => {
    history.push("/");
  };
  const handleMinTemp = (e) => {
    setMinTemp(e.target.value || -100);
  };
  const handleMaxTemp = (e) => {
    setMaxTemp(e.target.value || 100);
  };
  return (
    <Wrapper>
      <Title>{city}</Title>
      <WrapperInput>
        <Button onClick={handleBack}>
          <FaHome />
        </Button>
        <Input type="number" placeholder="min temp" onChange={handleMinTemp} />
        <Input type="number" placeholder="max temp" onChange={handleMaxTemp} />
      </WrapperInput>
      <WrapperCards>
        {weathers
          .filter((item) => parseInt(item.temp) >= parseInt(minTemp))
          .filter((item) => parseInt(item.temp) <= parseInt(maxTemp))
          .map((weather) => (
            <ForecastCard
              key={weather?.valid_date}
              temp={weather?.temp}
              time={weather?.valid_date}
              icon={weather?.weather?.icon}
              city={city}
            />
          ))}
      </WrapperCards>
    </Wrapper>
  );
};
