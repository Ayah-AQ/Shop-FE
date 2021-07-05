// Styling
import { List, ListWrapper, Title } from "../../style";
// Components
import ShopItem from "./ShopItem";
import SearchBar from "../Products/SearchBar";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import Add from "../Buttons/Add";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import Loading from "../Loading";

const ShopList = () => {
  const [query, setQuery] = useState("");
  const loading = useSelector((state) => state.shops.loading);
  const shops = useSelector((state) => state.shops.shops 
  .filter((shop) =>
  shop.name.toLowerCase().includes(query.toLowerCase())
)
  .map((shop) => <ShopItem key={shop.id} shop={shop} />));

return (
<div>
  {loading ? <Loading /> : false}
<Title>Shop List</Title>
<SearchBar setQuery={setQuery} /> 
<Link to={`/shops/new`}>
       <AiOutlineAppstoreAdd style={{width:"50px", height:"50px"}}  />
  </Link>
<ListWrapper><List style={{flexDirection: "row", 
flexWrap: "wrap"}}>
   {shops}
 

</List>  </ListWrapper>
</div>
  );
};

export default ShopList;