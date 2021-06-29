import { useState } from "react";
import {Link} from "react-router-dom"

//styles
import{List, ListWrapper} from "../../style"
//Components
import SearchBar from "./SearchBar";
import {useSelector} from 'react-redux';
import ProductItem from "..//Products/Prod-item";
import {BsPlusSquare} from "react-icons/bs";

const ProductList=(props)=>{

  // serch & Delete
  const [query, setQuery] = useState("");
//    
const products= props.products?? useSelector(state=>state.products.products)
// const product= useSelector((state) => state.products);
// const loading= useSelector((state) => state.loading)

// if (loading) return <h1>loading</h1>
// console.log(product)

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
  return (
    <div>
      <SearchBar setQuery={setQuery} />
       
        <ListWrapper><List>{ProductList}</List></ListWrapper>
 
    
      
</div>
   )
}
   export default ProductList
