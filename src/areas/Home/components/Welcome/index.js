import React from "react";
import "./style.scss";

const Welcome = props => {
  return (
    <div className="welcome-box">
      <div className="__text">
        <h1>Kyle <a>Gray</a></h1>
        <h3>Full Stack Developer</h3>
      </div>
      <div className="__quote">
        "...I think that's the single best piece of advice: constantly think about
        how you could be doing things better and questioning yourself." <br />—
        Elon
        {" "}
        <a href="https://en.wikipedia.org/wiki/Elon_Musk">
          Musk
        </a>
        <hr />
        <div className="__links">
          <a
            target="__blank"
            href="https://www.linkedin.com/in/kyle-gray-601bb8115/"
            className="fa fa-linkedin-square fa-3x"
            aria-hidden="true"
          />
          <a
            href="mailto:kgray1497@gmailcom"
            className="fa fa-envelope-square fa-3x"
            aria-hidden="true"
          />
          <a
            target="__blank"
            href="https://github.com/GoPro16"
            className="fa fa-github-square fa-3x"
            aria-hidden="true"
          />
          <a
            target="__blank"
            href="https://news.ycombinator.com/user?id=kgray1497"
            className="fa fa-hacker-news fa-3x"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
