import {
  Wrapper,
  Title,
  FormWrapper,
  InputWrapper,
  ReactSelect,
  IconButton,
} from "./SelectCity.styles";
import { useHistory } from "react-router-dom";
import Constants from "config/constants";
import { BsSearch } from "react-icons/bs";
import { getWeather } from "services/weatherService";
// import { getWeather } from "services/mockData";

export const SelectCity = ({ setWeathers, isChecked, value, setValue }) => {
  const history = useHistory();

  const handleChange = (value) => {
    value !== "" && setValue(value);
  };
  const handleInputChange = (value) => {
    value !== "" && setValue({ value: value, label: value });
  };
  const handleSubmit = () => {
    const city = value?.value?.split(",")[0];
    const country = value?.value?.split(",")[1];
    const params = { city, country };
    if (isChecked) {
      getWeather({ params }).then((res) => setWeathers(res.data));

      history.push("/currentDay");
    } else {
      getWeather({ url: "/forecast/daily", params }).then((res) =>
        setWeathers(res.data)
      );
      history.push("/nextDays");
    }
  };
  return (
    <Wrapper>
      <Title>Weather App</Title>

      <FormWrapper id="weather-form">
        <InputWrapper className="form-div">
          <ReactSelect
            placeholder="Your city here"
            isClearable
            onChange={handleChange}
            onInputChange={handleInputChange}
            options={Constants.CITIES}
          />
          <IconButton onClick={handleSubmit} disabled={!value.value}>
            <BsSearch />
          </IconButton>
        </InputWrapper>
      </FormWrapper>
    </Wrapper>
  );
};
