import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PersonIcon from "@mui/icons-material/Person";

// eslint-disable-next-line
export const BlogPostTemplate = ({
  content,
  contentComponent,
  tags,
  author,
  date,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;
  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <div
              style={{
                fontWeight: 700,
                fontSize: "1em",
                letterSpacing: "-0.02em",
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              <PersonIcon />
              {author}
            </div>
            <div
              style={{
                letterSpacing: "0.04em",
                fontWeight: 400,
                fontSize: "0.875rem",
                marginBottom: "20px",
              }}
            >
              {date}
            </div>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4 style={{ fontSize: `2rem` }}>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`} style={{}}>
                      <Link
                        to={`/tags/${kebabCase(tag)}/`}
                        style={{
                          fontWeight: "bold",
                          backgroundColor: "#D1DE35",
                          borderRadius: "20px",
                          padding: "10px 20px",
                          color: "#5b5b5b",
                          filter:
                            "drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25))",
                        }}
                      >
                        {tag}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  author: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
          </Helmet>
        }
        author={post.frontmatter.author}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author
        tags
      }
    }
  }
`;
