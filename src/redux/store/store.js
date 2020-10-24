
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from "./../reducers/index";
import { loadState, saveState } from './../localstorage';

const persistence = loadState();

const store = createStore(
    allReducers,
    persistence,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  )


  store.subscribe(() => {
    saveState(store.getState())
  });
  
  export default store;
