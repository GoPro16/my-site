import React from "react";
import "./style.scss";
const Portfolio = props => {
  return (
    <div className="portfolio-tab">
      <h1>Portfolio</h1>
      <hr />
      <div className="__pieces">
        <div className="__piece">
          <h4>
            Backend Development for
            {" "}<a href="https://www.wekenect.com/">Wekenect</a>
          </h4>
          <hr />
          <p className="description">
            Created the backend emailing service as well as email app to easily
            create and batch send emails.
          </p>
          <ul>
            <li>Built with Node, React, and Redux</li>
            <li>Deployed with AWS</li>
            <li>Database designed in DynamoDB</li>
          </ul>
        </div>
        <div className="__piece">
          <h4>
            <a href="http://www.floridaframingsupplies.com/">
              Florida Framing Supplies
            </a>
            {" "}Website
          </h4>
          <hr />
          <p className="description">
            Built a new website for my parent's local business with
            {" "}<a href="https://www.linkedin.com/in/michaelt2896/"><br />
              Michael Turner
            </a>.
          </p>
          <ul>
            <li>Built with Node, React, and Redux</li>
            <li>Deployed with AWS</li>
            <li>Database designed in DynamoDB</li>
          </ul>
        </div>
        <div className="__piece">
          <h4>
            <a href="https://www.ccsetampa.org/">
              Community Charter School of Excellence
            </a>
            {" "}Website
          </h4>
          <hr />
          <p className="description">
            Bult a new website for a local charter school in Tampa with
            {" "}<a href="https://www.linkedin.com/in/jonathan-danek-694024b0/">
              Jonathan Danek
            </a>.
          </p>
          <ul>
            <li>Built with Node, React, PHP, and Redux</li>
            <li>Deployed with a standard server</li>
            <li>Database designed in MySQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
