import React, { Component, Fragment } from "react";
import "./App.scss";
import { Route,  Switch } from 'react-router-dom';
import SingleProduct from "./components/SingleProduct";
import AllProducts from './components/AllProducts';
import  Header  from './components/Header';
import Cart from "./components/Carts";



class App extends Component {
	render() {
		return (
			<Fragment>
			<Header />
			 <Switch>
            <Route exact path='/' component={AllProducts}/>
            <Route path="/carts" exact component={Cart} />
            <Route path='/product/:id' component={SingleProduct} />
          </Switch>
		  
			</Fragment>
		);
	}
}

export default App;
