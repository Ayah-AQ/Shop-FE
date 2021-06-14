import productsData from"../components/dataproducts" 
import slugify from "slugify"


const initialState ={
    products:productsData,
    counter:0,

}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            const{newProduct}= action.payload;
            newProduct.id=state.products[state.products.length-1].id+1;
            newProduct.slug=slugify(newProduct.name)
        return {
            ...state,
            products:[...state.products, newProduct]
            }
        case "DELETE_PRODUCT":
        return {
            ...state,
            products: state.products.filter(
              (product) => product.id !== action.payload.productId
            ),
        }
case "UPDATE_PRODUCT":
    const{updateProduct}= action.payload
    updateProduct.slug=slugify(updateProduct.name)
    // const {updateProduct}= action.payload;
    return{
        ...state,
        products:state.products.map((product)=> product.id === updateProduct.id ? updateProduct:product)
    };
    default:
        return state;
   } 
}

export default reducer;

