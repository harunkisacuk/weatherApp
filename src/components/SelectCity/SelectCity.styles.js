import styled from "styled-components";
import Select from "react-select";

export const Wrapper = styled.div`
  opacity: 1;
  display: block;
`;
export const Title = styled.div`
  font-size: 3em;
  text-align: center;
  @media (max-width: 400px) {
    font-size: 1.5em;
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin: 0.5em;
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ReactSelect = styled(Select)`
  flex: 1;
  width: 350px;
  justify-self: center;
  background: transparent;
  outline: 0;
  border: 0;
  border-bottom: 2px solid #403e39;
  font-family: "Work Sans", sans-serif;
  font-size: 1.5em;
  text-align: center;
  padding: 0.5em;

  .css-1wa3eu0-placeholder,
  .css-1uccc91-singleValue {
    white-space: nowrap;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .css-1pahdxg-control {
    border: none;
    box-shadow: none;
    background: transparent;
  }

  &.css-2b097c-container {
    padding: 0;

    .css-yk16xz-control {
      border: none;
      background: transparent;

      :hover {
        border-color: none;
      }

      .css-1okebmr-indicatorSeparator {
        display: none;
      }
    }
  }

  @media (max-width: 400px) {
    width: 175px;
    font-size: 0.75em;
    padding: 0.25em;
  }
`;
export const IconButton = styled.button`
  background-color: #45b29d;
  color: #e5ebeb;
  border: 0;
  border-radius: 50%;
  outline: 0;
  font-family: "Work Sans", sans-serif;
  font-size: 1.5em;
  width: 1.5em;
  height: 1.5em;
  padding: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: filter 0.3s ease;
  @media (max-width: 400px) {
    font-size: 1em;
    width: 1em;
    height: 1em;
    padding: 0.25em;
  }
`;
