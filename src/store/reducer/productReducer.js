import productsData from"../../components/dataproducts" 
import slugify from "slugify"


const initialState ={
    products:[],
    counter:0,
loading:true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
         //Fetch---------------------------------------------
   case "FETCH_PRODUCTS":
    return {
      ...state,
      products: action.payload.products,
     loading:false
    };
        //Add -------------------------------
        case "ADD_PRODUCT":
                 return {
            ...state,
            products:[...state.products, action.payload.newProduct]
            }
            //Delete-----------------------------------
        case "DELETE_PRODUCT":
        return {
            ...state,
            products: state.products.filter(
              (product) => product.id !== action.payload.productId
            ),
        }
        //Update---------------------------------------------
case "UPDATE_PRODUCT":
    const updatedProduct=action.payload.updatedProduct
    console.log("message",action.payload)
        return{
        ...state,
        products:state.products.map((product)=> product.id === updatedProduct.id ? updatedProduct:product)
    };
    default:
        return state;
   } ;
  
}

export default reducer;

