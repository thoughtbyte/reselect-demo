import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setList } from '../modules/list.js';
import { getDerivedList } from '../selectors.js';

class List extends Component {
  componentDidMount() {
    this.props.setList([
      'rfrfwrft',
      'sdfsdfsdf',
      'dsfs8rnlkmfm',
      'fpojgioeihjvpos[kf',
    ])
  }

  render() {
    console.log('RENDERING list: ', this.props.list);

    return (
      <ul>
        {this.props.list.map(listItem => <li key={listItem}>{listItem}</li>)}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.list.map(item => item.toUpperCase()),
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ setList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);