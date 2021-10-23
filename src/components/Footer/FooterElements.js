import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  background-color: #2d2c2a;
  padding: 5vh 0;
`;

export const FooterSpan = styled.span`
  filter: opacity(0.6);
  text-transform: uppercase;
`;

export const FooterHr = styled.hr`
  filter: opacity(0.6);
  margin: 4px 0 12px 0;
  width: 15%;
`;

export const FooterUl = styled.ul`
  list-style: none;
  display: flex;

  .pl-1 {
    padding-left: 10px;
  }
`;

export const FooterI = styled.i`
  filter: opacity(0.9);
  font-weight: 300;
  font-size: 14px;
`;

export const FooterIcon = styled.img`
  width: 36px;
  filter: invert(1) opacity(0.5);
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    filter: invert(1) opacity(0.8);
  }
`;

export const FooterLink = styled.a`
  cursor: pointer;
`;
