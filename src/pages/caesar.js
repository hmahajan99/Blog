import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import AnstronautImage from "../components/astronaut-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ImageContainer = styled.div`
  margin-bottom: 26.1px;
  width: 150px;
  height: 150px;
`

const SecondPage = () => (
  <Layout>
    <SEO title="Master of Rome" />
    <h1>I came, I saw, I conquered</h1>
    <p>Et tu, Brute?</p>
    <ImageContainer> 
      <AnstronautImage relativePath="gatsby-astronaut.png" /> 
    </ImageContainer>
    <p>"Hello from the other side!" - Caesar</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
