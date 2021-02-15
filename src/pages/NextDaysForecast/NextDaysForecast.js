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
    <Wrapper data-testid="nextDaysForecastComp">
      <Title data-testid="nextDaysForecastTitle">{city}</Title>
      <WrapperInput>
        <Button
          data-testid="nextDaysForecastHomeBackButton"
          onClick={handleBack}
        >
          <FaHome />
        </Button>
        <Input
          data-testid="nextDaysForecastMinTemp"
          type="number"
          placeholder="min temp"
          onChange={handleMinTemp}
        />
        <Input
          data-testid="nextDaysForecastMaxTemp"
          type="number"
          placeholder="max temp"
          onChange={handleMaxTemp}
        />
      </WrapperInput>
      <WrapperCards data-testid="nextDaysForecastCardsWrapper">
        {weathers
          ?.filter((item) => parseInt(item.temp) >= parseInt(minTemp))
          ?.filter((item) => parseInt(item.temp) <= parseInt(maxTemp))
          ?.map((weather) => (
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
