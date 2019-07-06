import React from "react"
import { Link, graphql } from "gatsby";
// import ImageLoader from "../../components/image-loader";
import Projects from "../../components/projects";
import Img from "gatsby-image";

import groupsOf from "../../utils/groups-of";

export const frontmatter = {
    title: "Portfolio",
    description: "Chris Shimmin's Portfolio."
};

const PortfolioIndex =  ({ data, ...rest }) => {
    const pageLinks = data.allJavascriptFrontmatter.edges.map(({ node: page }) => {
        const { styles, title, path } = page.frontmatter;
        const media = 
            page.frontmatter.media && 
            page.frontmatter.media.find(item => item.type === 'image');
        return (
            <div key={path} className="portfolio-item col-xs-12 col-sm-4">
                <Link to={path} className="portfolio-item-link">
                    <div className="portfolio-item-image" style={styles}>
                        <img src={media.img} />
                        {media && (
                            <Img
                                fixed={data.file.childImageSharp.fixed}
                                alt="Gatsby Docs are awesome"
                            />
                        )}
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
    file(
        relativePath: { eq: "images/color-picker-winner.png" }
    ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      
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