//styles
import{Tr} from "../../style"

const ProductRow = (props) => {
  return (
    
    <tr>
     <Tr> <img src={props.task.image}/></Tr>
      <Tr>{props.task.name}</Tr>
      <Tr> {props.task.price}JD</Tr>
      </tr>
   
  );
};

export default ProductRow;