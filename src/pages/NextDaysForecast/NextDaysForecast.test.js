import { render } from "@testing-library/react";
import { NextDaysForecast } from "./NextDaysForecast";
import { nextDaysForecast } from "config/mockData";
import { fireEvent } from "@testing-library/react";

test("should render NextDaysForecast component", () => {
  const wrapper = render(<NextDaysForecast />);
  expect(wrapper.getByTestId("nextDaysForecastComp")).toBeInTheDocument();
});
test("should render Title in NextDaysForecast component", () => {
  const city = "London, GB";
  const wrapper = render(<NextDaysForecast city={city} />);
  expect(wrapper.getByText("London, GB")).toBeInTheDocument();
});
test("should render Min temp Input", () => {
  const wrapper = render(<NextDaysForecast />);
  expect(wrapper.getByTestId("nextDaysForecastMinTemp")).toBeInTheDocument();
});
test("should render Max temp Input", () => {
  const wrapper = render(<NextDaysForecast />);
  expect(wrapper.getByTestId("nextDaysForecastMaxTemp")).toBeInTheDocument();
});
test("should render 10 ForecastCard when type 8 in Min temp Input", () => {
  const wrapper = render(<NextDaysForecast weathers={nextDaysForecast.data} />);

  const input = wrapper.getByTestId("nextDaysForecastMinTemp");
  fireEvent.change(input, { target: { value: "8" } });

  expect(
    wrapper.getByTestId("nextDaysForecastCardsWrapper").children.length
  ).toBe(10);
});

test("should render 8 ForecastCard when type 8 in Max temp Input", () => {
  const wrapper = render(<NextDaysForecast weathers={nextDaysForecast.data} />);

  const input = wrapper.getByTestId("nextDaysForecastMaxTemp");
  fireEvent.change(input, { target: { value: "8" } });

  expect(
    wrapper.getByTestId("nextDaysForecastCardsWrapper").children.length
  ).toBe(8);
});
