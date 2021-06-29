import { useDispatch } from "react-redux"
import * as types from "./types";
import axios from "axios"


// BE
export const fetchProducts = () => {
  return async (dispatch) => {
      try {
          const res = await axios.get("http://localhost:8000/products");
          console.log(res.data)
          dispatch({
              type: types.FETCH_PRODUCTS, 
              payload:{products:res.data}
          });
      } catch (error) {
          console.log(error.message);
      }
  }
};


// Add Product
export const addProduct = (newProduct) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
  for (const key in newProduct) formData.append(key, newProduct[key]);
  // console.log("formData", formData);;
                 const res = await axios.post(
  `http://localhost:8000/shops/${newShop.shopId}/products`,
  formData
);
  
      
      console.log(res.data)
      dispatch({
    type: types.ADD_PRODUCT,
    payload:  {newProduct:res.data}
  })}
  catch(error){
    console.log(error.message)
    }
  }
};
  
  // Delete Product
  export const deleteProduct =  (productId) => {
    return async (dispatch) => {
    try{
      const res = await axios.delete(`http://localhost:8000/products/${productId}`)
      console.log(res.data)
dispatch({
    type: types.DELETE_PRODUCT,
    payload: { productId: productId }
})}
catch(error){
  console.log(error.message)
  }
}
  };

  //Update
  export const updateProduct= (updatedProduct)=>{
    return async (dispatch) => {
          try{
            const formData = new FormData();
            for(const key in updatedProduct) formData.append(key, updatedProduct[key]);
      const res = await axios.put(`http://localhost:8000/products/${updatedProduct.id}` ,
      formData)
 
dispatch({
    type: types.UPDATE_PRODUCT,
    payload: {updatedProduct:res.data},
})}
catch(error){
  console.log(error.message)
  }
}
  }
