import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import ClientsGrid from "../components/Clients";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";
import FeedBack from "../components/FeedBack";
import Contact from "../pages/contact";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  mainpitch,
  intro,
}) => {
  const heroImage = getImage(image) || image;
  const splitTitle = mainpitch.title.split(" ");
  return (
    <>
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-12">
                <div className="content" style={{ gap: "2rem" }}>
                  <div className="content">
                    <div className="tile" style={{ gap: "1em" }}>
                      <span
                        className="title"
                        style={{ fontSize: "80px", color: "#3F3C55" }}
                      >
                        {splitTitle[0]}
                      </span>
                      <span
                        className="title"
                        style={{ fontSize: "80px", color: "#d1de35" }}
                      >
                        {splitTitle[1]}
                      </span>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  {/* <FeedBack items={intro.blurbs} /> */}
                  <div className="column is-12" style={{ padding: "0" }}>
                    <h3 className="has-text-weight-semibold is-size-2">
                      Our Clients
                    </h3>
                    <div style={{ margin: "3rem 0" }}>
                      <ClientsGrid gridItems={intro.blurbs} space="2rem" />
                    </div>
                  </div>
                  <div className="column is-12" style={{ padding: "0" }}>
                    <h3 className="has-text-weight-semibold is-size-2">Blog</h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="seeMore" to="/blog">
                        See more blogs
                      </Link>
                    </div>
                  </div>
                  <div className="column is-12" style={{ padding: "0" }}>
                    <Contact noLayout />
                    <div className="column is-12 has-text-centered">
                      <Link className="seeMore" to="/contact">
                        Go to contact page
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        intro={frontmatter.intro}
      />
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
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 75, layout: FULL_WIDTH)
          }
        }
        subheading
        mainpitch {
          title
          description
        }
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
