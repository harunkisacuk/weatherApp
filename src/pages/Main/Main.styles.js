import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const SwitchField = styled.div`
  display: flex;
  margin: 1em 0 1.5em;
  overflow: hidden;
  justify-content: center;

  input:checked + label {
    background-color: #45b29d;
    box-shadow: none;
  }
`;
export const Label = styled.label`
  background-color: transparent;
  color: rgba(0, 0, 0, 0.6);
  font-size: 1em;
  line-height: 1;
  text-align: center;
  padding: 0.5em 1em;
  margin-right: -1px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
  }

  &:first-of-type {
    border-radius: 4px 0 0 4px;
  }

  &:last-of-type {
    border-radius: 0 4px 4px 0;
  }
  @media (max-width: 400px) {
    font-size: 0.5em;
  }
`;

export const Input = styled.input`
  position: absolute !important;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  width: 1px;
  border: 0;
  overflow: hidden;
`;
