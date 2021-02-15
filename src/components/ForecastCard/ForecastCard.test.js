import { render } from "@testing-library/react";
import { ForecastCard } from "./ForecastCard";
import { nextDaysForecast } from "config/mockData";
import { fireEvent } from "@testing-library/react";

test("should render ForecastCard component", () => {
  const wrapper = render(<ForecastCard />);
  expect(wrapper.getByTestId("forecastCardComp")).toBeInTheDocument();
});

test("should render the time in ForecastCard component", () => {
  const wrapper = render(
    <ForecastCard time={nextDaysForecast?.data[0]?.valid_date} />
  );
  expect(wrapper.getByText("Sun, 14 Feb 2021")).toBeInTheDocument();
});

test("should render the image in ForecastCard component", () => {
  const wrapper = render(
    <ForecastCard icon={nextDaysForecast?.data[0]?.weather?.icon} />
  );
  expect(wrapper.getByTestId("forecastCardImage").src).toBe(
    "https://www.weatherbit.io/static/img/icons/r01d.png"
  );
  expect(wrapper.getByTestId("forecastCardImage")).toBeInTheDocument();
});

test("should render the temperature in ForecastCard component", () => {
  const wrapper = render(
    <ForecastCard temp={nextDaysForecast?.data[0]?.temp} />
  );
  expect(wrapper.getByTestId("forecastCardTemp")).toBeInTheDocument();
});
