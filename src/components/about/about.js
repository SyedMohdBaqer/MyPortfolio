import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
       <section id="about">
        <div className="row">
          <div className="three columns">
          <Fade big>            
            <img className="profile-pic" src="images/profile3.jpeg" alt="" />
            </Fade>                      
            </div>
          <div className="nine columns main-col">
          <Fade top>
             <h2>About Me</h2>
             </Fade>
             <Fade bottom>
            <p>I am an Undergraduate Electronics and Telecommunication Engineer. I Love to explore new trends and learn new skills related to the field of Engineering and Technology.
              I do Front-End Web Development using React.JS, Mobile Application Development using React Native and 3D Modeling using Blender.
            </p>
            </Fade>
            <div className="row">
            <Fade bottom> 
              <div className="columns download">
                <p>
                  <a href="https://drive.google.com/file/d/1lJvcBIePnKBKrdbq5VzAFxD_L7x1l6kR/view?usp=sharing" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
              </Fade>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
        
      </section>
      </React.Fragment>
    );
  }
}