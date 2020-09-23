import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import { fetchProducts} from './../redux/actions/allProducts';
import { Link } from 'react-router-dom';

 class AllProducts extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    
  }
    render() {
      const {items} = this.props;
        
        return (
          items.loading ? (
            <h2>Loading</h2>
          ) : items.error ? (
            <h2>{items.error}</h2>
          ) : (
            <div>
              <h2>Products List</h2>
              <div>
                {items &&
                  items.products &&
                  items.products.map(product => 
                  
                    <div>
                    <Link to={'/' + product.sys.id}> {/* the product.sys.id is from cms api not from js route path which is in APP.js file  */}
                  <h1>Title:{product.fields.offertitle}</h1>
                  <h5>Description:{product.fields.offerdec}</h5>
                  <p>Price:{product.fields.offerprice}</p>
                  </Link>
                  <hr />
                  <br />
                  <br />
                
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
    items: state.productLists,
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    
  }
}



export default connect(mapStateToProps, mapDispatchToProps )(AllProducts);



