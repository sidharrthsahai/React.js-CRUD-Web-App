import React from 'react';
import axios from "axios";
import { toast } from "react-toastify";

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import base_url from '../api/bootapi';

const Course = ({ course, update }) => {

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response) => {
                toast.success("Course deleted");
                update(id)
            },
            (error) => {
                toast.error("Course not deleted! Something went wrong!");      
            }
        )
    }
    return(
        <Card className = "text-center">
            <CardBody>
                <CardSubtitle tag="h6" className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className = "text-center">
                    <Button color = "danger" onClick={()=>{
                        deleteCourse(course.id)
                    }}>Delete</Button>
                    <Button color = "warning ml-3">Update</Button>
                </Container>
            </CardBody>
        </Card>  
    )

}

export default Course; 