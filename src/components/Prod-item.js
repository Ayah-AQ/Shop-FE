//styles
import { ProductWrapper } from "../style";
import { Link } from "react-router-dom";
import { useState } from "react";
//components
import DeleteButton from "./buttons/Delete";

const ProductItem = (props) => {
  console.log(props);
  const [photo, setPhoto] = useState(props.product.image);
 
  return (
    <ProductWrapper>
      <Link to={`/products/${props.product.slug}`}>
        <img
           src={photo}
        //  onMouseOver={() => setPhoto(props.product.image)}
        />
      </Link>
      {/* <img
        alt={product.name}
        src={product.image}
        
      /> */}
      <p>{props.product.name}</p>
      <p className="product-price">{props.product.price} JD</p>
      <DeleteButton
        productId={props.product.id}
        deleteProduct={props.deleteProduct}
      />
    </ProductWrapper>
  );
};

export default ProductItem;