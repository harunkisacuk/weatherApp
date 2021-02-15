import { Wrapper, Button, ResultTemp, SummaryItem, Img } from "./Card.styles";
import { FiCornerUpLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import Constants from "config/constants";
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const Card = ({ temp, city, icon, time }) => {
  const history = useHistory();
  const handleBack = () => {
    history.push("/");
  };

  return (
    <Wrapper data-testid="cardComp">
      <Button data-testid="iconButton" onClick={handleBack}>
        <FiCornerUpLeft />
      </Button>
      <SummaryItem data-testid="currentDate">
        {new Date(time).toLocaleDateString("en-GB", options)}
      </SummaryItem>
      {icon && (
        <Img
          data-testid="weatherImage"
          src={`${Constants.PATH_ICON}${icon}.png`}
        />
      )}
      <ResultTemp data-testid="weatherTemp">{temp}&#xb0;C</ResultTemp>
      <SummaryItem data-testid="weatherCityName">{city}</SummaryItem>
    </Wrapper>
  );
};
