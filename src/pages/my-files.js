import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>Hello world</div>
      <h1>My Site's Data</h1>
      <table>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>relativePath</th>
                  <th>prettySize</th>
                  <th>extension</th>
                  <th>birthTime</th>
              </tr>
          </thead>
          <tbody>
              {data.allFile.edges.map( ({node}, index) => (
                  <tr class={index} key={index}>
                      <td>{node.name}</td>
                      <td>{node.relativePath}</td>
                      <td>{node.prettySize}</td>
                      <td>{node.extension}</td>
                      <td>{node.birthTime}</td>
                  </tr>
              ))}
          </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          name
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`