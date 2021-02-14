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
    <Wrapper>
      <Button onClick={handleBack}>
        <FiCornerUpLeft />
      </Button>
      <SummaryItem>
        {new Date(time).toLocaleDateString("en-GB", options)}
      </SummaryItem>
      {icon && <Img src={`${Constants.PATH_ICON}${icon}.png`} />}
      <ResultTemp>{temp}&#xb0;C</ResultTemp>
      <SummaryItem>{city}</SummaryItem>
    </Wrapper>
  );
};
