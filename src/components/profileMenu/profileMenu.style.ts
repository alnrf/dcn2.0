import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  height: 371px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 238px;
  background-color: #fff;

  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const MenuItem = styled.div`
    display: flex;
    width: 100%;
    height: 53px;
    flex-direction: row;
    align-items: center;
    padding: 0 0 0 60px;
    background-color: #fff;
    border-left-style: solid;
    border-left-width: 5px;
    span {
        font-size: 15px:
        font-style: normal;
        font-weight: 700;
        line-height: 23px;
        color: #134b8b;
    }
`;

export const Logout = styled.div`
    display: flex;
    width: 100%;
    height: 133px;
    flex-direction: row;
    align-items: center;
    padding: 0 0 0 60px;
    background-color: #F7F7F7;
    border-bottom-right-radius: 8px; border-bottom-left-radius: 8px;
    span {
        font-size: 15px:
        font-style: normal;
        font-weight: 700;
        line-height: 23px;
        color: #134b8b;
    }
`;
