import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import "./Career.sass";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const CareerTemplate = ({ data }) => {
  const markdown = data.markdownRemark.frontmatter;
  const backGroundImage = getImage(markdown.image) || markdown.image;
  return (
    <div className="career_container">
      <div className="headingDesc_container">
        <div className="careersHeading">Careers</div>
        <div className="careersDescription">{markdown.title}</div>
      </div>
      <div className="image_container">
        <GatsbyImage
          image={backGroundImage}
          objectPosition={"center"}
          objectFit={"cover"}
          style={{
            minHeight: "670px",
          }}
          layout="fullWidth"
          alt=""
        />
      </div>
      <div>
        {markdown.positions?.map((item, i) => (
          <CareerCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

Career.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

const CareerCard = ({ item }) => {
  return (
    <div className="card_container">
      <div>{item.position}</div>
      <div className="requirements_container">
        <span>Requirements</span>
        <ArrowForwardRoundedIcon />
      </div>
    </div>
  );
};

export default function Career() {
  return (
    <StaticQuery
      query={graphql`
        query CareerPage {
          markdownRemark(frontmatter: { templateKey: { eq: "career-page" } }) {
            frontmatter {
              image {
                childImageSharp {
                  gatsbyImageData(quality: 75, layout: FULL_WIDTH)
                }
              }
              title
              positions {
                position
              }
            }
          }
        }
      `}
      render={(data) => <CareerTemplate data={data} />}
    />
  );
}
