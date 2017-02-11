import React,{Component} from 'react';



export class Home extends Component {

  constructor() {
  	super();

    this.state ={

    };
  }

  componentWillMount() {
     window.onload = function() { document.body.className = ''; }
      window.ontouchmove = function() { return false; }
      window.onorientationchange = function() { document.body.scrollTop = 0; }
  }

  render(){
    return(
    	<div>
        <div id="wrapper">
          <div id="bg"></div>
          <div id="overlay"></div>
          <div id="main">
            <header id="header">
              <h1>Kyle Gray</h1>
              <p>Student &nbsp;&bull;&nbsp; Developer &nbsp;&bull;&nbsp; Thinker</p>
              <nav>
                <ul>
                  <li><a href="https://linkedin.com/in/kyle-gray-601bb8115" className="icon fa-linkedin"><span className="fa-linkedin">Linkedin</span></a></li>
                  <li><a href="#blog" className="icon fa-book"><span className="label">Blog</span></a></li>
                  <li><a href="#" className="icon fa-gamepad"><span className="label">Games</span></a></li>
                  <li><a href="#Projects" className="icon fa-file-code-o"><span className="label">Projects</span></a></li>
                  <li><a href="http://github.com/gopro16" className="icon fa-github"><span className="label">Github</span></a></li>
                </ul>
              </nav>
            </header>
            <footer id="footer">
              <span class="copyright">&copy; : kyle@agryle.io //Made with React & <a href="http://html5up.net">HTML5 UP</a>.</span>
            </footer>
          </div>
        </div>
      </div>
  );
  }  
}

