import * as React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import backgroundImg from "../img/arrowsBackground.svg";
import BlogTag from "../components/BlogTag";

const TagRoute = (props) => {
  const posts = props.data.allMarkdownRemark.edges;
  const blogs = posts.map((post) => (
    <li key={post.node.fields.slug}>
      <Link to={post.node.fields.slug}>
        <BlogTag data={post.node.frontmatter} />
      </Link>
    </li>
  ));
  const tag = props.pageContext.tag;
  const title = props.data.site.siteMetadata.title;
  const totalCount = props.data.allMarkdownRemark.totalCount;
  const tagHeader = `${totalCount} blog${
    totalCount === 1 ? "" : "s"
  } tagged with “${tag}”`;
  return (
    <Layout>
      <section
        className="section"
        style={{
          background: `url(${backgroundImg})`,
          backgroundSize: "cover",
          minHeight: "660px",
        }}
      >
        <Helmet title={`${tag} | ${title}`} />
        <div className="container content">
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: "6rem" }}
            >
              <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
              <ul className="taglist">{blogs}</ul>
              <Link
                to="/tags/"
                style={{
                  backgroundColor: "#D1DE35",
                  borderRadius: "100px",
                  padding: "15px 20px",
                  filter: "drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25))",
                  maxWidth: "200px",
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "800",
                  color: "#5B5B5B",
                }}
              >
                Browse all tags
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            author
            date(formatString: "MMMM DD, YYYY")
            featuredimage {
              publicURL
            }
          }
        }
      }
    }
  }
`;
