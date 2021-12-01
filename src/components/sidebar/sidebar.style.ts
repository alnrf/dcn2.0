import styled from "styled-components";

export const Aside = styled.div`
    width: 300px;

   
    border: 1px solid black;
  `;

export const CardMenuWrapper = styled.div`
    marginTop: 30px,
    display: grid,
    gridGap: 10px,
    gridTemplateColumns: 1fr 1fr,
    gridAutoRows: max-content,
    paddingBottom: 30,
  
    @media (min-width: 550px) and (max-width: 990px) {
      gridTemplateColumns: 1fr 1fr 1fr,
    },
  `;

export const MobileOnly = styled.div`
    display: none,
    zIndex: 10,
  
    @media (max-width: 990px) {
      display: block,
    },
  `;

export const DesktopOnly = styled.div`
    display: none,
    @media (min-width: 991px) {
      display: block,
    },
  `;
