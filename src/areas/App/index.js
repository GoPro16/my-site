import React from "react";
import ProfilePic from 'assets/ProfilePic.jpg';
import 'animate.css/animate.min.css';
import "./style.scss";

export default () => (
  <div className="app-container animated bounceIn delay-2s slow">
    <figure className="image is-128x128">
      <img
        className="is-rounded"
        src={ProfilePic}
      />
    </figure>
  </div>
);
