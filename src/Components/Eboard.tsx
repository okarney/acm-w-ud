import '../App.css';

import {SocialIcon} from "react-social-icons";
import LinkedInLogo from "./LinkedInLogo.png";
import GithubLogo from "./GithubLogo.png";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


interface CardProps {
    name: string;
    position: string;
    image: string;
    githubURL: string;
    linkedinURL: string;
}

export function EBoardCard({name, position, image, githubURL, linkedinURL}: CardProps): JSX.Element {

    return (
      <div style={{backgroundColor: "#F4F4F4", height: "22%", width: "17vw", border: "1px solid #000000", borderRadius: 10, display: "flex", flexDirection: "column", alignItems: "center", margin: "3%"}}>

        <img style={{width: "90%", borderRadius: 10, marginTop: "4.5%", marginBottom: 0}} src = {image} alt = "logo" id = "image" className='fram'/>

        <h1 style={{fontSize: "2vw", marginTop: "4%", marginBottom: 0}}>{name}</h1>

        <p style={{fontSize: "1.2vw", marginTop: "2%", marginBottom: "1%"}}><i>{position}</i></p>

        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>

        <Link to={linkedinURL}>
          <Button style={{backgroundColor: "#F4F4F4", border: "1px solid #F4F4F4", marginBottom: "2%"}} type="button">
          <img src={LinkedInLogo} alt="logo" style={{width: "2.5vw"}} />
          </Button>
        </Link>

        <Link to={githubURL}>
          <Button style={{backgroundColor: "#F4F4F4", border: "1px solid #F4F4F4", marginBottom: "2%"}} type="button">
          <img src={GithubLogo} alt="logo" style={{width: "2.5vw"}} />
          </Button>
        </Link>
            
            
        </div>
        







      </div>




  
    );
  }
  
