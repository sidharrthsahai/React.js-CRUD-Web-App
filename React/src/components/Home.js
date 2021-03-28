
import React, {useEffect} from "react"
import { Jumbotron, Container, Button } from "reactstrap"


const Home = () => {

    useEffect(() => {
        document.title = "Home";
    }, []);


    return(
        <div>
            <Jumbotron className = "text-center">
                <h2>Developed by - Sidharrth Sahai</h2><br />
                <h6>Front End - React.js</h6>
                <h6>Back End - Java Spring Boot</h6><br />
                <p>
                    This Web Application displays the courses I took during my Master's in Computer Science from University College Dublin
                </p>
                <Container>
                    <Button color = "info">Start Using</Button>
                </Container>
            </Jumbotron>          
        </div>    
    )
}

export default Home;