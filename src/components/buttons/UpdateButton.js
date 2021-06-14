import { Link } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";
import { AddButtonStyled } from "../../style";

const UpdateButton = ({ productSlug }) => {
  return (
    <AddButtonStyled>
      <Link to={`/products/${productSlug}/edit`}>
        <MdModeEdit color="blue" size="1.5em" />
      </Link>
    </AddButtonStyled>
  );
};

export default UpdateButton;