import { Container, Row } from "styled-bootstrap-grid";
import styled from "styled-components";

export const BannerContainer = styled.div`
  height: 800px;
  display: flex;
  position: relative;
`;

export const BannerLayer = styled.div`
  z-index: 2;
  background-image: linear-gradient(to bottom, transparent, #22211f);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  overflow: hidden;
`;

export const BannerBg = styled.div`
  z-index: 1;
  background: url(${(props) => props.img}) no-repeat center bottom;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  overflow: hidden;
`;

export const BannerContent = styled(Container)`
  z-index: 3;
  position: relative;
`;

export const BannerRow = styled(Row)`
  align-items: center;
  height: 80%;
`;

export const BannerH2 = styled.h2`
  font-size: 52px;
  border-left: 5px solid #ea2433;
  padding-left: 20px;
  line-height: 56px;
  margin-bottom: 30px;
`;

export const BannerP = styled.p`
  font-weight: 200;
  font-size: 18px;
  text-decoration: none;
`;

export const BannerButton = styled.button`
  background-color: transparent;
  padding: 12px 22px;
  border: 1px solid #ea2433;
  border-radius: 20px;
  margin-top: 30px;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
`;

export const BannerImg = styled.img`
  filter: brightness(0.9);
  display: flex;
  margin-left: auto;
`;
