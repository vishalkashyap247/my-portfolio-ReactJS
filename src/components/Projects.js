import React from "react";
import { projectss } from "../projectData/projectss";
import "../styles/project.css"

function Projects() {
  return (
      <div className="container fluid">
      <h1 className="myDesc">My Projects</h1>
        <div className="row">
            
        {
        projectss.map((project) => {
            return (
                <div className="container fluid card-body col-md-4 col-lg-4 col-sm-12 projecto" >
                <a href={project.link} key={project.image} className="card">
              <div>
                <img
                  alt="project_img"
                  className="projectClassImg"
                  src={project.image}
                  />
                <div className="textProject">
                  <h2>{project.subtitle}</h2>
                  <h1>{project.title}</h1>
                  <p>{project.description}</p>
                </div>
              </div>
            </a></div>
          );
        })}
        <a className="projectAnchor" href="https://github.com/vishalkashyap247"><h3>More projects @ <i class="fa fa-github fa-2xl" aria-hidden="true"></i></h3></a>
        </div>
      </ div>
  );
}

export default Projects;
