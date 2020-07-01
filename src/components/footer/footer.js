import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
 <footer>
        <div className="row">
          <div className="twelve columns">
          <Fade big>
            <ul className="social-links">
            
            <li><a href="https://www.linkedin.com/in/syed-mohd-baqer/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://github.com/SyedMohdBaqer"><i className="fa fa-github" /></a></li>
              <li><a href="mailto:mohdbaqer.syed@gmail.com"><i className="fa fa-envelope" /></a></li>
            </ul>
            <ul className="copyright">
              <li>Syed Mohd. Baqer</li>
            
            </ul>
            </Fade>
          </div>
          <div id="go-top"><Fade bottom><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></Fade></div>
          
        </div>
      </footer> {/* Footer End*/}
      </React.Fragment>
    );
  }
}