import React, {useEffect} from 'react'
import { Jumbotron, Button } from 'reactstrap';


const About = () => {

    useEffect(() => {
        document.title = "About";
    }, []);


    return (
      <div>
        <Jumbotron>
         
          <ul>
            <li><h6 className="display-5">This web application is used to display, add and delete academic courses</h6></li>  
            <li><h6 className="display-5">Written in React.JS and Java Spring Boot</h6></li>
            <li><h6 className="display-5">Developed by Sidharrth Sahai</h6> </li>
          </ul>
                  
        </Jumbotron>
      </div>
    );
  };
  

export default About;


