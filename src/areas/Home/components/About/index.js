import React from 'react';
import './style.scss';
const About = (props) => {
    return(
        <div className="about-tab">
            <h1>About Me</h1>
            <hr />
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
              graduating from UNF in <span>Spring
              of 2018</span> with a{" "}
              <i><a className="linkr" href="https://www.unf.edu/catalog/link/CCEC-BSCCISCIS3/">
                Bachelors of Computer and Information Sciences Concentration in
                Computer Science
              </a></i>
              . I cannot wait to see what life
              {" "}
              has in store for me down the road.
              <hr />
        </div>
    );
};

export default About;