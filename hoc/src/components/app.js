import React from 'react';
import { Component } from 'react';


import './style.scss';

export default class App extends Component {
  render() {
    return (
      <div className = 'app-container'>
        {this.props.children}
      </div>
    );
  }
}