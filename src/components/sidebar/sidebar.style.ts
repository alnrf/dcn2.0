import styled from "styled-components";

export const Sidebar = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: max-content;
  grid-gap: 10px;
  width: 300px;
`;

export const CardItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 125px;
  height: 107px;
  border-radius: 5px;
  background-color: white;
  -webkit-box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  &:hover {
    -webkit-box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.08);
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.08);
  }
`;
export const Title = styled.span`
  font-size: 14px;
  line-height: 21px;
  font-weight: 600;
  font-style: normal;
  color: #212121;
`;
export const BoxIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center:
    width: 80px;
    height: 40px;
    padding: 1rem;
`;
