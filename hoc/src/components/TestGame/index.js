import React from 'react';
import { render } from 'react-dom';
import { ReactBuild } from './ReactBuild';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import style from './style.scss';
 
import * as actions from '../../actions';

function mapStateToProps(state) {
  return { authenticated: state.authenticated };
}

export default withRouter(connect(mapStateToProps, actions)(ReactBuild));