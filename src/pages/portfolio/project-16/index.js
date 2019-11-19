import React from "react"
import Projects from "../../../components/projects"
import ImageLoader from "../../../components/image-loader"

export const frontmatter = {
  portfolio: true,
  category: "code",
  tags: [
    "HTML, CSS, JavaScript, TypeScript, Angular CLI, Node, Mongoose, MongoDB, AWS",
  ],
  siteUrl: "https://squares.chrisshimmin.com/",
  siteTitle: "View Website",
  githubUrl: "https://github.com/ShimmiChristo/squares-app",
  githubTitle: "View Code",
  order: 16,
  title: "Squares App - Angular CLI, Node, MongoDB, AWS",
  color: "blue",
  description: `App coding project. Custom built with Angular CLI, Sass, Node, MongoDB, AWS and a Restful API. A custom API was built using 
         node and rendered from a Mongo database. The entire site is hosted on a AWS server.`,
  role: "This is the role",
  goal: "this is the goal",
  timeframe: "this is the time frame",
  functionality: "functionality",
  path: "/portfolio/project-16",
  media: [
    {
      type: "image",
      img: "/images/squares-app-cover.png",
      placeholder: "/images/squares-app.png",
      aspectRatio: 0.75,
    },
    {
      type: "image",
      img: "/images/squares-app.png",
      placeholder: "/images/squares-app.png",
      aspectRatio: 0.75,
    },
    {
      type: "image",
      img: "/images/squares-app.png",
      placeholder: "/images/squares-app.png",
      aspectRatio: 0.75,
    },
  ],
  styles: {
    background: "#f5f6f7",
  },
}

const Project = props => {
  const {
    title,
    description,
    siteTitle,
    siteUrl,
    githubTitle,
    githubUrl,
    media,
  } = frontmatter
  const siteTitleButton =
    siteUrl !== null ? (
      <button className='button button-primary'>{siteTitle}</button>
    ) : null
  const githubTitleButton =
    githubUrl !== null ? (
      <button className='button button-success'>{githubTitle}</button>
    ) : null

  return (
    <Projects {...props} frontmatter={frontmatter}>
      <div className='project'>
        <section className='content-container'>
          <div
            className='row middle-xs'
            style={{ background: "#f5f6f7", padding: `1rem 1rem 2rem` }}
          >
            <section className='col-xs-8 portfolio-copy--main'>
              <h1 className='project-title'> {title} </h1>
              <div className='project-description'>
                <h3>Description</h3>
                <p>{description}</p>
              </div>
            </section>
            <section className='col-xs-4 portfolio-website-link'>
              <div className=' row middle-xs'>
                <a href={githubUrl} target='_blank'>
                  {githubTitleButton}
                </a>
                <a href={siteUrl} target='_blank'>
                  {siteTitleButton}
                </a>
              </div>
            </section>
          </div>
        </section>

        <section className='project-media'>
          <div className='project-cover-image'>
            <div className='col-xs-12 project-media-item'>
              <ImageLoader
                img={media[0].img}
                alt='alt tag for image'
                width='100%'
                aspectRatio={400 / 200}
              />
            </div>
          </div>
        </section>

        <section className='project-media'>
          <div className='row'>
            <div className='col-xs-6 project-media-item'>
              <ImageLoader
                img={media[1].img}
                alt='alt tag for image'
                width='100%'
                aspectRatio={400 / 200}
              />
            </div>
            <div className='col-xs-6 project-media-item'>
              <ImageLoader
                img={media[2].img}
                alt='alt tag for image'
                width='100%'
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
