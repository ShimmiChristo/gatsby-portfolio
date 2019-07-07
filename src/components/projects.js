import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
// import Header from "../components/header"


import "../styles/projects.scss";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            footer
          }
        }
      }
    `
  )
  return (
      <div style={{ margin: `3rem auto`, maxWidth: 1200 }}>
          <header style={{ marginBottom: `1.5rem`, padding: `0 1rem` }}>
          <Link to="/portfolio/" style={{ textShadow: `none`, backgroundImage: `none` }}>
              <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title} </h3>
          </Link>
          <ul style={{ listStyle: `none`, float: `right` }}>
              <ListLink to="/portfolio/">Home</ListLink>
              <ListLink to="/about/">About</ListLink>
              <ListLink to="/contact/">Contact</ListLink>
              <ListLink to="/blog/">Blog</ListLink>
              <ListLink to="/portfolio/">Portfolio</ListLink>
          </ul>

          </header>
          <div className="portfolio">{children}</div>
          <footer style={{ margin: `1.5rem 2rem 1.5rem`, borderTop: '1px solid #eee' }}>
            <p style={{ display: 'block' }}> {data.site.siteMetadata.footer} </p>
          </footer>
      </div>
  )
}