import { useState,useDispatch } from "react";
import { Switch, Route, } from 'react-router-dom';
//styles
import { ThemeProvider } from "styled-components";
import { GlobalStyle} from "./style";
//components
import Animelist from "./components/Animelist"
import Home from "./components/Home"
import NavBar from './components/Navbar';
import ProductList from "./components/Products/ProductList"
import ProductDetail from "./components/Products/Product-details";
import NotFound from "./components/PagenotFound/NotFound";
import ProductForm from "./components/Products/CreateProd"
import ShopList from "./components/shop/ShopList";
import ShopDetail from "./components/shop/ShopDetail";
import ShopForm from "./components/shop/ShopCreate";
import { useSelector } from "react-redux";

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
  const products = useSelector(state => state.products.products);
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

         {/*Roues -------------------------------------------*/}
      <Switch>
      <Route path={["/shops/:shopId/products/new", "/products/:productSlug/edit"]}>
                <ProductForm />
            </Route>
            <Route path="/shops/new">
                <ShopForm />
            </Route>
           
      {/* <Route path={["/products/new", "/products/:productSlug/edit"]}>
          <ProductForm />
        </Route> */}
                
        <Route path="/products/:productSlug">
        <ProductDetail/>
       </Route>
      
        <Route path="/products">
        <ProductList products={products}/>
         </Route>
         <Route path="/shops/:shopSlug">
          <ShopDetail />
        </Route>
        <Route path="/shops">
          <ShopList />
        </Route>
      <Route path="/List">
          <Animelist  />
        </Route>
        
      <Route exact path="/">
          <Home />
        </Route>

        {/* Error */}
        <Route>
          <NotFound />
        </Route>
        
             </Switch>
                
          {/* {display} */}
      
         </ThemeProvider>
     
 )};

export default App ;
     