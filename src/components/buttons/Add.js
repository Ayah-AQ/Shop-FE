
import { Link } from "react-router-dom";
import { MdAddCircle } from "react-icons/md";
import { AddButton } from "../../style";

const AddButton = () => {
  return (
    <AddButton>
      <Link to="products/new">
        <MdAddCircle color="#ff85a2" size="1.5em" />
      </Link>
    </AddButton>
  );
};

export default AddButton;
