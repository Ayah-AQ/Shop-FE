import React,{useState} from 'react'
import { useDispatch, useSelector  } from "react-redux";
import { addProduct,updateProduct  } from '../../store/actions/productActions';
import { useHistory,Link } from "react-router-dom";
import {useParams} from 'react-router'

const ProductForm = () => {
    

    const productSlug = useParams().productSlug
    const products= useSelector((state)=> state.products)
    const updatedProduct= products.find((product)=> product.slug === productSlug)
    const [product, setProduct] = useState(
        
        updatedProduct ??{
        name: "",
        price: 0,
        description: "",
        image: "",
    })


const history = useHistory();
    const dispatch = useDispatch()
    

    const handleChange = (event) =>{
     setProduct({...product, [event.target.name]: event.target.value})
    }
    const handleImage = (event) =>
    setProduct({ ...product, image: event.target.files[0] });

    const handleSubmit = (event) => {
        event.preventDefault();
        updatedProduct?
        dispatch(updateProduct(product))
        :dispatch(addProduct(product))
        history.push("/products");

    }

    return (
        <div>
            <form className="container" onSubmit={handleSubmit} 
            >
                {/*name----------------------------------*/}
                <div className="input-group mb-2">
                    <div className="input-group-prepend"></div>
                    <span className="btn btn-outline-info">Name</span>
                    <input 
                    type="text" 
                    value={product.name} 
                    onChange={handleChange} 
                    name="name" 
                    className="form-control"
                    />
                    </div>

                      {/*Price----------------------------------*/}
                <div className="input-group mb-2">
                    <div className="input-group-prepend"></div>
                    <span className="btn btn-outline-info">Price</span>
                    <input 
                    type="number" 
                    value={product.price}
                    onChange={handleChange}  
                    name="price" 
                    className="form-control"/>
                </div>

                      {/*Description----------------------------------*/}
                <div className="input-group mb-2">
                    <div className="input-group-prepend"></div>
                    <span className="btn btn-outline-info">Description</span>
                    <input 
                    type="text" 
                    value={product.description} 
                    onChange={handleChange} 
                    name="description" 
                    className="form-control"/>
                </div>

                 {/*image----------------------------------*/}
                <div className="input-group mb-2">
                    <div className="input-group-prepend"></div>
                     <span className="btn btn-outline-info">Image</span>
                    {/* <input 
                    type="file" 
                    id="file" 
                    name="file" multiple/> */}
              <input 
            name="image"
            type="file"
            onChange={handleImage}
           className="form-control" 
            />
                </div>

                 {/*button----------------------------------*/}
                <button type="submit"className="btn btn-success" onSubmit={handleSubmit}>
          {updatedProduct ? "Update" : "Create"}
        </button>

        <Link to="/products">
          <button type="back"className="btn btn-success" color="blue">Back</button>
        </Link>
            </form>
        </div>
    )
}

export default ProductForm;