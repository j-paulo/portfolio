import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: right;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavbarNav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: right;
  align-items: center;
  font-size: 1rem;
  top: 0;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
`;

export const NavbarItem = styled.li`
  height: 80px;
`;

export const NavbarLink = styled.a`
  color: white;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;
