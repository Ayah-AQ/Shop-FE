
import * as types from "./types";
import instance from "./instance";


export const fetchShops = () => {
    return async (dispatch) => {
        console.log("hello");
        try {
            const res = await instance.get("/shops");
            dispatch({
                type: types.FETCH_SHOPS, 
                payload: {shops: res.data}
            });
        } catch (error) {
            console.log("error:", error);
        }
    }
};

export const AddShop = (newShop) => {
    return async (dispatch) => {
        try {
            const formData = new FormData();
            for(const Key in newShop) formData.append(Key, newShop[Key]);
            const res = await instance.post("/shops/new", formData);
            dispatch({
                type: types.ADD_SHOP, 
                payload: {newShop: res.data}
            });
        } catch(error) {
            console.log("error:", error);
        }
    }
}