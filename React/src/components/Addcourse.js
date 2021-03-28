import { Button } from 'reactstrap';
import React, { Fragment, useEffect, useState } from 'react';
import { Container, Form, FormGroup, Input } from 'reactstrap';
import axios from "axios";
import base_url from "./../api/bootapi";
import { toast } from "react-toastify";

const AddCourse = () => {

    useEffect(() => {
        document.title = "Add Course";
    }, []);

    const [courses, setCourses] = useState({})

    //form handler function
    const handleForm = (e) => {
        console.log(courses)
        postDataToServer(courses)
        e.preventDefault()
    }

    //creating function to post data on server
    const postDataToServer = (data) => {
        axios.post(`${base_url}/courses`, data).then(
            (response) => {
                console.log(response)
                console.log("success")
                toast.success("New course posted inside the server");
                setCourses({ id:"", title:"", description:""})
            },
            (error) => {
                console.log(error);
                console.log("error");
                toast.error("Oops! Something went haywire!");
            }
        );
    };



    return (
     <Fragment>
        <Form onSubmit = {handleForm}>
            <FormGroup>
                <label for = "userId"> Course ID </label>
                <Input 
                    type = "text" 
                    placeholder = "Enter here" 
                    name = "userId" 
                    id = "userId" 
                    onChange = { (e) =>{
                            setCourses({...courses, id: e.target.value })
                    }

                    }
                />
            </FormGroup>

            <FormGroup>
                <label for = "title"> Course Title </label>
                <Input
                    type = "text"
                    placeholder = "Enter title here"
                    id = "title" 
                    onChange = { (e) =>{
                        setCourses({...courses, title: e.target.value })
                     }             
                   }    
                />
            </FormGroup>

            <FormGroup>
                <label for = "description"> Course Description </label>
                <Input
                    type = "textarea"
                    placeholder = "Enter description here"
                    id = "description"    
                    style = {{height : 125}}  
                    onChange = { (e) =>{
                        setCourses({...courses, description: e.target.value })
                     }             
                   }             
                />
            </FormGroup>
            <Container className = "text-center">
                <Button type = "submit" color = "success">Add Course</Button>
                <Button type = "reset" onClick={()=>{
                    setCourses({ id:"", title:"", description:""})
                }} color = "warning ml-3">Clear</Button>
            </Container>
        </Form> 
     </Fragment>
    );
};

export default AddCourse;