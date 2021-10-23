import React from "react";
import Navbar from "../Navbar";
import {
  BannerBg,
  BannerContainer,
  BannerContent,
  BannerLayer,
  BannerRow,
  BannerH2,
  BannerP,
  BannerImg,
  BannerButton,
} from "./BannerElements";
import imgFundo from "../../img/fundos.jpg";
import imgProjetta from "../../img/projetta.png";
import { Col } from "styled-bootstrap-grid";

const Banner = () => (
  <BannerContainer>
    <BannerLayer></BannerLayer>
    <BannerBg img={imgFundo}></BannerBg>
    <BannerContent>
      <Navbar />
      <BannerRow>
        <Col md>
          <BannerH2>Projetta Expositores</BannerH2>
          <BannerP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </BannerP>
          <BannerButton>Saiba mais</BannerButton>
        </Col>
        <Col md>
          <BannerImg src={imgProjetta} />
        </Col>
      </BannerRow>
    </BannerContent>
  </BannerContainer>
);

export default Banner;
