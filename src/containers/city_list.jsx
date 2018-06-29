import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';



class CityList extends Component {

  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <div>
        {this.props.cities.map((city) =>
          <div>
            {city.name}
          </div>
          )}
      </div>
      )
  }
}

function mapStateToProps(reduxState) {
  return {
    cities: reduxState.cities
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);;
