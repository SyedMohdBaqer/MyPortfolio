import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';


export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      
     <header id="home">
        <nav id="nav-wrap">
        <Fade>
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
           
            
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul> {/* end #nav */}
          </Fade>
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
          <Fade top><h1 className="responsive-headline">I'm Syed Mohd Baqer.</h1></Fade>
          <Fade bottom> <h3>I'm a <span>Front-End Web Developer</span>, <span>Mobile Application Developer</span> and <span>3D Artist</span> working harder and smarter everyday to enhance my knowledge and excel in my work. Let's <a className="smoothscroll" href="#about">start scrolling </a>
              and learn more <a className="smoothscroll" href="#about">about me</a>.</h3></Fade>
            <hr />

            <Fade bottom>
            <ul className="social">
              <li><a href="https://www.linkedin.com/in/syed-mohd-baqer/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://github.com/SyedMohdBaqer"><i className="fa fa-github" /></a></li>
              <li><a href="mailto:mohdbaqer.syed@gmail.com"><i className="fa fa-envelope" /></a></li>
            </ul>
            </Fade>
          </div>
        </div>
        <p className="scrolldown">
        <Fade top> <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a> </Fade>
        </p>
      </header>
      
      </React.Fragment>
    );
  }
}