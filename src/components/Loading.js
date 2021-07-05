import ClipLoader from "react-spinners/ClipLoader";
import { Override } from "../style";

const Loading = () => {
  return (
    <Override className="mt-5">
      <ClipLoader color="#9d0208" size={70} />
    </Override>
  );
};
export default Loading;