import { SelectCity } from "components/";
import { Wrapper, SwitchField, Input, Label } from "./Main.styles";
import { useState } from "react";

export const Main = ({ setWeathers, city, setCity }) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleOnChange = (check) => {
    setIsChecked(check);
  };

  return (
    <Wrapper>
      <SelectCity
        value={city}
        setValue={setCity}
        isChecked={isChecked}
        setWeathers={setWeathers}
      />
      <SwitchField>
        <Input
          type="radio"
          id="radio-one"
          name="switch-one"
          value="yes"
          onChange={() => handleOnChange(true)}
          checked={isChecked}
        />
        <Label htmlFor="radio-one">Current Weather</Label>
        <Input
          type="radio"
          id="radio-two"
          name="switch-one"
          value="no"
          onChange={() => handleOnChange(false)}
          checked={!isChecked}
        />
        <Label htmlFor="radio-two">16 Day Forecast</Label>
      </SwitchField>
    </Wrapper>
  );
};
