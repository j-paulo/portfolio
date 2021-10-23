import styled, { keyframes } from "styled-components";

export const NavbarNav = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
  font-size: 1rem;
  top: 0;
  justify-content: center;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  justify-content: space-between;
`;

const animatedLogo = keyframes`
  0% { background-image: linear-gradient(to left, white, #caccd1); -webkit-background-clip: text; color: transparent; font-size:23px; }
  25% { background-image: linear-gradient(to left, #caccd1, #000000); -webkit-background-clip: text; color: transparent; font-size:24px; }
  50% { background-image: linear-gradient(to left, #000000, #caccd1); -webkit-background-clip: text; color: transparent; font-size:26px; }
  75% { background-image: linear-gradient(to left, #caccd1, #dddddd); -webkit-background-clip: text; color: transparent; font-size:24px; }
  100% { background-image: linear-gradient(to left, #dddddd, white); -webkit-background-clip: text; color: transparent; font-size:22px; }  
`;

export const NavLogo = styled.a`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 22px;

  &:hover {
    animation-name: ${animatedLogo};
    animation-duration: 0.18s;
  }
`;

export const NavbarMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  justify-content: right;
`;

export const NavbarItem = styled.li``;

const animatedMenuOver = keyframes`
  from {
    width: 0;
  }
  to {
    width: 50%;
  }
`;

const animatedMenuOff = keyframes`
  from {
    width: 50%;
  }
  to {
    width: 0;
  }
`;

export const NavbarLink = styled.a`
  color: white;
  text-transform: uppercase;
  display: flex;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    border-bottom: 1px solid white;
    position: absolute;
    bottom: 0;
    animation-name: ${animatedMenuOff};
    animation-duration: 0.5s;
  }

  &:hover {
    &::after {
      animation-name: ${animatedMenuOver};
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }
  }
`;
