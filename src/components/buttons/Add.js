
import { Link } from "react-router-dom";
import { MdAddCircle } from "react-icons/md";
import { useSelector } from "react-redux";
import { AddButton } from "../../style";

const Addbutton = () => {
   return (
    <button
      type="button"
      class="btn btn-info mt-3 "
      style={{ marginLeft: "155px" }}
    >
      Add
    </button>
  );
};

export default Addbutton;
