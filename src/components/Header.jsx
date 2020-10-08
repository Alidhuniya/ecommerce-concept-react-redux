import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import  {connect} from  'react-redux'
import "../sass/3-layout/_header.scss";
export class Header extends Component {
    render() {
        return (
            
           
              <div className = "navWrapper">
                  <nav className = "nav">
                        <ul className="headerNav">
                            <li className="headerNav__item" ><Link to="/" className="headerNav__link">Products</Link></li>
                            <li className="headerNav__item"><Link to="/carts" className="headerNav__link"><i class="fas fa-cart-arrow-down"></i> {this.props.numberCart}</Link></li>
                        </ul>
                  </nav>
              </div>

        )
    }
}
const mapStateToProps = state =>{
    return{
        numberCart:state.productLists.numberCart
    }
}
export default connect(mapStateToProps,null)(Header)
