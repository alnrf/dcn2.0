import styled from "styled-components";

export const WrapSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f7f7f7;
  width: 100%;
  height: 48px;
  margin: 0 40px;
  borderRadius: 5px;
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  border: none;
  background-color: var(--background);
  height: 48px;
  font-family: "Lato", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  padding: 0 0 0 8px;
`;
