export const DELETE_PRODUCT='DELETE_PRODUCT'
export const ADD_PRODUCT='ADD_PRODUCT'
export const UPDATE_PRODUCT='UPDATE_PRODUCT'



// Add Product
export const addProduct = (newProduct) => ({
    type: "ADD_PRODUCT",
    payload: {newProduct}
  });
  
  // Delete Product
  export const deleteProduct = (productId) => ({
    type: "DELETE_PRODUCT",
    payload: { productId: productId },
  });


  //Update
  export const updateProduct=(updateProduct)=>({
    type: "UPDATE_PRODUCT",
    payload:{updateProduct},
  
  })
