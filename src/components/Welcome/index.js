import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router";
import "./style.scss";
import style from "bootstrap/dist/css/bootstrap.css";
import * as bs from "react-bootstrap";

import Paper from "material-ui/Paper";
import FontIcon from "material-ui/FontIcon";

import { autobind } from "core-decorators";

@withRouter
@connect(state => ({}), {})
export default class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let style1= {
      padding:"32px",
      minWidth:"256px",
      minHeight:"256px"
    }
    return (
      <div className="main-header alternate">
        <div className="welcome-content">
          <div className="welcome-heading">
            <Paper zDepth={2}>
              <div className="jumbotron">
                <h1>Welcome to My Site</h1>
              </div>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}
