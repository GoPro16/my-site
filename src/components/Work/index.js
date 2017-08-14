import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router";
import "./style.scss";
import style from "bootstrap/dist/css/bootstrap.css";
import * as bs from "react-bootstrap";

import Paper from "material-ui/Paper";

import { autobind } from "core-decorators";

@withRouter
@connect(state => ({}), {})
export default class Work extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-header alternate">
        <h1>Work</h1>
      </div>
    );
  }
}
