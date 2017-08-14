import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router";
import "./style.scss";
import style from "bootstrap/dist/css/bootstrap.css";
import * as bs from "react-bootstrap";

import Paper from "material-ui/Paper";
import Avatar from "material-ui/Avatar";
import FontIcon from "material-ui/FontIcon";

import { autobind } from "core-decorators";

@withRouter
@connect(state => ({}), {})
export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let style1 = {
      margin: "0 32px"
    };
    let style2 = {
      alignSelf: "center",
      textAlign: "center"
    };
    return (
      <div className="main-header">
        <div className="top-content">
          <div className="avatar">
            <Avatar
              className="avatar-pic"
              size={360}
              src="assets/images/profilePic.png"
            />
          </div>
          <div className="about-heading">
            <Paper zDepth={3}>
              <div className="jumbotron">
                <h3>
                  "Try not to become a man of success, but rather a man of value." <br />— Albert Einstein
                  {" "}
                </h3>
              </div>
            </Paper>
          </div>
        </div>
        <div className="intro">
          <Paper style={style1} className="about" zDepth={2}>
            <div className="explain">
              <h1>About Part</h1>

              I grew up in Jacksonville practically all my life. I graduated
              from Bartram Trail High School in 2015 and started at UNF
              over the Summer of 2015. Growing up I played a lot of video games
              and also had an interest
              for programming/modding games. My first programming class was
              during my Senior Year of High School in AP Computer Science.
              I didn't pass the AP Exam however I learned a lot in the class and
              I took all of the Summer
              to learn Java and C before starting my freshmen computing classes
              in the Fall.
              <br />
              <br />
              {" "}
              Two years later and here I am. I have gained so much knowledge
              from school and other mentors
              along the way. I currently am working with a start up company as a
              backend developer for
              their service. On the side, I build websites for local companies
              using the latest web development
              tools. I am always looking for new languages to learn.
              <br />
              <br />
              {" "}
              I am aspiring to be a Full Stack developer for a company one day
              or perhaps to found a
              company for custom solutions for anyone and everyone. I plan on
              graduating from UNF in Spring
              of 2018 with a
              <i>
                Bachelors of Computer and Information Sciences Concentration in
                Computer Science
              </i>
              . I cannot wait to see what life
              {" "}
              has in store for me down the road.
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}
