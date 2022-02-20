import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundSlider from 'gatsby-image-background-slider'

export default function Slider() {

  return (
    <BackgroundSlider 
      query={useStaticQuery(graphql`
      query {
        backgrounds: allFile (filter: {sourceInstanceName: {eq: "images"}}){
          nodes {
            relativePath
            childImageSharp {
              fluid (maxWidth: 4000, quality: 100){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `)}
        images={["bg1.jpeg", "bg2.jpeg"]}
        initDelay={2}
        transition={4} 
        duration={8} >
        </BackgroundSlider>
  );
}

// FullWidthImage.propTypes = {
//   img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   title: PropTypes.string,
//   height: PropTypes.number,
//   subheading: PropTypes.string,
// };
