import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/MovieLoopup.png";
import projImg2 from "../assets/img/proj-img2.png";
import projImg3 from "../assets/img/webscraping.png";
import projImg4 from "../assets/img/BudgetApp.png";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";


export const Projects = () => {
    
    const projects = [
        { 
            title: "iOS Movie App",
            description: "",
            technologies: "Swift, SwiftUI, Google Firebase, MVVM Design",
            imgURL: projImg1,
            URL: "https://github.com/jungkj/MovieLookUp"
            
        },
        {
            title: "Xv6 MFQ Scheduler",
            description: "Engineered and implemented a Multi-Level Feedback Queue (MFQ) scheduler in xv6, replacing the basic Round Robin algorithm. Created four priority levels with specifically tailored time quantums ranging from 200 ms to 1600 ms", 
            technologies: "C",
            imgURL: projImg2,
            URL: "https://github.com/jungkj/Xv6MFQ"

        },
        {
            title: "Stock Market Sentiment Bot",
            description: "Used Twitter Developer API to evaluate over 500,000 tweets per month to generate sentiment score on market with 85% accuracy. Equipped Bot with natural language processing (NLP) to convert raw data into market sentiment.",
            technologies: "Python, NLP, Web Scraping", 
            imgURL: projImg3,
            URL: "https://github.com/jungkj/webscraping",
        },
        {
            title: "Budget Badger",
            description: "Designed and developed Budget Badger, a gamified budgeting web-app tailored for college students, allowing for budgeting to become Mfun and rewarding. Deployed the app to fellow students and gained 100+ student users in one week.",
            technologies: "React, JavaScript, Bootstrap, MongoDB, CSS",
            imgURL: projImg4,
            URL: "https://budget-badger.glitch.me/"
        },
    ];

    return (
        <section className = "project" id = "projects">
            <Container>
                <Row>
                    <Col size = {12}>
                    <h2>Projects</h2>
                    <p>Projects I have completed</p>
                    
                    <Tab.Container id = "projects-tabs" defaultActiveKey = "first">
                        <Nav variant="pills"  className = "nav-pills mb-5 justify-content-center align-items-center" id = "pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey = "first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey = "second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">
                            Tab 3
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey = "fourth">Tab 4</Nav.Link>
                        </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey = "first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return(
                                                <ProjectCard 
                                                key = {index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey = "second">
                                secondPane
                            </Tab.Pane>
                            <Tab.Pane eventKey = "third">
                                ThirdPane
                            </Tab.Pane>
                            <Tab.Pane eventKey = "fourth">
                                FourthPane
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>

                    </Col>
                </Row>
            </Container>
            <img className = "background-image-right" src = {colorSharp2} alt = "background img right"></img>
        </section>   
    ) 
}
