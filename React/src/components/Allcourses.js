import React, { useEffect, useState }  from "react"
import Course from "./Course"
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";


const Allcourses = () => {

    useEffect(() => {
        document.title = "All Courses";
    }, []);

    //function to call server

    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                console.log(response.data);
                toast.success("Courses have safely landed inside the server");
                setCourses(response.data);
            },
            (error) => {
                console.log(error);  
                toast.error("Something went wrong");      
            }
        )
    }

    useEffect(() => {
        getAllCoursesFromServer();
    }, []);
    
    const [courses, setCourses] = useState([])

    const updateCourses= (id) => {
        setCourses(courses.filter((c) => c.id != id)); 
    }

    return(
        <div>
            <h1>All Courses</h1>
            <p>My favourite courses which I opted to take are as follows :</p>
            {
                courses.length > 0 ? courses.map((item) => <Course key = {item.id} course = {item} update = {updateCourses} />) 
                : "No Courses"
            }
        </div>

    )
}


export default Allcourses;