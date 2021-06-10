
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Theme={
  mainColor:"#d8f8b7",
  backgroundColor:"rgb(216, 226, 225)",
  textColor:"#e6c4c0",
  
  }


export const Logo = styled(Link)`
  padding: 0.8em 0.5em;
  img {
    width: 8rem;
  }
`;

export const NavItem = styled(NavLink)`
  color: ${(props) => props.theme.mainColor};
  padding: 0.25em 1em;
  &.active {
    color:blueviolet;
  }
`;
export const ThemeButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;