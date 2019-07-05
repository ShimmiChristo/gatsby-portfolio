import React from "react"
import { Link, graphql } from "gatsby";
import Projects from "../../components/projects";
// import Layout from "../../components/layout";

import groupsOf from "../../utils/groups-of";

export const frontmatter = {
    title: "Portfolio",
    description: "Chris Shimmin's Portfolio."
};

// const Project = (props) => (
const PortfolioIndex =  ({ data, ...rest }) => {
    const pageLinks = data.allJavascriptFrontmatter.edges.map(({ node: page }) => {
        const { styles, title, path } = page.frontmatter;

        return (
            <div key={path} className="portfolio-item col-xs-12 col-sm-4">
                <Link to={path} className="portfolio-item-link">
                    <div className="portfolio-item-image" style={styles}>
                    </div>
                    <span className="portfolio-item-text">{title}</span>
                </Link>
            </div>
        );
    });
    
    const groups = groupsOf(pageLinks, 3).map((page, i) => (
        <div key={i} className="row">
          {page}
        </div>
    ));

    return (
        <Projects {...rest} frontmatter={frontmatter}>
             <div className='project'>
                <img src='' className="port-feature-img" />
                <h2 className="project-title">
                    'SOmething'
                </h2>
                <div className="portfolio-items">{groups}</div>
             </div>
        </Projects>
    )
};


export const portfolioQuery =  graphql`
query portfolioQuery {
    allJavascriptFrontmatter(
        filter: {frontmatter: {portfolio: {eq: true}}}, 
        sort: {fields: frontmatter___order, order: DESC}
    ) {
      edges {
        node {
          frontmatter {
            title
            color
            description
            error
            media {
              aspectRatio
              img
              placeholder
              type
            }
            order
            path
            portfolio
            styles {
              background
            }
          }
        }
      }
    }
  }
`;

export default PortfolioIndex;