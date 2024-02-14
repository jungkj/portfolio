import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, technologies, imgURL, URL}) => {
    return (
        <Col size = {12} sm = {6} md = {4}>
            <a href = {URL} target = "_blank" rel = "noopener noreferrer" classname = "proj-link">
            <div className = "proj-imgbx">
                <img src = {imgURL} alt = "Project Img"/>
                <div className = "proj-txtx">
                    <h4> {title} </h4>
                    <h3> Technologies Used: {technologies} </h3>
                    <span>{description}</span>\
                </div>
            </div>
            </a>
        </Col>
    )
}