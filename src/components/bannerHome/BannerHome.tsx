import React from "react";

import * as SC from "./bannerHome.style";

const Banner = ({ item }: any) => {
  return (
    <SC.ImageWrapper>
      <SC.ImageContainer src={item} alt="Churrasco" />
    </SC.ImageWrapper>
  );
};

export default Banner;
