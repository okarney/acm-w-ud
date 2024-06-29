import { Button, Col, Container, Row } from 'react-bootstrap';
import '../App.css';

import { useNavigate } from 'react-router-dom';

import logo from "./logo.png"


function Home() {

  const navigate = useNavigate();
 
    
    return (
      <div className="page">
        
        <div className="site-header">
                <img src = {logo} alt = "logo" id = "image" className='fram'/>
                
                <Button className="nav-bar-buttons-events">Events</Button>
             
                <Button className="nav-bar-buttons">About Us</Button>
            
                <Button className="nav-bar-buttons">Join Us</Button>
              
                <Button className="nav-bar-buttons">Resources</Button>
              
                <Button className="nav-bar-buttons">EBoard</Button>
           
        </div>

        <div className="page-content">
          <br></br>


          <h1>Upcoming Events</h1>

          <h1>About Us</h1>

          <h1>Join Us</h1>

          <h1>Resources</h1>

            <Container className="resources">
              <h2>Internships and Interviews</h2>

              <Row>
                <Col className="resources-columns">
                  <div> 
                      <h3>Find Internship Opportunities</h3>

                      <li>Summer 2025 Tech Internships by Pitt CSC</li>
                      <li>Summer 2025 Tech Internships by Ouckah & CSCareers</li>
                      <li>Simplify</li>
                      <li>WayUp</li>
                      <li>RippleMatch</li>
                      <li>LinkedIn</li>
                  </div>
                  
                </Col>
                <Col className="resources-columns">
                  <div>   
                      <h3>Resume Help</h3>

                      <li>Resume Worded</li>
                      <li>UD Career Services</li>
                      <li>Your Friends!</li>
                      <li>Your Professors!</li>
                      <li>Upperclassmen!</li>
                  </div>
                  
                </Col>
                <Col className="resources-columns">
                  <div> 
                      <h3>Interview Prep Resources</h3>

                      <li>LeetCode</li>
                      <li>NeetCode</li>
                      <li>Striver's Sheet</li>
                      <li>CodePath</li>
                      <li>Upsend</li>
                  </div>
                </Col>
              </Row>
            </Container>

          <h1>Eboard</h1>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>


          <br></br>

    
        </div>

  
      
      </div>

  
    );
  }
  export default Home;