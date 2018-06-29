import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setActiveCity } from '../actions';


class City extends Component {

  handleClick = () => {
    this.props.setActiveCity(this.props.city);
  }

  render() {
    return (
      <div className='list-group-item' onClick={this.handleClick}>
        {this.props.city.name}
      </div>
      )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {setActiveCity: setActiveCity},
    dispatch
  );
}

function mapStateToProps(reduxState) {
  return {
    activeCity: reduxState.activeCity
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(City);;
