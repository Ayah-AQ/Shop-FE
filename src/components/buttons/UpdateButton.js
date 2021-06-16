import { Link } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";
import { AddButton } from "../../style";

const UpdateButton = ({ productSlug }) => {
  return (
    <AddButton>
      <Link to={`/products/${productSlug}/edit`}>
        <MdModeEdit color="blue" size="1.5em" />
      </Link>
    </AddButton>
  );
};

export default UpdateButton;