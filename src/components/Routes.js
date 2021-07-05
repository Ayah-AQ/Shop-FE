import Animelist from "./Animelist"
import { Switch, Route, } from 'react-router-dom';
import Home from "./Home"
import ProductList from "./Products/ProductList"
import ProductDetail from "./Products/ProductDetails";
import NotFound from "./PagenotFound/NotFound";
import ProductForm from "./Products/CreateProd"
import ShopList from "./shop/ShopList";
import ShopDetail from "./shop/ShopDetail";
import ShopForm from "./shop/ShopCreate";
import { useSelector } from "react-redux";
import Signup from "./User/SignUp";
import Signin from "./User/SignIn";

const Routes = () => {
    const products = useSelector(state => state.products.products);  
      return (
    
   
    <Switch>
    <Route path={["/shops/:shopId/products/new"]}>
              <ProductForm />
     </Route>

    <Route path="/shops/new">
              <ShopForm />
      </Route>
               
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

    <Route path="/signup">
        <Signup />
    </Route>

    <Route path="/signin">
        <Signin />
     </Route>

    <Route exact path="/">
        <Home />
      </Route>

      {/* Error */}
      <Route>
        <NotFound />
      </Route>
      
           </Switch>
              
      
        );
    };
    
    export default Routes;