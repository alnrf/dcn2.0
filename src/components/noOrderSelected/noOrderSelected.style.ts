import styled from "styled-components";

export const NoResultWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;

  h3 {
    font-size: 24px;
    color: #0d1136;
    margin: 0 0 15px;
  }

  p {
    font-size: 151px;
    font-weight: 400;
    color: #77798c;
    margin: 0;
  }
`;

export const ImageWrapper = styled.div`
  margin-top: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  img {
    max-width: 100%;
  }
`;
