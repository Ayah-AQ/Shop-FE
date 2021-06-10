//Styles
import { DeleteButtonStyled } from "../../style";

const DeleteButton = (props) => {
  const handleDelete = () => {
    props.deleteProduct(props.productId);
  };
  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;