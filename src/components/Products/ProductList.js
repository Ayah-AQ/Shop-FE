import { useState } from "react";
import {Link,Redirect} from "react-router-dom"

//styles
import{List, ListWrapper} from "../../style"
//Components
import SearchBar from "./SearchBar";
import {useSelector} from 'react-redux';
import ProductItem from "./ProdItem";
import {BsPlusSquare} from "react-icons/bs";
import Loading from "../Loading";

const ProductList=(props)=>{
  const user = useSelector((state) => state.users.user);

  // serch & Delete
  const [query, setQuery] = useState("");
//    
const loading = useSelector((state) => state.products.loading);
const products= props.products?? useSelector(state=>state.products.products)
  const ProductList = products
     .filter((product) =>
      product.name.includes(query)
    )
    .map((product) => (
      <ProductItem
          product={product}
          key={product.id}
          setProduct={props.setProduct}
          deleteProduct={props.deleteProduct}
           />));
           if (!user) return <Redirect to="/" />;
  return (
    <div>
       {loading ? <Loading /> : false}
      <SearchBar setQuery={setQuery} />
       
        <ListWrapper><List style={{flexDirection: "row", 
flexWrap: "wrap"}}>{ProductList}</List></ListWrapper>
 
    
      
</div>
   )
}
   export default ProductList
