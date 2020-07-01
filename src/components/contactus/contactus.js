import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
export default class ContactUs extends Component {
  render() {
    return (
      <React.Fragment>
     <section id="contact">
        <div className="row section-head">
        <Fade big>
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>
          </Fade>
          <div className="ten columns">
          <Fade bottom>
            <p className="lead">Feel free to connect if you want to know more about my work, discuss opportunities, collaboration, consulting or have any suggestion. I'm always happy to chat!
            </p>
            </Fade>
          </div>
        </div>
        <Fade bottom>
        <div className="row">
          
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Contact Details</h4>
              <p className="address">
                 <span>Mumbra,</span><br />
                  <span>Dist. Thane-400612<br />
                   Maharashtra, India
                  </span><br />
                
                  <span>mohdbaqer.syed@gmail.com</span>
              </p>
            </div>
            
            
          </aside>
        </div>
        </Fade>
      </section> {/* Contact Section End*/}
      </React.Fragment>
    );
  }
}