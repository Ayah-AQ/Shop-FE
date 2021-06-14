import { useState } from "react";
import { Switch, Route } from 'react-router-dom';
//styles
import { ThemeProvider } from "styled-components";
import { GlobalStyle} from "./style";
//components
import Animelist from "./components/Animelist"
import Home from "./components/Home"
import NavBar from './components/Navbar';
import products from "./components/dataproducts"
import ProductList from "./components/ProductList"
import ProductDetail from "./components/Product-details";
import NotFound from "./components/PagenotFound/NotFound";
import ProductForm from "./components/CreateProd"

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
// Details & delete &ack

  const [_products, setProducts] = useState(products);
    
    const deleteProduct = (productId) => {
      const updatedProducts = _products.filter(
        (product) => product.id !== productId
      );
      setProducts(updatedProducts);
    };
  
    const [product, setProduct] = useState(null);
    const display = product ? (
      <ProductDetail
        deleteProduct={deleteProduct}
        products={_products}
        setProduct={setProduct}
      />
    ) : (
      <ProductList
        products={_products}
        deleteProduct={deleteProduct}
        setProduct={setProduct}
      />
    );
  
         return (    
        
          <ThemeProvider theme={theme[currentTheme]}>
          <GlobalStyle />  
          {/* <ThemeButton onClick={ToggleCurrentTheme}>
            {currentTheme === "light" ? "Dark" : "Light"} Mode
         </ThemeButton> */}
         <NavBar currentTheme={currentTheme} ToggleCurrentTheme={ToggleCurrentTheme} />
      <Switch>
      <Route path={["/products/new", "/products/:productSlug/edit"]}>
          <ProductForm />
        </Route>
                
        <Route path="/products/:productSlug">
        <ProductDetail
        deleteProduct={deleteProduct}
        products={_products}
        setProduct={setProduct}
      />
      
        </Route>
        <Route path="/products">
        <ProductList
        products={_products}
        deleteProduct={deleteProduct}
        setProduct={setProduct}
      />
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
     