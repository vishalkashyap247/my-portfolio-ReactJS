import React from "react";
import { skillData } from "../projectData/skillData";
import "../styles/skills.css";
function Skills(){
    return(
        <div className="skill_section">

        <div className="container fluid ">
            <h1 className="myDesc">My skill set</h1>
            <div className="row skill_container">
                {
                    skillData.map((data)=>{
                        return(
                            <div className="col-md-6 col-lg-6 col-sm-12 " >
                                <p className="skill_item"><img src={data.srcc} alt="tech img" className="skillImg" /> {data.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </div>
    );
}

export default Skills;