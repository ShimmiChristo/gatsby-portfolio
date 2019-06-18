import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout>

    <div style={{ color: `purple` }}>
    <Link to="/contact/">Contact</Link> 
    <h1>Hello Gatsby!</h1>

    <Header headerText="About Gatsbys" /> 
    <Header headerText="It's pretty cool" /> 
    <p>What a world.</p>
  </div>
  
  </Layout>
)