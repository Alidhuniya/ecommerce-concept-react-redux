import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import { fetchProducts } from './../redux/actions/allProducts';


 class SingleProduct extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    
  }
    render() {
        // const {x, increment, decrement, reset} = this.props;
        
        return (
          <div>
              single
          </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.product_id;
  return {
    items: state.productLists.products.find(items => items.sys.id === id)
   
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: (id) => dispatch(fetchProducts(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(SingleProduct);





