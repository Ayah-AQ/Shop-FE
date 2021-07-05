import { ProductWrapper } from "../../style";
import { Link } from "react-router-dom";

const ShopItem = ({shop}) => {
  

  return (
    <ProductWrapper>
    <Link to={`/shops/${shop.slug}`}>
        <img src={shop.image} alt="foodphoto" />
      </Link>
      <p>{shop.name}</p>
    </ProductWrapper>
  );
};

export default ShopItem;