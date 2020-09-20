import { combineReducers } from 'redux';

import  allProductsList  from './allProductsList';

const allReducers =  combineReducers(
    {
       allProductsList
    }
);

export default allReducers;