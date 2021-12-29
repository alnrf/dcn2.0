import styled from "styled-components";
import css from "@styled-system/css";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 128px;
  position: relative;
  flex-direction: row;
  background-color: #ffffff;
  padding: 16px 24px 16px 24px;
  justify-content: space-between;
  align-items: center;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
`;

export const LogoBox = styled.span(
  css({
    color: "text.bold",
    fontSize: 26,
    fontWeight: "bold",
    cursor: "pointer",
    mr: [0, 20, 40],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })
);

export const LogoImage = styled.img`
  display: block,
  backfaceVisibility: hidden,
  maxWidth: 150,
`;

export const LinkWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const NavLink = styled(Link)`
  display: flex; color: #0d1136;
  flex-direction: row;
  text-decoration: none;
  text-decoration-color: #0d1136;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  margin: 0 32px 0 0;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #5880ad;
  }
  &:visited {
    #0d1136
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--activeButton);
  color: var(--white);
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: var(--txtHoverBlue);
  }
`;

export const WrapUser = styled.div`
  display: flex;
  height: 33px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #ffffff;
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Greeting = styled.div`
  display: flex;
  width: 100%;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  background-color: #ffffff;
`;

export const Name = styled.div`
  display: flex;
  width: 100%;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  color: #1b5fac;
  background-color: #ffffff;
  margin: 0 0 0 4px;
`;

export const MenuContainer = styled.div`
  display: flex;
  position: absolute;
  right: 24px;
  top: 100px;
  width: 200px;
  border-radius: 6px;
  align-items: center;
  flex-direction: column;
  padding: 16px 0;
  background-color: #fff;
  -webkit-box-shadow:   0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
`;

export const ButtonMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0 0 32px;
  width: 100%;
  height: 45px;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  color: #134b8b;
  background-color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: var(--txtHoverBlue);
    color: #ffffff;
  }
`;

export const ButtonMenuLink =styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0 0 32px;
  width: 100%;
  height: 45px;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  color: #134b8b;
  background-color: #ffffff;
  text-decoration: none;
  text-decoration-color: #134b8b;
  cursor: pointer;
  &:visited {
    #134b8b
  }
  &:hover {
    background-color: var(--txtHoverBlue);
    color: #ffffff;
  }
`;