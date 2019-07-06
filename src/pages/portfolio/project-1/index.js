import React from "react";
import Projects from "../../../components/projects";
// import ImageLoader from "../../../components/image-loader";
import Img from "gatsby-image";


export const frontmatter = {
    portfolio: true,
    order: 1,
    title: "Project 1 ",
    color: "blue",
    description: "Description for project 1",
    path: "/portfolio/project-1",
    media: [
      {
        type: "image",
        img: "/images/color-picker-winner.png",
        placeholder: "/images/color-picker-winner.png",
        aspectRatio: 0.75
      }
    ],
    styles: {
      background: "#f5f6f7"
    }
  };

  const ProjectOne = props => {
      const { title, media } = frontmatter;

      return (
          <Projects {...props} frontmatter={frontmatter}>
              <div className="portfolio">
                  <section className="project">
                    <div className='title'>
                        {title}
                    </div>
                    <div className="project-img">
                     
                    </div>
                  </section>
              </div>
          </Projects>
      )
  }

  export default ProjectOne;