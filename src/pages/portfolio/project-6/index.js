import React from "react"
import Projects from "../../../components/projects"
import ImageLoader from "../../../components/image-loader"

export const frontmatter = {
  portfolio: true,
  category: "code",
  tags: ["HTML, CSS, JavaScript"],
  siteUrl: "https://www.chrisshimmin.com/projects_folder/hobokencoders/index",
  siteTitle: "View Project",
  order: 6,
  title: "Hoboken Coders",
  color: "blue",
  description: "A blog potential blog created with hopes of a MeetUp group.",
  role: "This is the role",
  goal: "this is the goal",
  timeframe: "this is the time frame",
  functionality: "functionality",
  path: "/portfolio/project-6",
  media: [
    {
      type: "image",
      img: "/images/hobokenCoders-cover.jpg",
      placeholder: "/images/hobokenCoders.jpg",
      aspectRatio: 0.75,
    },
    {
      type: "image",
      img: "/images/hobokenCoders-img-1.jpg",
      placeholder: "/images/hobokenCoders-img-1.jpg",
      aspectRatio: 0.75,
    },
    {
      type: "image",
      img: "/images/hobokenCoders-img-2.jpg",
      placeholder: "/images/hobokenCoders-img-2.jpg",
      aspectRatio: 0.75,
    },
  ],
  styles: {
    background: "#f5f6f7",
  },
}

const Project = props => {
  const { title, description, siteTitle, siteUrl, media } = frontmatter

  return (
    <Projects {...props} frontmatter={frontmatter}>
      <div className="project">
        <section className="content-container">
          <div
            className="row middle-xs"
            style={{ background: "#f5f6f7", padding: `1rem 1rem 2rem` }}
          >
            <section className="col-xs-8 portfolio-copy--main">
              <h1 className="project-title"> {title} </h1>
              <div className="project-description">
                <h3>Description</h3>
                <p>{description}</p>
              </div>
            </section>
            <section className="col-xs-4 portfolio-website-link">
              <div className=" row middle-xs">
                <a href={siteUrl} target="_blank">
                  <button className="button button-primary">{siteTitle}</button>
                </a>
              </div>
            </section>
          </div>
        </section>

        <section className="project-media">
          <div className="project-cover-image">
            <div className="col-xs-12 project-media-item">
              <ImageLoader
                img={media[0].img}
                alt="alt tag for image"
                width="100%"
                aspectRatio={400 / 200}
              />
            </div>
          </div>
        </section>

        <section className="project-media">
          <div className="row">
            <div className="col-xs-6 project-media-item">
              <ImageLoader
                img={media[1].img}
                alt="alt tag for image"
                width="100%"
                aspectRatio={400 / 200}
              />
            </div>
            <div className="col-xs-6 project-media-item">
              <ImageLoader
                img={media[2].img}
                alt="alt tag for image"
                width="100%"
                aspectRatio={400 / 200}
              />
            </div>
          </div>
        </section>
      </div>
    </Projects>
  )
}

export default Project
