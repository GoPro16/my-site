import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeContainer from '../Home';
import './style.scss';

@withRouter
@connect(state => ({}),{})
export default class App extends Component {
    render() {
        return (
            <div className="app-container">
                <Route exact path="/" component={HomeContainer} />
            </div>
        );
    }
}
