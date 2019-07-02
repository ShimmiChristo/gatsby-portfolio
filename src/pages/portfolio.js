import React from "react"
import styles from "../styles/about-css-modules.module.css"
import Projects from "../components/projects"

console.log(styles);

const Project = props => (
    <div className='projects'>
        {props.name}
    </div>
)

export default () => {
    <Projects>
        <Project name="Chris"

        />
    </Projects>
}

