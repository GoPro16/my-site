import React from "react";
import "./style.scss";
const Contact = props => {
  return (
    <div className="contact-tab">
      <a href="" className="blog">
          <i className="fa fa-rss fa-5x" aria-hidden="true"></i>
        <h3>Blog(Coming Soon)</h3>
      </a>
      <a target="__blank" href="https://github.com/GoPro16/GithubPagesSourceCode" className="projects">
        <i className="fa fa-code fa-5x" aria-hidden="true"></i>
        <h3>Latest Project</h3>
      </a>
      <a target="__blank" href="https://drive.google.com/open?id=0ByJ9_wqoEpXUTzc0b3N2R0oyRlk" className="resume">
        <i className="fa fa-address-card-o fa-5x" aria-hidden="true"></i>
        <h3>Resume</h3>
      </a>
    </div>
  );
};

export default Contact;
