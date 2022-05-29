import React from "react";
import PropTypes from "prop-types";
import { graphql, Link, StaticQuery } from "gatsby";
import "./Career.sass";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import career_design from "../img/career_design.svg";
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
      <img
        src={career_design}
        alt=""
        style={{
          position: "absolute",
          zIndex: 2,
        }}
      />
      <div
        className="image_container"
        style={{
          position: "relative",
        }}
      >
        <div>
        <GatsbyImage
          image={backGroundImage}
          objectPosition={"center"}
          objectFit={"cover"}
          style={{
            minHeight: "448px",
            maxHeight: "730px",
          }}
          layout="fullWidth"
          alt=""
        />
        </div>
        <div className="cards_container">
          {markdown.positions?.map((item, i) => (
            <CareerCard key={i} item={item.position} />
          ))}
        </div>
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

export const CareerCard = ({ item }) => {
  return (
    <Link to="/career" state={item} style={{ color: "#3F3C55" }}>
      <div className="card_container">
        <div>{item.title}</div>
        <div className="requirements_container">
          <span>Apply</span>
          <ArrowForwardRoundedIcon />
        </div>
      </div>
    </Link>
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
                position {
                  title
                  requirements {
                    must
                  }
                  advantages {
                    advantage
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => <CareerTemplate data={data} />}
    />
  );
}
