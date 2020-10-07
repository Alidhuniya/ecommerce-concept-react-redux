import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import { fetchProducts } from './../redux/actions/allProducts';
import { AddCart} from "../redux/actions/allProducts";


 class SingleProduct extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    
  }
    render() {
        const {items} = this.props;
      

            const product = items ? (
                 <Fragment>
                 <h2>single Product List</h2>
    
    <h1>Title:{items.fields.offertitle}</h1>
   <img style = {{width: "200px"}} src ={items.fields.offerimg.fields.file.url} alt="product-img" />
    <h5>Description:{ items.fields.offerdec}</h5>
    <p>Price:{  items.fields.offerprice}</p>
    <span
            className="badge badge-primary"
            style={{ cursor: "pointer" }}
            onClick={() => this.props.AddCart(items)}
          >
            Add Cart
          </span>
                 </Fragment>
             ) : (
               <div >Loading singleProduct...</div>
             )
         
        
        return (
           

          <div>{product}</div>
           
              
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    
  return {
    items: state.productLists.products.find(items => items.sys.id === id)
    // items: state.productLists
   
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    AddCart: (items) => dispatch(AddCart(items))
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(SingleProduct);





