import React from "react";
import "./index.sass";
import ClientsGrid from "../../components/Clients";
import PropTypes from "prop-types";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";

const Index = ({ intro }) => {
  return (
    <div className="content">
      <div className="client_header">Our clients</div>
      <div style={{ padding: "1rem", justifyContent: "center", display: "flex" }}>
        <ClientsGrid gridItems={intro.blurbs} space="2rem" />
      </div>
    </div>
  );
};

Index.propTypes = {
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <Index intro={frontmatter.intro} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query Index {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(quality: 75, layout: CONSTRAINED)
              }
            }
            text
          }
        }
      }
    }
  }
`;
