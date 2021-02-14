import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.5em;
  gap: 0.5em;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 0px 10px 1px rgb(0 0 0 / 30%);
  box-sizing: border-box;
`;

export const ResultTemp = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.25em;
`;

export const SummaryItem = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.75em;
`;
export const Img = styled.img`
  width: 4em;
  height: 4em;
  margin: 0 auto;
`;
