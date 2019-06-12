import React from "react"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple` }}>
    <h1>Hello Gatsby!</h1>
    <Header headerText="About Gatsbys" /> 
    <Header headerText="It's pretty cool" /> 
    <p>What a world.</p>
  </div>
)