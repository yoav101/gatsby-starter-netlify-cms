import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import FeedBack from "../components/FeedBack";

// eslint-disable-next-line
export const FeedbackPageTemplate = ({ title, image, intro }) => {
  const backgroundImage = getImage(image) || image;

  return (
    <div
      style={{
        background:
          "linear-gradient(180.16deg, rgba(0, 0, 0, 0.63) 0.23%, rgba(0, 0, 0, 0.45) 35.27%, rgba(0, 0, 0, 0) 99.96%), url(../img/feedback/feedBackBackground.png)",
        // minHeight: "57rem",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            height: "100vh",
            gap: "5rem",
          }}
        >
          <div
            style={{
              width: "50%",
              fontWeight: 700,
              color: "#FFFFFF",
              fontSize: "70px",
              paddingTop: "60px",
              paddingLeft: "44px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.6)",
              backdropFilter: "blur(20px)",
              backgroundSize: "cover",
              width: "50%",
              boxShadow: "5px rgba(137, 137, 137, 0.4)",
            }}
          >
            <FeedBack items={intro.blurbs} />
          </div>
        </div>
      </div>
    </div>
  );
};

FeedbackPageTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const FeedbackPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <FeedbackPageTemplate
        title={frontmatter.title}
        image={frontmatter.image}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

FeedbackPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default FeedbackPage;

export const feedbackPageQuery = graphql`
  query FeedbackPage {
    markdownRemark(frontmatter: { templateKey: { eq: "feedback-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 75, layout: FULL_WIDTH)
          }
        }
        intro {
          blurbs {
            picturePath
            name
            company
            companyLink
            description
          }
        }
      }
    }
  }
`;
