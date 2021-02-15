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
    <Wrapper data-testid="selectCityComp">
      <Title>Weather App</Title>

      <FormWrapper data-testid="selectCityWeatherForm" id="weather-form">
        <InputWrapper data-testid="selectCityInputWrapper" className="form-div">
          <ReactSelect
            id="selectCitySelect"
            placeholder="Your city here"
            isClearable
            onChange={handleChange}
            onInputChange={handleInputChange}
            options={Constants.CITIES}
          />
          <IconButton
            data-testid="selectCityIconButton"
            onClick={handleSubmit}
            disabled={!value?.value}
          >
            <BsSearch />
          </IconButton>
        </InputWrapper>
      </FormWrapper>
    </Wrapper>
  );
};
