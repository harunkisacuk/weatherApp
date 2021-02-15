import { render } from "@testing-library/react";
import { Card } from "./Card";
import { currentDay } from "config/mockData";

test("should render Card component", () => {
  const wrapper = render(<Card />);
  expect(wrapper.getByTestId("cardComp")).toBeInTheDocument();
});

test("should render Icon Button", () => {
  const wrapper = render(<Card />);
  expect(wrapper.getByTestId("iconButton")).toBeInTheDocument();
});

test("should render the time in Card component", () => {
  const wrapper = render(<Card time={currentDay.data[0].ob_time} />);
  expect(wrapper.getByText("Sunday, 14 February 2021")).toBeInTheDocument();
});

test("should render the image in Card component", () => {
  const wrapper = render(<Card icon={currentDay.data[0].weather.icon} />);
  expect(wrapper.getByTestId("weatherImage")).toBeInTheDocument();
  expect(wrapper.getByTestId("weatherImage").src).toBe(
    "https://www.weatherbit.io/static/img/icons/c04n.png"
  );
});

test("should render the temperature in Card component", () => {
  const wrapper = render(<Card temp={currentDay.data[0].temp} />);
  expect(wrapper.getByTestId("weatherTemp")).toBeInTheDocument();
});

test("should render the City name in Card component", () => {
  const city = "London, GB";
  const wrapper = render(<Card city={city} />);
  expect(wrapper.getByText(city)).toBeInTheDocument();
});
