import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const BackGraphic = () => (
  <StaticQuery
    query={graphql`
      query {
        BackGraphic: file(relativePath: { eq: "back-graphic.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.BackGraphic.childImageSharp.fluid} />}
  />
)

export default BackGraphic
