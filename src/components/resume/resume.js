import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
     <div>
        <section id="resume">
          {/* Education
      ----------------------------------------------- */}
          <div className="row education">
            <div className="three columns header-col">
            <Fade> <h1><span>Education</span></h1> </Fade>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                <Fade bottom><h3>Mumbai University</h3>
                <p className="info">Bachelor Of Engineering (B.E.) In Electronics and Telecommunication<span>•</span> <em className="date">2017-2021</em></p>
                <p>
                  Currently, I am a Final Year Engineering Student in the branch of EXTC at Excelsior Education Society's K. C. College of Engineering and Management Studies and Research, Mith Bunder Road, Kopri, Thane(E)-400 603.
                </p>
                </Fade>
                </div>
              </div> {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                <Fade bottom><h3>K. J. Somaiya College of Science and Commerce</h3>
                <p className="info">H.S.C. (Vocational Science)<span>•</span> <em className="date">2017</em></p>
                <p>
                 Completed my Higher Secondary Eucation in First Class with Vocational Science(Electronics) from The Maharashtra State Board of Secondary and Higher Secondary Education.
                </p>
                </Fade>
                </div>
                
              </div> {/* item end */}
              <div className="row item">
              <div className="twelve columns">
              <Fade bottom><h3>The Maharashtra State Board of Secondary and Higher Secondary Education</h3>
                <p className="info">S.S.C.<span>•</span> <em className="date">2015</em></p>
                <p>
                 Completed my Secondary Eucation in distinction(90.00%) at Mumbra English High School.
                </p>
                </Fade>
              </div>
              
            </div>
            </div> {/* main-col end */}
          </div> {/* End Education */}
          {/* Work
      ----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
            <Fade><h1><span>Work</span></h1></Fade>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                <Fade bottom><h3>The Institution Of Electronics And Telecommunication Engineers (IETE), New Delhi</h3>
                <p className="info">Certified Member<span>•</span> <em className="date">November 2018 - Present</em></p>
                <p>
                Active Certified member of the IETE-ISF Chapter at K.C. College Of Engineering and Management Studies and Research being involved in different technical activities.
                </p>
                </Fade>
                </div>
              </div> {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                <Fade bottom><h3>EnablAR</h3>
                <p className="info">3D Artist Intern<span>•</span> <em className="date">April 2020 - Present</em></p>
                <p>
                Currently, a Student Intern for 3D Modeling at EnablAR in the Internship Program of Augmented Reality and 3D Modeling.
                </p>
                </Fade>
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Work */}
          {/* Skills
      ----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
            <Fade><h1><span>Skills</span></h1></Fade>
            </div>
            <div className="nine columns main-col">
            <Fade bottom> <p>Some Languages and Technologies which I use and spend most of my time to excel in it.
            </p>
            <div className="bars">
           <ul className="skills">
           <Fade left><li><span className="bar-expand css" /><em>HTML5</em></li></Fade>
           <Fade left>  <li><span className="bar-expand html5" /><em>CSS3</em></li></Fade>
           <Fade left><li><span className="bar-expand jquery" /><em>Javascript</em></li></Fade>
           <Fade left> <li><span className="bar-expand photoshop" /><em>React.js</em></li></Fade>
           <Fade left> <li><span className="bar-expand illustrator" /><em>React Native</em></li></Fade>
           <Fade left> <li><span className="bar-expand wordpress" /><em>Python</em></li></Fade>
           <Fade left> <li><span className="bar-expand illustrator" /><em>Blender</em></li></Fade>
                
                
              </ul>
              
              </div>{/* end skill-bars */}
              </Fade>
            </div> {/* main-col end */}
          </div> {/* End skills */}
        </section> {/* Resume Section End*/} 
      </div>
      </React.Fragment>
    );
  }
}