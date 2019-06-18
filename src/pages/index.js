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
  <div>
      <img
        src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
        alt="Group of pandas eating bamboo"
      />
    </div>
  
  </Layout>
)