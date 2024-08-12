import '../App.css';

// import LinkedInLogo from "./Images/Icons/LinkedInLogo.png";
// import GithubLogo from "./Images/Icons/GithubLogo.png";
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa'
// import { link } from 'fs';



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

       <div style={{marginTop: "1.2vh", marginBottom: "1.5vh"}}>
        <a href={linkedinURL}>
          <FaLinkedin style={{marginRight: "1.5vw"}} size="2.5vw" color="black" />
        </a>
        <a href={githubURL} target="_blank" rel="noopener noreferrer">
          <FaGithub size="2.5vw" color="black" />
        </a>
      </div>   
            
        </div>
        







      </div>




  
    );
  }
  
