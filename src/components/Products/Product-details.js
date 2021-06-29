  
import {Link,Redirect, useParams } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { AiTwotoneEdit } from "react-icons/ai";
//styles
import { DetailWrapper, BackButton, ButtonsWrapper  } from "../../style";
//Components
import UpdateButton from "../Buttons/UpdateButton";
import DeleteButton from "../Buttons/Delete";

const ProductDetail = () => {
  // const product = props.product;

  // const handleDelete = (productId) => {
  //   props.deleteProduct(productId);
  //   props.setProduct(null);
  // };
  
  const productSlug = useParams().productSlug
  const products= useSelector((state)=> state.products.products)
  const dispatch= useDispatch()
  const product=products.find((product)=> product.slug === productSlug)
   if (!product) return <Redirect to="/Error" />;
 
  return (
    <DetailWrapper>
          {/* <Link to={`/products/${props.product.slug}`}></Link> */}
       <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} JD </p>
      {/* <BackButton className="detail" onClick={() => props.setProduct(null)}>
        Back
      </BackButton> */}
      <DeleteButton productId={product.id} />
      <UpdateButton className="float-right" productSlug={product.slug} />
          {/* <BackButton onClick={() => props.setProduct(null)}>
             back
          </BackButton> */}
           <Link to="/products">
          <BackButton  type="back"className="btn btn-success" color="blue">Back</BackButton>
        </Link>
        </DetailWrapper>
        
  );
};

export default ProductDetail;