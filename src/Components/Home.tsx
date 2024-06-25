import { Button } from 'react-bootstrap';
import '../App.css';

import { useNavigate } from 'react-router-dom';


function Home() {

  const navigate = useNavigate();
 
    
    return (
      <div>
        <span>Home</span>

        <Button className="nav-buttons" onClick={() => navigate("/Events")}> Events </Button>      
        
      </div>
  
    );
  }
  export default Home;