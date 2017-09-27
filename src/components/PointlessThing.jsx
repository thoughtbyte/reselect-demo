import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { toggleBoolean } from '../modules/pointless_boolean.js';

class PointlessThing extends Component {
  handleToggle = () => {
    this.props.toggleBoolean(this.props.pointless_boolean);
  }

  render() {
    console.log('RENDERING boolean: ', this.props.pointless_boolean);

    return (
      <div>
        <p onClick={this.handleToggle}>Pointless boolean: {this.props.pointless_boolean.toString()}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pointless_boolean: state.pointlessBoolean,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ toggleBoolean }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PointlessThing);