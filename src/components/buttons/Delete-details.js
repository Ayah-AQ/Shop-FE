//Styles
import { DeleteButtonStyledDetailed } from "../../styles";

const DeleteButtonDetailed = (props) => {
  const handleDelete = () => {
    props.deleteProduct(props.productId);
  };
  return (
    <DeleteButtonStyledDetailed onClick={handleDelete}>
      Delete
    </DeleteButtonStyledDetailed>
  );
};

export default DeleteButtonDetailed;