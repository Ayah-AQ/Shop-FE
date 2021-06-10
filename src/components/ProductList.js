import { useState } from "react";
//styles
import{List} from "../style"
import { ListWrapper } from "../style";
//Components
import SearchBar from "./Search-bar";
import ProductItem from "./Prod-item";

const ProductList=(props)=>{
  // serch & Delete
     const [query, setQuery] = useState("");
    const products = props.products
   .filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => (
  <ProductItem
    product={product}
    key={product.id}
    setProduct={props.setProduct}
    deleteProduct={props.deleteProduct}
  />
  
));

  return (
    <div>
    <SearchBar setQuery={setQuery} />
    <ListWrapper><List>{products}</List></ListWrapper>
</div>
   )
}
   export default ProductList
