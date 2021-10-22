import React from "react";
import {
  NavbarContainer,
  NavbarNav,
  NavbarMenu,
  NavbarItem,
  NavbarLink,
} from "./NavbarElements";

const Navbar = () => (
  <NavbarNav>
    <NavbarContainer>
      <NavbarMenu>
        <NavbarItem>
          <NavbarLink>Portfolio</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink>Skills</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink>Contato</NavbarLink>
        </NavbarItem>
      </NavbarMenu>
    </NavbarContainer>
  </NavbarNav>
);

export default Navbar;
