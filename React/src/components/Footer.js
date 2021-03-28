import React from 'react'
import { Card, CardBody } from "reactstrap";

const Footer = () => {
    return (
        <div>            
            <Card className = "my-2 bg-warning">
                <CardBody>
                    <h6 className = "text-center my-2">2021 Copyright &copy; CourseHub, Inc. </h6>
                </CardBody>
            </Card>  
        </div>
    )
}

export default Footer
