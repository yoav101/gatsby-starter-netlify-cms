import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import "./BlogRoll.sass";
import { isMobile } from "react-device-detect";
import { getSrc } from "gatsby-plugin-image";
import PersonIcon from "@mui/icons-material/Person";

const BlogRollTemplate = ({ data }) => {
  const isBrowser = () => typeof window !== "undefined"
  let isHomePage = false
  if (isBrowser()) {
    const url = (window.location.href).split("/");
    isHomePage = url[url.length - 1] === "blog";
  }
  const { edges: posts } = data.allMarkdownRemark;
  const displayBlogs = posts
    .slice(0, isHomePage ? posts.length : (isMobile ? 2 : 6))
    .map(({ node: post }, index) => {
      const imgSrc = getSrc(post.frontmatter.featuredimage);
      return (
        <Link to={post.fields.slug} key={index}>
          <Card image={imgSrc}>
            <BackDropShadow>
              <AuthorWrapper>
                <Author>
                  <PersonIcon sx={{ color: "#5B5B5B" }}/>
                  <p>{post.frontmatter.author}</p>
                </Author>
              </AuthorWrapper>
              <InfoWrapper>
                <Info>
                  <p>{post.frontmatter.date}</p>
                  <h5>{post.frontmatter.title}</h5>
                </Info>
              </InfoWrapper>
            </BackDropShadow>
          </Card>
        </Link>
      );
    });
  return <GridContainer>{displayBlogs}</GridContainer>;
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 75%;
  width: 80%;
  background-color: transparent;
  transition: all 3s ease-in-out;
  p {
    font-size: 20px;
    letter-spacing: 0.04em;
    color: #d1de35;
  }

  h5 {
    font-weight: 700;
    font-size: 20px;
    letter-spacing: -0.02em;
    color: white;
    margin-top: -10px;
    @media (min-width: 1024px) {
      font-size: 24px;
    }
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 140px;
  border-radius: 15px;
  background: rgba(42, 39, 57, 0.6);
  backdrop-filter: blur(7px);
  justify-content: center;
  align-items: center;
  transition: 2s cubic-bezier(0.55, 0.06, 0.68, 0.19);
  @media (min-width: 1024px) {
    height: 160px;
    background: rgba(42, 39, 57, 0);
    backdrop-filter: blur(0);
  }
`;

const AuthorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;
const Author = styled.div`
  position: relative;
  background-color: #fff;
  gap: 0.3125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  top: 31px;
  right: 16px;
  font-weight: 700;
  font-size: 10px;
  letter-spacing: -0.02em;
  transition: 2s ease-in-out;
  box-shadow: 0 0 30px 0px rgb(255 255 255 / 25%);
  padding: 0.5rem;

  p {
    color: #5b5b5b;
    transition: 2s ease-in-out;
  }
`;

const BackDropShadow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15rem;
  width: 100%;
  height: 100%;
  @media (min-width: 1024px) {
    background: rgba(42, 39, 57, 0.7);
  }
  border-radius: 15px;
  transition: 1.5s linear;
`;

const Card = styled.div`
  background: ${(props) => `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 0 30px 5px rgb(0 0 0 / 10%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  max-width: 440px;
  margin-top: 5px;
  @media (min-width: 1024px) {
    background-size: 125%;
    cursor: pointer;
    transition: background-size 2s linear, box-shadow 3s linear,
      background-color 1.5s linear;

    &:hover {
      background-size: 108%;
      box-shadow: 0 0 30px 0px rgb(0 0 0 / 100%);
      filter: brightness(1.1);
      transition: all 5s linear;
    }
    &:hover > ${BackDropShadow} {
      background-color: transparent;
    }
    &:hover > ${BackDropShadow} > ${InfoWrapper} {
      background: rgba(42, 39, 57, 0.6);
      backdrop-filter: blur(7px);
      transition: 1.5s ease-in-out;
    }
    &:hover > ${BackDropShadow} > ${AuthorWrapper} > ${Author} > p {
      color: #5b5b5b;
      transition: 2s ease-in-out;
    }
    &:hover > ${BackDropShadow} > ${AuthorWrapper} > ${Author} {
      background-color: white;
      transition: 2s ease-in-out;
      box-shadow: 0 0 30px 0px rgb(0 0 0 / 100%);
    }
    &:hover > ${BackDropShadow} > ${InfoWrapper} > ${Info} > p {
      transition: 3s ease-in-out;
    }
  }
`;

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default function BlogRoll() {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  author
                  date(formatString: "DD.mm.yyyy")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 436
                        height: 440
                        quality: 75
                        layout: CONSTRAINED
                      )
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => <BlogRollTemplate data={data} />}
    />
  );
}
