import styled from "styled-components";

export const Wrapper = styled.div``;
export const Title = styled.div`
  font-size: 3em;
  text-align: center;
  margin: 0.5em auto 0.5em;

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;
export const WrapperInput = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1em;
  @media (max-width: 480px) {
    gap: 0.5em;
  }
`;

export const WrapperCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  padding: 0;
  margin: 2em 1em;
  gap: 1em;
  @media (max-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5em;
  }
  @media (max-width: 300px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Input = styled.input`
  width: 5em;
  background: transparent;
  outline: 0;
  border: 0;
  border-bottom: 2px solid #403e39;
  font-family: "Work Sans", sans-serif;
  font-size: 1.5em;
  text-align: center;
  padding: 0.5em;

  @media (max-width: 480px) {
    width: 3.5em;
    font-size: 0.5em;
    padding: 0.2em;
  }
`;

export const Button = styled.button`
  margin: auto 0;
  background-color: #45b29d;
  color: #e5ebeb;
  border: 0;
  border-radius: 0.2em;
  outline: 0;
  font-family: "Work Sans", sans-serif;
  font-size: 1em;
  padding: 0.5em 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: filter 0.3s ease;

  @media (max-width: 480px) {
    font-size: 0.5em;
    padding: 0.25em 1em;
  }
`;
