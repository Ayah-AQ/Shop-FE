import { useDispatch } from "react-redux"
import * as types from "./types";
import instance from "./instance";


// BE
export const fetchProducts = () => {
  return async (dispatch) => {
      try {
          const res = await instance.get("/products");
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
  const res = await instance.post(
  `/shops/${newProduct.shopId}/products`,
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
      const res = await instance.delete(`/products/${productId}`)
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
      const res = await instance.put(`/products/${updatedProduct.id}` ,
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
