import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "microscope.jpg" }) {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop
      return (
        <BackgroundImage
          className={className}
          image={getImage(imageData)}
          bgColorClass={`#040e18`}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

const MicroscopeSection = styled(BackgroundSection)`
  width: 100%;
  height: 32rem;
  background-position: top center;
  background-repeat: repeat-y;
  background-size: cover;
  overflow: hidden;
`

export default MicroscopeSection
