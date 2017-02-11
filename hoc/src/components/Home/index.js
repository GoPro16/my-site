import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {Home} from './Home';
import {render} from 'react-dom';
import * as actions from '../../actions';
import style from './assets/css/main.scss'; 

function mapStateToProps(state) {
  return { authenticated: state.authenticated };
}

export default withRouter(connect(mapStateToProps, actions)(Home));