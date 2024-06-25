import { Button } from 'react-bootstrap';
import '../App.css';

import { useNavigate } from 'react-router-dom';


function Events() {
 
    const navigate = useNavigate();


    return (
      <div>
        <span>Events</span>

        <Button className="nav-buttons" onClick={() => navigate("/Home")}> Home </Button>      

      </div>


  
    );
  }
  export default Events;