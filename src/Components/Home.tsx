import { Button, Col, Container, Row } from 'react-bootstrap';
import '../App.css';

import { Link } from 'react-scroll';
// import { Link } from 'react-router-dom';
import {FaInstagram, FaLinkedin} from 'react-icons/fa'

//import logo from "./Images/Logos/logo.png"
import whiteLogo from "./Images/Logos/whiteLogo.png"
import {EBoardCard} from './Eboard';

import OliviaPicture from "./Images/EboardPictures/OliviaPicture.png"
import JasmynPicture from "./Images/EboardPictures/JasmynPicture.jpeg"
import UjjwalaPicture from "./Images/EboardPictures/UjjwalaPicture.jpg"
import IshaPicture from "./Images/EboardPictures/IshaPicture.jpg"
import JoyPicture from "./Images/EboardPictures/JoyPicture.jpg";
import OlivePicture from "./Images/EboardPictures/OlivePicture.jpeg";

import GroupPicture from "./Images/ClubPictures/GroupPicture.jpg";

import placeHolder from "./Images/EboardPictures/placeholderPic.webp"
// import { link } from 'fs';

function Home() {
  
 
    
    return (
      <div className="page">
        
        <div className="site-header">

                <img src = {whiteLogo} alt = "logo" id = "image" className='fram'/>
                {/* <nav> */}

                 
                  <Link to="events" smooth={true} duration={500} offset={-150}>
                    <Button className="nav-bar-buttons-events">Events</Button>
                  </Link>
                  <Link to="about" smooth={true} duration={500} offset={-150}>
                    <Button className="nav-bar-buttons">About Us</Button>
                  </Link>
                  <Link to="join" smooth={true} duration={500} offset={-150}>
                    <Button className="nav-bar-buttons">Join Us</Button>
                  </Link>
                  <Link to="resources" smooth={true} duration={500} offset={-150}>
                  <Button className="nav-bar-buttons">Resources</Button>
                  </Link>
                  <Link to="eboard" smooth={true} duration={500} offset={-150}>
                    <Button className="nav-bar-buttons">EBoard</Button>
                  </Link>
                {/* </nav> */}
        </div>

        <div className="page-content">
          <br></br>

          <div style={{backgroundColor: "#E0F2FD", overflow: "hidden", display: "flex", justifyContent: "center"}}>
            <section id="events">
              <br></br>
              <h1 id="Events" style={{marginBottom: "4vh"}}>Upcoming Events</h1>

              <div className='events'>
                <Container>
                  <Row>
                    <Col >
                      <h2><u>Fall Involvement Fair</u></h2>
                      <h3>Date: Monday, 8/26 from 1-4p.m.</h3>
                      <h3>Location: Academy Street</h3>
                      <p>Stop by our table to learn about our club and events we are planning for the upcoming semester! We have a lot of fun things planned and can't wait to meet everyone!</p>
                    </Col>
                    <Col style = {{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                      <Button 
                        style={{padding: "1vh", marginBottom: "1vh",  fontSize: "2vw", backgroundColor: "#4682B4", border: "0px", color: "white"}} 
                        onClick={() => window.location.href = "https://www.instagram.com/acmwud/"}
                        >
                         Follow us on Instagram!
                         </Button>
                      <br></br>
                      <Button 
                        style={{padding: "1vh", fontSize: "2vw", backgroundColor: "#4682B4", border: "0px", color: "white"}} 
                        onClick={() => window.location.href = "https://forms.gle/sdKo1PJ4JWxFqqfo7"}
                        >
                        Join our email list!
                      </Button>
                    </Col>
                  </Row>
                </Container>
                {/* <br></br>
                <br></br>
                <br></br>

                <h2><u>First Fall Meeting</u></h2>
                <h3>Date:</h3>
                <h3>Location:</h3>
                <span>Description of event</span> */}
              </div>
            </section>
          </div>

          <div style={{backgroundColor: "white", overflow: "hidden", marginBottom: "6vh"}}>
          <section id="about">
          <h1 style={{marginTop: "6vh"}} >About Us</h1>
          <Container style={{marginTop: "2%"}} >
            <Row>
              <Col>
                <p style = {{fontSize: "1vw", marginBottom: "2.5vh"}} >
                  We are a group of students that support women and nonbinary people in technology-driven fields at the University of Delaware. 
                  We like to hang out together to chat and discuss professional or technical topics, as well as to serve as a support group for 
                  ourselves and other students. Our goal is to promote women and nonbinary people in technology at UD, have fun and help students
                  succeed in college.
                </p>


                <p style = {{fontSize: "1vw", marginBottom: "2.5vh"}}>
                  ACM-W is open to all undergraduate, graduate, and faculty in technology driven fields. Anyone is welcome to join us.
                </p>


                <p style = {{fontSize: "1vw", marginBottom: "2.5vh"}}>
                  We are a registered chapter of the Association for Computing Machinery's Council on Women in Computing (ACM-W). Learn more about our parent organization here!
                </p>

                <Button style={{width: "100%", padding: 5, fontSize: "1.5vw", backgroundColor: "#f4a300ff", border: 0}}  onClick={() => window.location.href = "https://women.acm.org/"}>Learn more about our parent organization!</Button>

              </Col>
              <Col>
                <img src={GroupPicture} alt="logo" style={{width: "100%"}} />

              </Col>
            </Row>
          </Container>
          </section>
          </div>

          <div style={{backgroundColor: "#E0F2FD", overflow: "hidden"}}>
          <section id="join">
          <h1 style={{marginTop: "6vh", marginBottom: "4vh"}}>Join Us</h1>
        
          <div style ={{display: "flex", justifyContent: "center", marginBottom: "6vh"}}>
            <iframe title= "join email list google form" src="https://forms.gle/sdKo1PJ4JWxFqqfo7" style={{width: "70vw", height: "60vh"}} ></iframe>
          </div>
          </section>
          </div>


          <div style={{backgroundColor: "white", marginTop: 0, marginBottom: "6vh", overflow: "hidden"}}>
          <section id="resources">
          <h1 style = {{marginTop: "6vh", marginBottom: "4vh"}}>Resources</h1>

            <Container className="resources">
              <h2 style={{marginBottom: "2.5%"}}><u>Internships and Interviews</u></h2>

              <Row>
                <Col className="resources-columns">
                  <div> 
                      <h3>Find Internship Opportunities</h3>

                      <a href="https://github.com/SimplifyJobs/Summer2025-Internships"><li>Summer 2025 Tech Internships by Pitt CSC</li></a>
                      <a href="https://github.com/Ouckah/Summer2025-Internships?tab=readme-ov-file"><li>Summer 2025 Tech Internships by Ouckah & CSCareers</li></a>
                      <a href="https://simplify.jobs/internships"><li>Simplify</li></a>
                      <a href="https://www.wayup.com/"><li>WayUp</li></a>
                      <a href="https://ripplematch.com/?utm_source=Google&utm_medium=organic_social&utm_campaign=growth_google_ad&utm_content=signup_link&utm_term=null&r=GtE7Qf&utm_source=Google&utm_medium=cpc&utm_campaign=LD%7CB2C%7CBrand&utm_term=ripplematch&gad_source=1&gclid=CjwKCAjw4f6zBhBVEiwATEHFVhGPNn5xNv4R3dewM6ccs8y9DiMOR0_he2l5q9t8zK9IXRvUFI2dFRoCssIQAvD_BwE"><li>RippleMatch</li></a>
                      <a href="https://www.linkedin.com/jobs/search?keywords=&location=United%20States&geoId=103644278&f_TPR=&f_E=1&position=1&pageNum=0"><li>LinkedIn</li></a>
                  </div>
                  
                </Col>
                <Col className="resources-columns">
                  <div>   
                      <h3>Resume Help</h3>

                      <a href="https://resumeworded.com/"><li>Resume Worded</li></a>
                      <a href="https://www.tealhq.com/tools/resume-builder"><li>TealAI</li></a>
                      <a href="https://www.udel.edu/students/career-center/students/resume/"><li>UD Career Services</li></a>
                      <li>Your Friends!</li>
                      <li>Your Professors!</li>
                      <li>Upperclassmen!</li>
                  </div>
                  
                </Col>
                <Col className="resources-columns">
                  <div> 
                      <h3>Interview Prep Resources</h3>

                      <a href="https://www.theforage.com/simulations/girls-who-code/technical-interview-prep-ayks?utm_source=company_website&utm_medium=application&utm_creative=sharelink"><li>Girls Who Code Technical Interview Prep Course</li></a>
                      <a href="https://leetcode.com/problemset/"><li>LeetCode</li></a>
                      <a href="https://neetcode.io/"><li>NeetCode</li></a>
                      <a href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2"><li>Striver's Sheet</li></a>
                      <a href="https://www.codepath.org/"><li>CodePath</li></a>
                      <a href="https://www.upsend.co/"><li>Upsend</li></a>
                  </div>
                </Col>
              </Row>
              <h2 style={{marginTop: "2.5%", marginBottom: "2.5%"}}><u>Conferences and Organizations</u></h2>
              <Row>
                <Col className="resources-columns">
                  <div> 
                      <h3>Conferences</h3>

                      <a href="https://ghc.anitab.org/"><li>Grace Hopper Conference</li></a>
                      <a href="https://www.wecodeconference.com/"><li>Harvard WECode</li></a>
                      <a href="https://gotechnica.org/"><li>Technica Hackathon</li></a>
                      <a href="https://tapiaconference.cmd-it.org/"><li>Tapia Conference</li></a>
                      <a href="https://swe.org/?utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-_D7eKzZrBqiU9jLcUyCgJgGZiphKG4XR_dbNvnm-fzisPhCZPtH5hcJNGotcx2YbXMYQhG"><li>Society of Women Engineers</li></a>
                      <a href="https://convention.nsbe.org/"><li>National Society of Black Engineers Convention</li></a>
                      <a href="https://conference.aises.org/"><li>American Indian Science and Engineering Conference</li></a>
                      <a href="https://shpe.org/nc2024/?utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-_D7eKzZrBqiU9jLcUyCgJgGZiphKG4XR_dbNvnm-fzisPhCZPtH5hcJNGotcx2YbXMYQhG"><li>Society of Hispanic Professional Engineers Convention</li></a>

                  </div>
                  
                </Col>
                <Col className="resources-columns">
                  <div>   
                      <h3>Organizations</h3>

                      <a href="https://rewritingthecode.org/"><li>Rewriting the Code</li></a>
                      <a href="https://girlswhocode.com/"><li>Girls Who Code</li></a>
                      <a href="https://www.colorstack.org/"><li>Color Stack</li></a>

                  </div>
                  
                </Col>
                <Col className="resources-columns">
                  <div> 
                      <h3>Conference Scholarships</h3>

                      <li>RTC Conference Scholarship</li>
                      <li>Google Conference Scholarship</li>

                  </div>
                </Col>
              </Row>
            </Container>
            </section>
            </div>

            {/* <div style={{backgroundColor: "#00309B", marginTop: 0, overflow: "hidden"}}>hello</div>
            <div style={{backgroundColor: "#E0F2FD", marginTop: 0, overflow: "hidden"}}>hello</div> */}
            {/* <div style={{backgroundColor: "#F5F5F5", marginTop: 0, overflow: "hidden"}}>hello</div>
            <div style={{backgroundColor: "#F5F5F5", marginTop: 0, overflow: "hidden"}}>hello</div> */}


          <div style={{backgroundColor: "#E0F2FD", marginTop: "0%", overflow: "hidden"}}>
          <section id="eboard">
          <h1 style={{marginTop: "6vh"}}>E-Board</h1>
          <span style={{display: "flex", justifyContent: "center", fontSize: "1.3vw", marginBottom: "2vh"}}><i>2024 - 2025</i></span>
          <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 0}}>
            <EBoardCard name='Olive Odida' position='President' image={OlivePicture} githubURL='https://github.com/oodida' linkedinURL='https://www.linkedin.com/in/olive-odida/' ></EBoardCard>

            <EBoardCard name='Stephanie Park' position='Vice President' image={placeHolder} githubURL='https://github.com/stephaaniepark' linkedinURL='https://www.linkedin.com/in/stephanie-park-12643a323/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' ></EBoardCard>

            <EBoardCard name='Joy Mwaria' position='Secretary (Fall)' image={JoyPicture} githubURL='https://github.com/joymmw' linkedinURL='https://www.linkedin.com/in/joymwaria/' ></EBoardCard>

            <EBoardCard name='Isha Kashif' position='Secretary (Spring)' image={IshaPicture} githubURL='https://github.com/ishakashif' linkedinURL='https://www.linkedin.com/in/ishakashif/' ></EBoardCard>

          </div>

          <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>

            <EBoardCard name='Ujjwala Pothula' position='Treasurer' image={UjjwalaPicture} githubURL='https://github.com/ujjwalaa7' linkedinURL='https://www.linkedin.com/in/ujjwalap16/' ></EBoardCard>

            <EBoardCard name='Jasmyn Navarro' position='Mentorship Coordinator' image={JasmynPicture} githubURL='https://github.com/JayNavarro' linkedinURL='https://www.linkedin.com/in/jasmyn-navarro/' ></EBoardCard>

            <EBoardCard name='Olivia Karney' position='Website Manager' image={OliviaPicture} githubURL='https://github.com/okarney' linkedinURL='https://www.linkedin.com/in/olivia-karney/' ></EBoardCard>

          </div>
          <br></br>
          <br></br>
          <br></br>
          </section>

          <div style={{backgroundColor: "#0639a7", padding: "1em", display: "flex", justifyContent: "center", gap: "3vw"}}>
            <a href="https://www.linkedin.com/groups/8936004/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size="2.5vw" color="white" />
            </a>
            <a href="https://www.instagram.com/acmwud/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size="2.6vw" color="white" />
            </a>

          </div>
          


          </div>
    
        </div>

  
      
      </div>

  
    );
  }
  export default Home;