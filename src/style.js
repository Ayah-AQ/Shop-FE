import styled from "styled-components";
import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
display: flex;
align-items: center;
  text-align: center;
 justify-content:space-between;
 padding-top: 40px ;
h1{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 
}
body {
  background-color:${(props) => props.theme.backgroundColor};
  align-items: center;
  text-align: center;
 justify-content:space-between;
 flex-direction: column;
}


`
export const Theme={
  mainColor:"#d8f8b7",
  backgroundColor:"rgb(216, 226, 225)",
  textColor:"#e6c4c0",
  light: {
    mainColor:"#39a6a3",
  backgroundColor:"rgb(216, 226, 225)",
  textColor:"#231e23",
},
 
  dark: {
    mainColor:"rgb(216, 226, 225)",
    backgroundColor:"#231e23",
    textColor:"rgb(216, 226, 225)",  },
};
  

export const List= styled.div`
gap:30px;

align-items:  center;
    text-align: center;
   display:flex;
   justify-content:space-between;
   padding-top: 90px ;
   `

export const Item= styled.div`
background-color:${(props) => props.theme.backgroundColor};
h1{
  text-align: center;
  padding-left: 30%;
  padding-right: 30%;
  background-color: black;
  color: blanchedalmond;
}
h4{
  text-align: center;  
  padding-left: 30%;
padding-right: 30%;
}
img{
  padding-left: 30%;
padding-right: 30%;
 height: 40%;
 width: 40%;
align-items: center;
};`

export const Ul=styled.ul`
text-align: left;
    font-size: large;
    padding-left: 50%;
    background-color: "#e2bcb7";
  

`
export const Tr=styled.td`
 align-items:  center;
    text-align: center;
    display:table-row-group;
    justify-content:center;
   padding-top: 2%;
    width: 100px;
    height: 100px;
   `
export const ThemeButton = styled.button`
background-color: "#39a6a3";
font-size: 1em;
margin: 1.25em;
padding: 0.25em 1em;
border-radius: 3px;
background-color: ${(props) => props.theme.mainColor};
color: ${(props) => props.theme.backgroundColor};
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  img {
    width: 40%;
    float: left;
  }
  p {
    vertical-align: middle;
  }
`;
export const BackButton = styled.button`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
  border: 2px solid ${(props) => props.theme.mainColor};
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  margin: 0 auto;
  display: block;
  margin-right: 1%;
  
  &:hover {
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.backgroundColor};
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const DeleteButtonStyled = styled.button`
  background-color: white;
  color: black;
  border: 2px solid #39a6a3;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  margin: 0 auto;
  display: block;
  &:hover {
    background-color: #39a6a3;
    color: white;
  }
`;

export const DeleteButtonStyledDetailed = styled.button`
  background-color:"#39a6a3";
  color: black;
  border: 2px solid #39a6a3;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  margin: 0 auto;
  display: block;
 
  &:hover {
    background-color: #deeeea;
    color: white;
  }
`;
export const ProductWrapper = styled.div`
  margin: 20px;
  img {
    width: 200px;
    height: 200px;
  }
  p {
    text-align: center;
    &.product-price {
      color: ${(props) => props.theme.pink};
    }
  }
`;export const ListWrapper = styled.div`
align-items: center;
justify-content: center;
display: flex;
`;
export const Button = styled.button`
  background: ${(props) => props.color ?? "white"};
  color: ${(props) => props.textColor ?? "black"};
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  text-align: center;
  text-decoration: none;
  outline: none;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  &:hover {
    box-shadow: 0 9px #aaa;
  }
  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;


export const NavItem = styled(NavLink)`
  color: ${(props) => props.theme.mainColor};
  padding: 0.25em 1em;
  &.active {
    color: ${(props) => props.theme.pink};
  }
`;