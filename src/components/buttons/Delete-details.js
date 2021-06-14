//Styles
import { DeleteButtonStyledDetailed } from "../../styles";
import { deleteProduct } from "../../store/actions";
import { useDispatch } from "react-redux"
// const DeleteButtonDetailed = (props) => {
//   const handleDelete = () => {
//     props.deleteProduct(props.productId);
//   };
//   return (
//     <DeleteButtonStyledDetailed onClick={handleDelete}>
//       Delete
//     </DeleteButtonStyledDetailed>
//   );
// };

;

const DeleteButtonStyledDetailed = ({ productId }) => {
  const dispatch = useDispatch();


  return (
    <DeleteButtonStyled onClick={() => dispatch(deleteProduct(productId))}>
      Delete
    </DeleteButtonStyled>
  ); 
};

export default DeleteButtonDetailed;