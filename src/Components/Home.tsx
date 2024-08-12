import { Button, Col, Container, Row } from 'react-bootstrap';
import '../App.css';

import { Link } from 'react-router-dom';
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
                
                <Button className="nav-bar-buttons-events">Events</Button>
             
                <Button className="nav-bar-buttons">About Us</Button>
            
                <Button className="nav-bar-buttons">Join Us</Button>
              
                <Button className="nav-bar-buttons">Resources</Button>
              
                <Button className="nav-bar-buttons">EBoard</Button>
           
        </div>

        <div className="page-content">
          <br></br>

          <div style={{backgroundColor: "#E0F2FD", overflow: "hidden"}}>
            <h1 id="Events">Upcoming Events</h1>

            <h2>Fall Involvement Fair</h2>
            <h2>First Fall Meeting</h2>

          </div>

          <div style={{backgroundColor: "white", overflow: "hidden", marginBottom: "6vh"}}>

          <h1 style={{marginTop: "6vh"}} >About Us</h1>

          <Container style={{marginTop: "2%"}} >
            <Row>
              <Col>
                <p style = {{fontSize: "1vw"}} >
                  We are a group of students that support women and non-binary people in technology-driven fields at the University of Delaware. 
                  We like to hang out together to chat and discuss professional or technical topics, as well as to serve as a support group for 
                  ourselves and other students . Our goal is to promote women and nonbinary people in technology at UD, have fun and help students
                  succeed in college.
                </p>

                <br></br>

                <p style = {{fontSize: "1vw"}}>
                  ACM-W is open to all undergraduate, graduate, and faculty in technology driven fields. Anyone is welcome to join us.
                </p>

                <br></br>

                <p style = {{fontSize: "1vw"}}>
                  We are a registered chapter of the Association for Computing Machinery's Council on Women in Computing (ACM-W). Learn more about our parent organization here!
                </p>

                <Button style={{width: "100%", padding: 5, fontSize: "1.5vw", backgroundColor: "#f4a300ff", border: 0, marginTop: "1vh"}}  onClick={() => window.location.href = "https://women.acm.org/"}>Learn more about our parent organization!</Button>

              </Col>
              <Col>
                <img src={GroupPicture} alt="logo" style={{width: "100%"}} />

              </Col>
            </Row>
          </Container>
          </div>

          <div style={{backgroundColor: "#E0F2FD", overflow: "hidden"}}>
          <h1 style={{marginTop: "4vh", marginBottom: "4vh"}}>Join Us</h1>
        
          <div style ={{display: "flex", justifyContent: "center", marginBottom: "6vh"}}>
            <iframe title= "join email list google form" src="https://forms.gle/sdKo1PJ4JWxFqqfo7" style={{width: "70vw", height: "60vh"}} ></iframe>
          </div>

          </div>


          <div style={{backgroundColor: "white", marginTop: 0, marginBottom: "6vh", overflow: "hidden"}}>
          <h1 style = {{marginTop: "6vh", marginBottom: "4vh"}}>Resources</h1>

            <Container className="resources">
              <h2 style={{marginBottom: "2.5%"}}><u>Internships and Interviews</u></h2>

              <Row>
                <Col className="resources-columns">
                  <div> 
                      <h3>Find Internship Opportunities</h3>

                      <Link to="https://github.com/SimplifyJobs/Summer2025-Internships"><li>Summer 2025 Tech Internships by Pitt CSC</li></Link>
                      <Link to="https://github.com/Ouckah/Summer2025-Internships?tab=readme-ov-file"><li>Summer 2025 Tech Internships by Ouckah & CSCareers</li></Link>
                      <Link to="https://simplify.jobs/internships"><li>Simplify</li></Link>
                      <Link to="https://www.wayup.com/"><li>WayUp</li></Link>
                      <Link to="https://ripplematch.com/?utm_source=Google&utm_medium=organic_social&utm_campaign=growth_google_ad&utm_content=signup_link&utm_term=null&r=GtE7Qf&utm_source=Google&utm_medium=cpc&utm_campaign=LD%7CB2C%7CBrand&utm_term=ripplematch&gad_source=1&gclid=CjwKCAjw4f6zBhBVEiwATEHFVhGPNn5xNv4R3dewM6ccs8y9DiMOR0_he2l5q9t8zK9IXRvUFI2dFRoCssIQAvD_BwE"><li>RippleMatch</li></Link>
                      <Link to="https://www.linkedin.com/jobs/search?keywords=&location=United%20States&geoId=103644278&f_TPR=&f_E=1&position=1&pageNum=0"><li>LinkedIn</li></Link>
                  </div>
                  
                </Col>
                <Col className="resources-columns">
                  <div>   
                      <h3>Resume Help</h3>

                      <Link to="https://resumeworded.com/"><li>Resume Worded</li></Link>
                      <Link to="https://www.tealhq.com/tools/resume-builder"><li>TealAI</li></Link>
                      <Link to="https://www.udel.edu/students/career-center/students/resume/"><li>UD Career Services</li></Link>
                      <li>Your Friends!</li>
                      <li>Your Professors!</li>
                      <li>Upperclassmen!</li>
                  </div>
                  
                </Col>
                <Col className="resources-columns">
                  <div> 
                      <h3>Interview Prep Resources</h3>

                      <Link to="https://www.theforage.com/simulations/girls-who-code/technical-interview-prep-ayks?utm_source=company_website&utm_medium=application&utm_creative=sharelink"><li>Girls Who Code Technical Interview Prep Course</li></Link>
                      <Link to="https://leetcode.com/problemset/"><li>LeetCode</li></Link>
                      <Link to="https://neetcode.io/"><li>NeetCode</li></Link>
                      <Link to="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2"><li>Striver's Sheet</li></Link>
                      <Link to="https://www.codepath.org/"><li>CodePath</li></Link>
                      <Link to="https://www.upsend.co/"><li>Upsend</li></Link>
                  </div>
                </Col>
              </Row>
              <h2 style={{marginTop: "2.5%", marginBottom: "2.5%"}}><u>Conferences and Organizations</u></h2>
              <Row>
                <Col className="resources-columns">
                  <div> 
                      <h3>Conferences</h3>

                      <Link to="https://ghc.anitab.org/"><li>Grace Hopper Conference</li></Link>
                      <Link to="https://www.wecodeconference.com/"><li>Harvard WECode</li></Link>
                      <Link to="https://gotechnica.org/"><li>Technica Hackathon</li></Link>
                      <Link to="https://tapiaconference.cmd-it.org/"><li>Tapia Conference</li></Link>
                      <Link to="https://swe.org/?utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-_D7eKzZrBqiU9jLcUyCgJgGZiphKG4XR_dbNvnm-fzisPhCZPtH5hcJNGotcx2YbXMYQhG"><li>Society of Women Engineers</li></Link>
                      <Link to="https://convention.nsbe.org/"><li>National Society of Black Engineers Convention</li></Link>
                      <Link to="https://conference.aises.org/"><li>American Indian Science and Engineering Conference</li></Link>
                      <Link to="https://shpe.org/nc2024/?utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-_D7eKzZrBqiU9jLcUyCgJgGZiphKG4XR_dbNvnm-fzisPhCZPtH5hcJNGotcx2YbXMYQhG"><li>Society of Hispanic Professional Engineers Convention</li></Link>

                  </div>
                  
                </Col>
                <Col className="resources-columns">
                  <div>   
                      <h3>Organizations</h3>

                      <Link to="https://rewritingthecode.org/"><li>Rewriting the Code</li></Link>
                      <Link to="https://girlswhocode.com/"><li>Girls Who Code</li></Link>
                      <Link to="https://www.colorstack.org/"><li>Color Stack</li></Link>

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

            </div>

            {/* <div style={{backgroundColor: "#00309B", marginTop: 0, overflow: "hidden"}}>hello</div>
            <div style={{backgroundColor: "#E0F2FD", marginTop: 0, overflow: "hidden"}}>hello</div> */}
            {/* <div style={{backgroundColor: "#F5F5F5", marginTop: 0, overflow: "hidden"}}>hello</div>
            <div style={{backgroundColor: "#F5F5F5", marginTop: 0, overflow: "hidden"}}>hello</div> */}


          <div style={{backgroundColor: "#E0F2FD", marginTop: "0%", overflow: "hidden"}}>

          <h1 style={{marginTop: "6vh"}}>E-Board</h1>
          <span style={{display: "flex", justifyContent: "center", fontSize: "1.3vw", marginBottom: "2vh"}}><i>2024 - 2025</i></span>
          <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 0}}>
            <EBoardCard name='Olive Odida' position='President' image={OlivePicture} githubURL='https://github.com/oodida' linkedinURL='https://www.linkedin.com/in/olive-odida/' ></EBoardCard>

            <EBoardCard name='Stephanie Park' position='Vice President' image={placeHolder} githubURL='https://github.com/' linkedinURL='https://www.linkedin.com/feed/' ></EBoardCard>

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
          <br></br>
          <br></br>


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