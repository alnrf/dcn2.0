import styled from "styled-components";
import css from "@styled-system/css";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
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
