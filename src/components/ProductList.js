import { useState } from "react";
import {Link} from "react-router-dom"

//styles
import{List} from "../style"
import { ListWrapper } from "../style";
//Components
import SearchBar from "./Search-bar";
import {useSelector} from 'react-redux';
import ProductItem from "./Prod-item";
import {BsPlusSquare} from "react-icons/bs";

const ProductList=(props)=>{

  // serch & Delete
  const [query, setQuery] = useState("");
//    
const products= useSelector((state) => state.products);

  const ProductList = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
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
       
    <Link to="/products/new" >
        <BsPlusSquare className="float-right" size="2em" />
      </Link> 

    <ListWrapper><List>{ProductList}</List></ListWrapper>
 
    
      
</div>
   )
}
   export default ProductList
