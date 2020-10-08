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
                 <h2 className = "products-heading">single Product List</h2>
    
                 <div className = "products">
                    <div className="products__id"> 
                    <img className = "products__img"  src ={items.fields.offerimg.fields.file.url} alt="product-img" />
                    <div className = "products__content">
                  <h1 className = "products__h1">Title:{items.fields.offertitle}</h1>
                 
                  <h5 className = "products__h5">Description:{items.fields.offerdec}</h5>
                  <p className = "products__p">Price: ${items.fields.offerprice} <span
                  className = "products__span"
                    onClick={() => this.props.AddCart(items)}  >
                    Add to Cart
                  </span></p>
                  </div>
                  </div>
                  </div>
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





