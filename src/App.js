import React, { Component, Fragment } from "react";
import "./App.scss";
import { Route,  Switch } from 'react-router-dom';
import SingleProduct from "./components/SingleProduct";
import Allitems from './components/AllProducts';


class App extends Component {
	render() {
		return (
			<Fragment>
			 <Switch>
            <Route exact path='/' component={Allitems}/>
           
            <Route path='/:product_id' component={SingleProduct} />
          </Switch>
		  
			</Fragment>
		);
	}
}

export default App;
