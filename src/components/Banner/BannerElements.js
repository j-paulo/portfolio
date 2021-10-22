import { Container } from "styled-bootstrap-grid";
import styled from "styled-components";

export const BannerContainer = styled.div`
  height: 800px;
  display: flex;
`;

export const BannerLayer = styled.div`
  z-index: 2;
  background-image: linear-gradient(to bottom, transparent, black);
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

export const BannerCircle = styled.div`
  background-color: #1c202a;
  border-radius: 50%;
  width: 250px;
  padding: 50px 20px;
  margin: 0 auto;
  text-align: center;
  color: white;
`;

export const BannerH1 = styled.h1`
  text-transform: uppercase;
`;

export const BannerHr = styled.hr`
  width: 50%;
  margin: 20px auto;
`;
