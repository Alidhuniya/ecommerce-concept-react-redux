
import { Client } from './../../Client';
import { actionTypes } from './actionTypes';


export const fetchProducts = () => {
   
    return async (dispatch) => {
        try {
        dispatch(fetchProductsRequest())
       const data = await  Client.getEntries({
                    'content_type': 'offertshirt',
                    'limit': 3,
                  })
        const res2 = await data.items
            const result = res2
            dispatch(fetchProductsSuccess(result))

        }
        catch(error) {
          dispatch(fetchProductsFailure(error.message))
        }
    }
}
  
  export const fetchProductsRequest = () => {
    return {
      type: actionTypes.FETCH_PRODUCTS_REQUEST
    }
  }
  
  export const fetchProductsSuccess = id => {
    return {
      type: actionTypes.FETCH_PRODUCTS_SUCCESS,
      payload: id
    }
  }
  
  export const fetchProductsFailure = error => {
    return {
      type: actionTypes.FETCH_PRODUCTS_FAILURE,
      payload: error
    }
  }


  export function GetNumberCart(){
    return{
        type: actionTypes.GET_NUMBER_CART
    }
}

export function AddCart(payload){
    return {
        type: actionTypes.ADD_CART,
        payload
    };
   
}

export function DeleteCart(payload){
  
    return{
        type:actionTypes.DELETE_CART,
        payload
    }
}

export function IncreaseQuantity(payload){
    return{
        type: actionTypes.INCREASE_QUANTITY,
        payload
    }
}
export function DecreaseQuantity(payload){
    return{
        type:actionTypes.DECREASE_QUANTITY,
        payload
    }
}
