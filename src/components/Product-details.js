  
import {Link,Redirect, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
//styles
import { DetailWrapper, BackButton } from "../style";
//Components
import DeleteButton from "./buttons/Delete";

const ProductDetail = (props) => {
  // const product = props.product;

  // const handleDelete = (productId) => {
  //   props.deleteProduct(productId);
  //   props.setProduct(null);
  // };

  const productSlug = useParams().productSlug;
    const product = props.products.find(
    (product) => product.slug == productSlug
  );   
  if (!product) return <Redirect to="/Error"></Redirect>;

  return (
    <DetailWrapper>
          {/* <Link to={`/products/${props.product.slug}`}></Link> */}
       <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} JD </p>
      <BackButton className="detail" onClick={() => props.setProduct(null)}>
        Back
      </BackButton>
      <DeleteButton
        productId={product.id}
        deleteProduct={props.deleteProduct}
      />
    </DetailWrapper>
  );
};

export default ProductDetail;