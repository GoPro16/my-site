import React, { Component } from 'react';
import classnames from 'classnames';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import Welcome from './components/Welcome';
import PicturePane from './components/PicturePane';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import About from './components/About';
import './styles.scss';


@withRouter
@connect(
  state => ({
  }),
  {
  }
)
export default class Home extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div>
       <div className="home-container">
        <Welcome />
        <Portfolio />
        <About />
        <PicturePane />
        <Contact />
    </div>
      <p className="copyright">Copyright © 2017 Kyle Gray</p>
    </div>
    );
  }
}
