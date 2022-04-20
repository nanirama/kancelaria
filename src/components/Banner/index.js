import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import {BannerBlock} from "./styled"

const Banner = () => {
return(
   <BannerBlock>
       <StaticImage src="../../assets/images/banner.png" alt="" />
   </BannerBlock>
);
};

export default Banner;