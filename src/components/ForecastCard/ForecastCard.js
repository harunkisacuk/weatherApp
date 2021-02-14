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
    <Wrapper>
      <Img src={`${Constants.PATH_ICON}${icon}.png`} />
      <ResultTemp>{temp}&#xb0;C</ResultTemp>
      <SummaryItem>
        {new Date(time).toLocaleDateString("en-GB", options)}
      </SummaryItem>
    </Wrapper>
  );
};
