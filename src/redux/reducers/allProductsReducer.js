
import { actionTypes } from './../actions/actionTypes';
const initialState = {
    loading: false,
    products: [],
    error: ''
  }
  
  const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.FETCH_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true
        }
      case actionTypes.FETCH_PRODUCTS_SUCCESS:
        return {
          loading: false,
          products: action.payload,
          error: ''
        }
      case actionTypes.FETCH_PRODUCTS_FAILURE:
        return {
          loading: false,
          products: [],
          error: action.payload
        }

       
      default: return state
    }
  }
  
  export default productsReducer;