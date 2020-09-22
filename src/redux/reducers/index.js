import { combineReducers } from 'redux';
import productsReducer from './allProductsReducer';

const allReducers =  combineReducers(
    {
    productLists: productsReducer,
    }
);

export default allReducers;