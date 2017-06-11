import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router";
import "./style.scss";
import style from "bootstrap/dist/css/bootstrap.css";
import * as bs from "react-bootstrap";

import { autobind } from "core-decorators";

@connect(state => ({}), {})
export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>Home</h1>
      </div>
    );
  }
}
