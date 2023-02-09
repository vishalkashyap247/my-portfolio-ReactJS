import React from "react";
import "../styles/about.css";

function About(){
    return (
        <div className="home">
            <img src="../images/cloud.png" className="img1st" alt="cloud" />
            <h1 className="myTitle">I'm Vishal</h1>
            <h3 className="myDesc">A full stack web developer.</h3>
            <img src="../images/cloud.png" className="img2nd" alt="cloud" />
            <br/><br/>
            <div className="myLinks">
                <a href="https://github.com/vishalkashyap247"><i class="fa fa-github fa-2xl linkEffect" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/vishal-kashyap-447a451ba"><i class="fa-brands fa-linkedin fa-2xl linkEffect"></i></a>
            </div>
        </div>
    )

}

export default About;