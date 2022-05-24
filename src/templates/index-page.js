import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import ClientsGrid from "../components/Clients";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";
import Services from "../components/Services";
import Contact from "../pages/contact";
import "../components/Services.sass";
import { FeedbackPageTemplate } from "./feedback-page";
import { isMobile } from "react-device-detect";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  imageLogo,
  subheading,
  mainpitch,
  intro,
  feedback,
}) => {
  const backGroundImage = getImage(image) || image;
  return (
    <>
      <FullWidthImage
        img={backGroundImage}
        imageLogo={imageLogo.publicURL}
        subheading={subheading}
      />
      <div className="content" style={{ gap: "2rem" }}>
        <div>
          <Services data={mainpitch.services} />
        </div>
        <div className="has-text-centered" style={{ padding: "0" }}>
          <div className="ourClientsText">Our Clients</div>
          <div
            style={{
              margin: "0 0 3rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ClientsGrid gridItems={intro.blurbs} space="0rem" />
          </div>
        </div>
        <div style={{ padding: "0" }}>
          <FeedbackPageTemplate
            title={feedback.title}
            intro={feedback.intro}
            image={feedback.image}
          />
        </div>
        <div className="section">
          <div style={{ padding: "3rem" }}>
            <h3
              className="has-text-centered has-text-weight-bold is-size-1"
              style={{ color: "#3F3C55" }}
            >
              Blog
            </h3>
            <BlogRoll />
            <div className="has-text-centered" style={{ marginTop: isMobile ? "25px" : "65px" }}>
              <Link className="seeMore" to="/blog">
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="" style={{ padding: "0" }}>
          <Contact noLayout />
          {/* <div className="column is-12 has-text-centered">
                <Link className="seeMore" to="/contact">
                  Go to contact page
                </Link>
              </div> */}
        </div>
      </div>
    </>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  imageLogo: PropTypes.object,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  feedback: PropTypes.object,
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
        imageLogo={frontmatter.imageLogo}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        intro={frontmatter.intro}
        feedback={frontmatter.feedback}
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
        imageLogo {
          publicURL
        }
        image {
          childImageSharp {
            gatsbyImageData(quality: 75, layout: FULL_WIDTH)
          }
        }
        subheading
        mainpitch {
          title
          description
          services {
            title
            cases {
              title
              desc
              icon {
                publicURL
              }
            }
          }
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
        feedback {
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
  }
`;
