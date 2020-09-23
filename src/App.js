import React, { Component, Fragment } from "react";
import "./App.scss";
import { Route,  Switch } from 'react-router-dom';
import SingleProduct from "./components/SingleProduct";
// import AllProducts from './components/AllProducts';
import Search from './components/Search';


class App extends Component {
	render() {
		return (
			<Fragment>
			 <Switch>
            <Route exact path='/' component={Search}/>
           
            <Route path='/:product_id' component={SingleProduct} />
          </Switch>
		  
			</Fragment>
		);
	}
}

export default App;
