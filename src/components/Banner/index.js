import React from "react";
import Navbar from "../Navbar";
import {
  BannerBg,
  BannerCircle,
  BannerContainer,
  BannerContent,
  BannerLayer,
  BannerH1,
  BannerHr,
} from "./BannerElements";
import imgFundo from "../../img/fundos.jpg";
import { Col, Row } from "styled-bootstrap-grid";

const Banner = () => (
  <BannerContainer>
    <BannerLayer></BannerLayer>
    <BannerBg img={imgFundo}></BannerBg>
    <BannerContent>
      <Navbar />
      <BannerCircle>
        <BannerH1>
          Hi! <br />
          I'm Johnny
        </BannerH1>
        <BannerHr />
        <span>Full Stack Developer</span>
      </BannerCircle>
    </BannerContent>
  </BannerContainer>
);

export default Banner;
