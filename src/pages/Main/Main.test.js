import { render } from "@testing-library/react";
import { Main } from "./Main";
import { fireEvent } from "@testing-library/react";

test("should render Main component", () => {
  const wrapper = render(<Main />);
  expect(wrapper.getByTestId("mainComp")).toBeInTheDocument();
});

test("should render Radio input one", () => {
  const wrapper = render(<Main />);
  expect(wrapper.getByTestId("radioInputOne")).toBeInTheDocument();
});
test("should render Radio input two", () => {
  const wrapper = render(<Main />);
  expect(wrapper.getByTestId("radioInputTwo")).toBeInTheDocument();
});
test("should be checked Radio input one,should be not checked Radio input Two", () => {
  const wrapper = render(<Main />);
  expect(wrapper.getByTestId("radioInputOne").checked).toBe(true);
  expect(wrapper.getByTestId("radioInputTwo").checked).toBe(false);
});
test("should be not checked Radio input one,should be checked Radio input Two", () => {
  const wrapper = render(<Main />);
  const input = wrapper.getByTestId("radioInputTwo");
  fireEvent.click(input);
  expect(wrapper.getByTestId("radioInputOne").checked).toBe(false);
  expect(wrapper.getByTestId("radioInputTwo").checked).toBe(true);
});
