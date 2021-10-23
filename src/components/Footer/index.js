import React from "react";
import { Row, Col, Container } from "styled-bootstrap-grid";
import Copyright from "../Copyright";
import {
  FooterContainer,
  FooterSpan,
  FooterHr,
  FooterUl,
  FooterI,
  FooterIcon,
  FooterLink,
} from "./FooterElements";
import imgInsta from "../../img/insta.png";
import imgLinkedin from "../../img/linkedin.png";
import imgWhats from "../../img/whats.png";
import imgFace from "../../img/face.png";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Container>
          <Row>
            <Col md>
              <FooterSpan>Infos</FooterSpan>
              <FooterHr />
              <FooterI>João Paulo Duprat Pohlmann</FooterI>
              <br />
              <FooterI>Full Stack Developer</FooterI>
            </Col>
            <Col md>
              <FooterSpan>Social Network</FooterSpan>
              <FooterHr />
              <FooterUl>
                <li>
                  <FooterLink>
                    <FooterIcon src={imgInsta} />
                  </FooterLink>
                </li>
                <li className="pl-1">
                  <FooterLink>
                    <FooterIcon src={imgLinkedin} />
                  </FooterLink>
                </li>
                <li className="pl-1">
                  <FooterLink>
                    <FooterIcon src={imgWhats} />
                  </FooterLink>
                </li>
                <li className="pl-1">
                  <FooterLink>
                    <FooterIcon src={imgFace} />
                  </FooterLink>
                </li>
              </FooterUl>
            </Col>
            <Col md>
              <FooterSpan>Infos</FooterSpan>
              <FooterHr />
              <FooterI>João Paulo Duprat Pohlmann</FooterI>
              <br />
              <FooterI>Full Stack Developer</FooterI>
            </Col>
          </Row>
        </Container>
      </FooterContainer>
      <Copyright />
    </>
  );
};

export default Footer;
