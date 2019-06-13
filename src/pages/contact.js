import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple` }}>
    <Link to="/">Home</Link> 
    <h1>Hello Gatsby!</h1>

    <Header headerText="Contact Page" /> 
    <p>Contact Us!</p>
  </div>
)