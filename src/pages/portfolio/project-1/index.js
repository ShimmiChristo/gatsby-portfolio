import React from "react";
// import Layout from "../../../components/layout";
import Projects from "../../../components/projects";



export const frontmatter = {
    portfolio: true,
    order: 3,
    title: "Project 1 ",
    color: "blue",
    description: "Description for project 1",
    path: "/portfolio/project-1",
    media: [
      {
        type: "image",
        img: "/images/agency/agency-poster.png",
        placeholder: "/images/agency/agency-poster-small.png",
        aspectRatio: 0.75
      }
    ],
    styles: {
      background: "#f5f6f7"
    }
  };

  const ProjectOne = props => {
      const { title, styles, media } = frontmatter;

      return (
          <Projects {...props} frontmatter={frontmatter}>
              <div className="portfolio">
                  <section className="project">
                    <div className='title'>
                        {title}
                    </div>
                  </section>
              </div>
          </Projects>
      )
  }

  export default ProjectOne;