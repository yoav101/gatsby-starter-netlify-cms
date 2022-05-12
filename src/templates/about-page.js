import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div
      style={{
        background: "url(../img/aboutUsBackground.svg)",
        minHeight: "860px",
        backgroundRepeat: "no-repeat",
        position: "relative",
        backgroundSize: "cover",
        backgroundColor:
          "linear-gradient(197.76deg, #FFFFFF 12.29%, #FAFAFA 43.21%)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <div
          style={{
            minHeight: "700px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <h2
            style={{
              fontWeight: "700",
              fontSize: "70px",
              marginLeft: "3rem",
            }}
          >
            {title}
          </h2>
          <div
            style={{
              background: "rgba(240,230,242, 0.4)",
              borderRadius: "1.25em",
              backdropFilter: "blur(30px)",
              border: "3px",
              maxWidth: "900px",
              padding: "3.3rem 4.5rem",
            }}
          >
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
