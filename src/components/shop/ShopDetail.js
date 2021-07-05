import { useParams, Redirect, Link } from "react-router-dom";
import { useSelector } from "react-redux";
// Components
import ProductList from "../Products/ProductList";
// Styling
import { DetailWrapper, List } from "../../style";
import DeleteButton from "../Buttons/Delete";
import { deleteProduct } from "../../store/actions/productActions";
import { BsPlusSquare } from "react-icons/bs";

const ShopDetail = () => {
 
  const shops = useSelector((state) => state.shops.shops);
  const allProducts = useSelector(
    (state) => state.products.products
  );
  const { shopSlug } = useParams();
  const shop = shops.find(
    (_shop) => _shop.slug === shopSlug
  );

  if (!shop) {
    return <Redirect to="/shops" />;
  }
  let products = [];
  if (shop.products) {
    products = allProducts.filter((_product) => _product.shopId === shop.id)
    
  }

  return (
    
   <>
   <DetailWrapper>
     <div className="">
       <h3 className="mt-5">{shop.name}</h3>
       <Link
         to={{
           pathname: `/shops/${shop.id}/products/new`,
           state: { shopId: shop.id },
         }}
       >
         {" "}
         <BsPlusSquare size="50px" >
           Add Product
         </BsPlusSquare>
       </Link>
     </div>
   </DetailWrapper>
   {products.length > 0 ? (
     <List>
       <ProductList products={products} />
     </List>
   ) : (
     <List>No Products yet</List>
   )}
 </>
  );
};

export default ShopDetail;