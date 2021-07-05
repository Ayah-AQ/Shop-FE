
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
    background-color:aliceblue;
  }
`;
export const ThemeButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
   color: ${(props) => props.theme.backgroundColor};
`;
export const SignOutStyled = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${(props) => props.theme.pink};
  color: palevioletred;
  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.pink};
  }
`;
export const UserButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: #ff85a2;
  color: black;
  margin-right: 10px;
`;
