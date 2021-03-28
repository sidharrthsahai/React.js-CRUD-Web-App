import React from "react";
import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Row } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import Course from "./components/Course";
import Allcourses from "./components/Allcourses";
import Addcourse from "./components/Addcourse"
import Header from "./components/Header";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddCourse from "./components/Addcourse";
import About from "./components/About";
import Footer from "./components/Footer";


function App() {
  
    const btnHandle = () => {
      toast.error("done", {
        position : "top-center",
      });
    };
  

  return (
    <div>     
      <Router>
        <ToastContainer />  
        <Header />    
        <Container>
         
          <Row className = "py-5">
            <Col md = {4}>
              <Menu /> 
            </Col> 
            <Col md = {8}> 
              <Route path = "/" component = {Home} exact />
              <Route path = "/add-course" component = {AddCourse} exact />
              <Route path = "/view-courses" component = {Allcourses} exact />
              <Route path = "/about" component = {About} exact />
            </Col> 
          </Row>
          
        </Container>   
            
      </Router>  
      <Footer />     
    </div>
  );

}

export default App;
