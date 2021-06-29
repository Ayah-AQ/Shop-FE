//Styles
import { DeleteButton} from "../../styles";
import { deleteProduct } from "../../store/actions/actions";
import { useDispatch } from "react-redux"
// const DeleteButtonDetailed = (props) => {
//   const handleDelete = () => {
//     props.deleteProduct(props.productId);
//   };
//   return (
//     <DeleteButtononClick={handleDelete}>
//       Delete
//     </DeleteButtononClick=>
//   );
// };

;

const DeleteButton= ({ productId }) => {
  const dispatch = useDispatch();


  return (
    <DeleteButton onClick={() => dispatch(deleteProduct(productId))}>
      Delete
    </DeleteButton>
  ); 
};

export default DeleteButtonDetailed;