import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const FrontGraphic = () => (
  <StaticQuery
    query={graphql`
      query {
        FrontGraphic: file(relativePath: { eq: "front-graphic.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.FrontGraphic.childImageSharp.fluid} />}
  />
)

export default FrontGraphic
