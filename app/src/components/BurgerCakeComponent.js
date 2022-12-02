import React, { Component } from 'react'
import {connect} from 'react-redux'

class BurgerCakeComponent extends Component {
  renderBurger = () => {
    const {burger} = this.props;
    const items = Object.keys(burger);
    return (items || []).reduce((result, name, index) => {
      for (let i = 0; i < burger[name]; i++) {
        result.push(<div key={`item${index}${i}`} className={name}></div>)
      }
      return result
    }, [])
  }
  render() {
    return (
      <div className='text-center'>
        <h4 className='text-danger'>Your burger</h4>
        <div className='burger'>
          <div className='breadTop'></div>
          {this.renderBurger()}
          <div className='breadBottom'></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    burger: state.orderBurgerReducer.burger
  }
}
export default connect(mapStateToProps)(BurgerCakeComponent)
