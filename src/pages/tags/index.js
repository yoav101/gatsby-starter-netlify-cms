import * as React from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import backgroundImg from "../../img/arrowsBackground.svg";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section
      className="section"
      style={{
        background: `url(${backgroundImg})`,
        backgroundSize: "cover",
        minHeight: "660px",
      }}
    >
      <Helmet title={`Tags | ${title}`} />
      <div className="container content">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: "6rem" }}
          >
            <h1
              className="title is-size-2 is-bold-light"
              style={{ marginBottom: "3rem" }}
            >
              All tags
            </h1>
            <ul className="taglist">
              {group.map((tag) => (
                <li key={tag.fieldValue}>
                  <Link
                    to={`/tags/${kebabCase(tag.fieldValue)}/`}
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#D1DE35",
                      borderRadius: "20px",
                      padding: "10px 20px",
                      color: "#5b5b5b",
                      filter: "drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25))",
                    }}
                  >
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
