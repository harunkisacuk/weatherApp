import { Wrapper, ResultTemp, SummaryItem, Img } from "./ForecastCard.styles";
import Constants from "config/constants";
var options = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};

export const ForecastCard = ({ temp, icon, time }) => {
  return (
    <Wrapper data-testid="forecastCardComp">
      {icon && (
        <Img
          data-testid="forecastCardImage"
          src={`${Constants.PATH_ICON}${icon}.png`}
        />
      )}
      <ResultTemp data-testid="forecastCardTemp">{temp}&#xb0;C</ResultTemp>
      <SummaryItem data-testid="forecastCardDate">
        {new Date(time).toLocaleDateString("en-GB", options)}
      </SummaryItem>
    </Wrapper>
  );
};
