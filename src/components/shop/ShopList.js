// Styling
import { ListWrapper } from "../../style";
// Components
import ShopItem from "./ShopItem";
import SearchBar from "../Products/SearchBar";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import Add from "../Buttons/Add";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

const ShopList = () => {
  const [query, setQuery] = useState("");

  const shops = useSelector((state) => state.shops.shops);

  const user = useSelector((state) => state.products.products);

    const shopList = shops
    .filter((shop) => shop.name.toLowerCase().includes(query.toLowerCase()))
    .map((shop) => <ShopItem shop={shop} key={shop.id} />);

  return (
    <div>
      <Helmet>
        <title>Shops List </title>
      </Helmet>
      <SearchBar setQuery={setQuery} />
      <Link to="/shops/new">
        <Add />
      </Link>
      <ListWrapper>{shopList}</ListWrapper>
    </div>
  );
};

export default ShopList;