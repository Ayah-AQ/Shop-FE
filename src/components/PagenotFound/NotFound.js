import { Button } from "../../style";
import { Link } from "react-router-dom";

const NotFound = () => (
  <>
    <h2>This page does not exist!</h2>
    <Link  to="/">
      <Button>Go back home!</Button>
    </Link>
  </>
);

export default NotFound;