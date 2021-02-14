import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 550px;
  margin: 3em 4em;
  position: relative;
  padding: 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 2em;
  gap: 1em;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 0px 10px 1px rgb(0 0 0 / 30%);
  box-sizing: border-box;
  @media (max-width: 400px) {
    width: 80%;
    padding: 2em;
    margin: 1.75em 1.75em 1em 1em;
    gap: 0em;

    div {
      font-size: 1em;
    }
    img {
      width: 10em;
      height: 10em;
    }
  }
`;
export const Button = styled.button`
  position: absolute;
  right: -0.75em;
  top: -0.75em;
  background-color: #45b29d;
  color: #e5ebeb;
  border: 0;
  border-radius: 50%;
  outline: 0;
  font-family: "Work Sans", sans-serif;
  font-size: 2em;
  width: 2em;
  height: 2em;
  padding: 0.3em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: filter 0.3s ease;
`;

export const ResultTemp = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 6em;
`;

export const SummaryItem = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
`;
export const Img = styled.img``;
