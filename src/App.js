import { useState,useDispatch } from "react";

//styles
import { ThemeProvider } from "styled-components";
import { GlobalStyle} from "./style";
//components

import NavBar from './components/Navbar';
import Route from "./components/Routes"

//Dark&Light Theme
const theme = {
  light: {
    mainColor:"#39a6a3",
  backgroundColor:"rgb(216, 226, 225)",
  textColor:"#231e23",
},
 
  dark: {
    mainColor: "rgb(216, 226, 225)",
    backgroundColor:"#231e23",
    textColor:"rgb(216, 226, 225)",  },
};
// Code
function App() {
  //Theme
  const [currentTheme, setCurrentTheme] = useState("light");
  const ToggleCurrentTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };

  
         return (    
        //theme --------------------------
          <ThemeProvider theme={theme[currentTheme]}>
          <GlobalStyle />  
          
         {/*NavBar-------------------------------------------------------*/}
         <NavBar currentTheme={currentTheme} ToggleCurrentTheme={ToggleCurrentTheme} />
        <Route/>
     
         </ThemeProvider>
     
 )};

export default App ;
     