import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {

  render() {
    let imgUrl = null;
    let name = null;
    if(this.props.activeCity) {
      imgUrl = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`;
      name = this.props.activeCity.name;

    }

    return (
      <div className='active-city'>
        <h3>{name}</h3>
        <img src={imgUrl}/>
      </div>
      )
  }
}

function mapStateToProps(reduxState) {
  return {
    activeCity: reduxState.activeCity
  }
}

export default connect(mapStateToProps)(ActiveCity);
