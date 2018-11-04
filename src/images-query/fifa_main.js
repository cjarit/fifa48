import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const FifaMain = () => (
  <StaticQuery
    query={graphql`
      query {
        FifaMain: file(relativePath: { eq: "fifa_main.png" }) {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.FifaMain.childImageSharp.fluid} />}
  />
)

export default FifaMain
