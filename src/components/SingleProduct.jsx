import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import { fetchProducts } from './../redux/actions/allProducts';


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
    let id = ownProps.match.params.product_id;
    
  return {
    items: state.productLists.products.find(items => items.sys.id === id)
    // items: state.productLists
   
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: (id) => dispatch(fetchProducts(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(SingleProduct);





