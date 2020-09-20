
import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { allProducts } from './../redux/actions/allProducts';
// import { Link } from 'react-router-dom';


class allProductsLists extends Component {
    componentDidMount() {
        this.props.allProducts();
        console.log(this.props.allProducts())
      }
  render(){
    const { products } = this.props
  console.log(products);
   
    //  const list = products.map(product => {
    //     return (
    //       <div  key={product.id}>
    //         <div >
    //           <Link to={'/' + product.fields.id}>
    //             <span >{product.fields.offertitle}</span>
    //           </Link>
    //           <p>{product.fields.offerdec}</p>
    //         </div>
    //       </div>
    //     )
    //   })

    return (
      <div>
        <div>
          <h4>Home</h4>
          {/* {list} */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        allProducts : () => dispatch(allProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(allProductsLists)