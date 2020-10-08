import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import { fetchProducts, AddCart} from './../redux/actions/allProducts';
import { Link } from 'react-router-dom';
import "../sass/3-layout/_allproducts.scss";

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
          ) :  (
            <div>
              <h2 className="products-heading">Shopping Cart Concept - Products List</h2>
              <div>
                {items &&
                  items.products &&
                  items.products.map(product => 
                  
                    <div className = "products">
                    <div className="products__id"> 
                    <img className = "products__img"  src ={product.fields.offerimg.fields.file.url} alt="product-img" />
                    <div className = "products__content">
                  <h1 className = "products__h1">Title:{product.fields.offertitle}</h1>
                 
                  <h5 className = "products__h5">Description:{product.fields.offerdec}</h5>
                  <p className = "products__p">Price: ${product.fields.offerprice} <span
                  className = "products__span"
                    onClick={() => this.props.AddCart(product)}
                  >
                    Add to Cart
                  </span></p>
                  <div className = "products__view" >
                  <Link className="products__detail" to={`/product/${product.sys.id}`}> {/* the product.sys.id is from cms api not from js route path which is in APP.js file  */}
                  View Details
                  </Link>
                  </div>
                  </div>
                  </div>
                 
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
    AddCart: (items) => dispatch(AddCart(items))
  }
}



export default connect(mapStateToProps, mapDispatchToProps )(AllProducts);



