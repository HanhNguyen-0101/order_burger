import React, { Component } from 'react'
import './../assets/css/burger.css';
import BurgerCakeComponent from './BurgerCakeComponent';
import OrderTableComponent from './OrderTableComponent';

export default class BurgerOrderComponent extends Component {
  render() {
    return (
      <div className='container-fluid p-3'>
          <h3 className='m-3 pb-3'>Order Burger</h3>
          <div className='row'>
              <div className='col-6'>
                <BurgerCakeComponent />
              </div>
              <div className='col-6'>
                <OrderTableComponent />
              </div>
          </div>
      </div>
    )
  }
}
