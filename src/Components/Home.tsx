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
           
          
          {/* <Container style={{marginLeft: 2}}>
            <Row>
               <Col>
                <img src = {logo} alt = "logo" id = "image" className='fram'/>
              </Col> 
              <Col>
                <Button className="nav-bar-buttons-events">Events</Button>
              </Col>
              <Col>
                <Button className="nav-bar-buttons">About Us</Button>
              </Col>
              <Col>
                <Button className="nav-bar-buttons">Join Us</Button>
              </Col>
              <Col>
                <Button className="nav-bar-buttons">Resources</Button>
              </Col>
              <Col>
                <Button className="nav-bar-buttons">EBoard</Button>
              </Col>
            </Row>
          </Container> */}
        </div>

        <div className="page-content">
          <br></br>


          <h1>Upcoming Events</h1>

          <h1>About Us</h1>

          <h1>Join Us</h1>

          <h1>Resources</h1>

          <h1>Eboard</h1>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>


          <br></br>

          Event 1

          as;dlkfjasdf
          as;dfljkasdf;lkj
          asd;lfjkasdlfkj
          as;dlfjas;dfjk
        
        </div>

        

        {/* <div style={{backgroundColor: "#0b7b9e"}}>
          <br></br>
          <br></br>

        </div>

        <div style={{backgroundColor: "#dddace"}}>
          <br></br>
          <br></br>

        </div>

        <div style={{backgroundColor: "#f2f3f4"}}>
          <br></br>
          <br></br>

        </div> */}

        <span>Home</span>

        <Button className="nav-buttons" onClick={() => navigate("/Events")}> Events </Button>      
        
      
      </div>

  
    );
  }
  export default Home;