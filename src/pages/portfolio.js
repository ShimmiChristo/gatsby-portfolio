import React from "react"
import Projects from "../components/projects"


const Project = props => (
    <div className='projects'>
            {props.name}
        <h2 className="project-title">
            {props.title}
        </h2>
        
    </div>
)

export default () => (
    <Projects>
        <Project 
            name="Chris"
            title="This is my first Title"
            img="Portfolio Image"
        />
    </Projects>
)


