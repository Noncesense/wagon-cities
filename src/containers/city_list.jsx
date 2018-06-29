import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';
import City from './city.jsx';



class CityList extends Component {

  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <div className='cities'>
        {this.props.cities.map((city) =>
          <div>
            <City city={city} key={city.name} />
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
