import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeItemOfBurger } from '../actions/BurgerOrderAction';

class OrderTableComponent extends Component {
  renderTable = () => {
    const {burger, menu} = this.props;
    const items = Object.keys(menu);
    return (items || []).map((item, index) => {
      return <tr key={index}>
        <td className='text-capitalize'>{item}</td>
        <td>
          <button type="button" onClick={() => this.props.dispatch(changeItemOfBurger(item, false))} className="btn btn-danger">-</button>
          <span> {burger[item]} </span>
          <button type="button" onClick={() => this.props.dispatch(changeItemOfBurger(item, true))} className="btn btn-success">+</button>
        </td>
        <td>{menu[item].toLocaleString()}</td>
        <td>{(burger[item] * menu[item]).toLocaleString()}</td>
    </tr>
    })
  }
  render() {
    return (
      <div className='d-flex flex-column justify-content-center align-items-center'>
          <h4 className='text-success'>Order</h4>
          <table className="table text-left">
              <thead>
                  <tr>
                      <th>Item</th>
                      <th></th>
                      <th>Price</th>
                      <th>Total</th>
                  </tr>
              </thead>
              <tbody>
                  {this.renderTable()}
              </tbody>
              <tfoot>
                  <tr>
                      <td className='text-right' colSpan={3}>Total price</td>
                      <td>{this.props.total.toLocaleString()}</td>
                  </tr>
              </tfoot>
          </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    burger: state.orderBurgerReducer.burger,
    menu: state.orderBurgerReducer.menu,
    total: state.orderBurgerReducer.total
  }
}
export default connect(mapStateToProps)(OrderTableComponent)