import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerIMG from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Systems Developer", "Backend Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    // Period of time in intervals for text
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        // i determines if we're out of elements in the loop
        let i = loopNum % toRotate.length;
        
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        setText(updatedText);
        if (isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } // Means it is completely deleted 
        else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className = "banner" id = "home">
            <Container>
                <Row className = "align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className = "taglin"> Welcome to my portfolio </span>
                        <h1>{"Hello, I'm Andy Jung"}<span className = "wrap">{text}</span></h1>
                        <p>Hi! I am an upcoming 2024 graduate coming out of Boston College studying Finance, Computer Science, and Information Systems. I specialize in backend development.</p>
                        <button onClick = {() => console.log('connect')}> Let's Connect! <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <img src = {headerIMG} alt = "Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}