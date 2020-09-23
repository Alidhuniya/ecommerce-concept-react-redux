import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import { fetchProducts } from './../redux/actions/allProducts';
import { Link } from 'react-router-dom';

 class Allitems extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    
  }
    render() {
       
        
        return (
          this.props.items.loading ? (
            <h2>Loading</h2>
          ) : this.props.items.error ? (
            <h2>{this.props.items.error}</h2>
          ) : (
            <div>
              <h2>Products List</h2>
              <div>
                {this.props.items &&
                  this.props.items.products &&
                  this.props.items.products.map(product => 
                  
                    <div>
                    <Link to={'/' + product.sys.id}> {/* the product.sys.id is from cms api not from js route path which is in APP.js file  */}
                  <p>{product.fields.offertitle}</p>
                  </Link>
                  <p>{product.fields.offerdec}</p>
                  <p>{product.fields.offerprice}</p>
                  </div>
                
                  )}
              </div>
            </div>
          )
        )
    }
}

const mapStateToProps = state => {
  return {
    items: state.productLists
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(Allitems);



