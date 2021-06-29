import { useParams, Redirect, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {Helmet} from "react-helmet";

// Components
import ProductList from "../Products/ProductList";
// Styling
import { DetailWrapper } from "../../style";
import DeleteButton from "../Buttons/Delete";
import { deleteProduct } from "../../store/actions/productActions";
import { BsPlusSquare } from "react-icons/bs";

const ShopDetail = () => {
  const { shopSlug } = useParams();

  const allProducts = useSelector((state) => state.products.products);
  const shops=useSelector((state) => state.shops.shops)
  const shop = useSelector((state) => {
    return shops.find((shop) => shop.slug === shopSlug);
  });

  console.log(shop);
  const products = shops.products.map((products) =>
    allProducts.find((_products) => _products.id === products.id)
  );

  if (!shop) return <Redirect to="/Error" />;

  return (
    <>
   <DetailWrapper>
        <Helmet>
          <title>{`${shop.name} Details`} </title>
        </Helmet>
        <h1>{shop.name}</h1>
        <img src={shop.image} alt={shop.name} />
      </DetailWrapper>
    <ProductList products={lestOfProducts} />
    <Link to={`/shops/${shop.id}}/products/new`} >
        <BsPlusSquare className="float-right" size="2em" />
      </Link> 
      <ShopProductList products={products} />
 
  </>
  );
};

export default ShopDetail;