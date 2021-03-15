import React, { useState, Fragment, useContext, useEffect } from 'react';
import CartItem from './CartItems'
import { GlobalContext } from '../context/GlobalContext';

function Banner() {
    const { isCartOpen, totalPrice } = useContext(GlobalContext);


    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row max-height justify-content-center align-items-center">
                    <div className="col-10 mx-auto banner text-center">
                        <h1 className="text-capitalize blck">
                            welcome to <strong className="banner-title">SweetOnes</strong>
                        </h1>
                        <a href="#store" className="btn banner-link text-uppercase my-2">explore</a>
                    </div>

                    {
                        isCartOpen 
                        ?
                        <div id="cart" className="cart show-cart">
                            <CartItem />
                        </div>
                        :
                        <div id="cart" className="cart">
                            <CartItem />
                        </div>
                    }
                    
                </div>
            </div>
        </Fragment>
    )
}

export default Banner
