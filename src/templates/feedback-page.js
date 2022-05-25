import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import backgroundImg from "../img/feedback/feedBackBackground.png";
import Layout from "../components/Layout";
import FeedBack from "../components/FeedBack";
import "../components/FeedBack.sass";

// eslint-disable-next-line
export const FeedbackPageTemplate = ({ title, intro }) => {
  return (
    <div
      style={{
        background: `linear-gradient(180.16deg, rgba(0, 0, 0, 0.63) 0.23%, rgba(0, 0, 0, 0.45) 35.27%, rgba(0, 0, 0, 0) 99.96%), url(${backgroundImg})`,
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
