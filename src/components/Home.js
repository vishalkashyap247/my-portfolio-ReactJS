import React from "react";
import "../styles/home.css";
import About from "./About";
import Container from 'react-bootstrap/Container';

import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import AboutMeDetail from "./AboutMeDetail";

function Home(){
    return (
        <Container fluid>
            <About />
            <Skills />
            <Projects/>
            <Contact />
            <AboutMeDetail/>
        </Container>
    )
}

export default Home;