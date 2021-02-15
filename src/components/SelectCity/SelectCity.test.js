import { render } from "@testing-library/react";
import { SelectCity } from "./SelectCity";

test("should render SelectCity component", () => {
  const setWeathers = jest.fn();
  const isChecked = true;
  const setValue = jest.fn();
  const value = { value: "London, GB", label: "London, GB" };
  const wrapper = render(
    <SelectCity
      value={value}
      setValue={setValue}
      isChecked={isChecked}
      setWeathers={setWeathers}
    />
  );
  expect(wrapper.getByTestId("selectCityComp")).toBeInTheDocument();
});
test("should render React Select in selectCity component", () => {
  const wrapper = render(<SelectCity />);
  expect(wrapper.getByText("Your city here")).toBeInTheDocument();
});
test("should render icon in SelectCity component", () => {
  const wrapper = render(<SelectCity />);
  expect(wrapper.getByTestId("selectCityIconButton")).toBeInTheDocument();
});
test("should render icon as disabled in SelectCity component", () => {
  const wrapper = render(<SelectCity />);
  expect(wrapper.getByTestId("selectCityIconButton").disabled).toBe(true);
});