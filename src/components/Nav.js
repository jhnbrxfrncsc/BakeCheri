import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function Nav() {
    const { cartItems, showCart, totalPrice } = useContext(GlobalContext);
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg px-4">
                
                {/* LOGO  */}
                <a className="navbar-brand" href="#">
                    <img src="img/logo.svg" alt="" />
                </a>
                <button 
                    className="navbar-toggler" 
                    type="button"
                    data-toggle="collapse" 
                    data-target="#myNav"
                >
                    <span className="toggler-icon">
                        <i className="fas fa-bars"></i>
                    </span>
                </button>
                
                <div 
                    className="collapse navbar-collapse" 
                    id="myNav"
                >
                    <ul className="navbar-nav mx-auto text-capitalize">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#about-us">about</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#store">store</a>
                        </li>
                    </ul>
                    
                    <div className="nav-info-items d-none d-lg-flex ">
                        <div className="nav-info align-items-center d-flex justify-content-between mx-lg-5">
                            <span className="info-icon mx-lg-3"><i className="fas fa-phone"></i></span>
                            <p className="mb-0">+639264600170</p>
                        </div>
                        <div className="nav-info align-items-center d-flex justify-content-between mx-lg-5">
                            <span className="info-icon mx-lg-3">
                            <i className="fas fa-mail-bulk"></i>
                            </span>
                            <p className="mb-0">sweetones@yahoo.com</p>
                        </div>

                        <div 
                            id="cart-info" 
                            className="nav-info align-items-center cart-info d-flex justify-content-between mx-lg-5"
                            onClick={showCart}
                        >
                            <span className="cart-info__icon mr-lg-3">
                                <i className="fas fa-shopping-cart"></i>
                            </span>
                            <p className="mb-0 text-capitalize">
                                {
                                    cartItems.length === 0
                                        ? <span id="item-count">Cart is Empty </span>
                                    : cartItems.length === 1
                                        ?<span id="item-count">{cartItems.length} item - ₱{totalPrice}</span>
                                        :<span id="item-count">{cartItems.length} items - ₱{totalPrice}</span>
                                    
                                } 
                            </p>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Nav
