import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getSrc } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import FeedBack from "../components/FeedBack";
import "../components/FeedBack.sass";

// eslint-disable-next-line
export const FeedbackPageTemplate = ({ title, image, intro }) => {
  const img = getSrc(image)?.split("/");
  let imgUrl;
  if (img) {
    imgUrl = img[img.length - 1];
  }
  return (
    <div
      style={{
        background: `linear-gradient(180.16deg, rgba(0, 0, 0, 0.63) 0.23%, rgba(0, 0, 0, 0.45) 35.27%, rgba(0, 0, 0, 0) 99.96%), url(../img/feedback/${imgUrl})`,
      }}
      className="backgroundImage"
    >
      <div className="feedbackContainer">
        <div className="title">{title}</div>
        <div className="clientFeedbackContainer">
          <FeedBack items={intro.blurbs} />
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
