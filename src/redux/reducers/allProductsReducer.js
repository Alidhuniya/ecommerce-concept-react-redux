
import { actionTypes } from './../actions/actionTypes';
const initialState = {
    loading: false,
    products: [],
    error: '',
    numberCart: 0,
    Carts: []
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
          ...state,
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

        // added this new feature
  

    case actionTypes.ADD_CART:
      if (state.numberCart === 0) {
        let cart = {
          id: action.payload.sys.id,
          quantity: 1,
          name: action.payload.fields.offertitle,
          image: action.payload.fields.offerimg.fields.file.url,
          price: action.payload.fields.offerprice
        };
        state.Carts.push(cart);
      } else {
        let check = false;
        state.Carts.map((item, key) => {
          if (item.id === action.payload.sys.id) {
            state.Carts[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
         id: action.payload.sys.id,
          quantity: 1,
          name: action.payload.fields.offertitle,
          image: action.payload.fields.offerimg.fields.file.url,
          price: action.payload.fields.offerprice
          };
          state.Carts.push(_cart);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1
      };
    case actionTypes.INCREASE_QUANTITY:
      state.numberCart++;
      state.Carts[action.payload].quantity++;

      return {
        ...state
      };
    case actionTypes.DECREASE_QUANTITY:
      let quantity = state.Carts[action.payload].quantity;
      if (quantity > 1) {
        state.numberCart--;
        state.Carts[action.payload].quantity--;
      }

      return {
        ...state
      };
    case actionTypes.DELETE_CART:
      let quantity_ = state.Carts[action.payload].quantity;
      return {
        ...state,
        numberCart: state.numberCart - quantity_,
        Carts: state.Carts.filter((item) => {
          return item.id != state.Carts[action.payload].id;
        })
      };

       
      default: return state
    }
  }
  
  export default productsReducer;