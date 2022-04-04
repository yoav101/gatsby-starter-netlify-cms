import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import User from "../../static//img/user.png";
import "./BlogRoll.css";

class BlogRollTemplate extends React.Component {
  constructor(props) {
    super(props);
    const isBrowser = () => typeof window !== "undefined"
    this.state = {
      isShowAllElements: /[^/]*$/.exec(`${isBrowser() && window.location.href}`)[0] === "blog",
    };
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const displayBlogs = posts
      .slice(0, this.state.isShowAllElements ? posts.length : 3)
      .map(({ node: post }, index) => {
        const imgSrc =
          post.frontmatter.featuredimage?.childImageSharp?.gatsbyImageData
            ?.images?.fallback?.src;
        return (
          <Link to={post.fields.slug} key={index}>
            <Card image={imgSrc}>
              <BackDropShadow>
                <AuthorWrapper>
                  <Author>
                    <MyIcon User={User} />
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
  }
}

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
    font-family: "Work Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 0.04em;
    color: white;
  }

  h5 {
    font-family: "Work Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: white;
    margin-top: -10px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 160px;
  margin-top: 240px;
  border-radius: 15px;
  background: rgba(42, 39, 57, 0);
  backdrop-filter: blur(0);
  justify-content: center;
  align-items: center;
  transition: 2s cubic-bezier(0.55, 0.06, 0.68, 0.19);
  transform: translateY(-255px);
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
  background-color: #d1de35;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  top: 31px;
  right: 16px;
  font-family: "Work Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
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
  width: 100%;
  height: 100%;
  background-color: rgba(10, 10, 10, 0.8);
  border-radius: 15px;
  transition: 1.5s linear;
`;

const MyIcon = styled.img.attrs((props) => ({ src: props.User }))`
  margin-right: 5px;
  margin-top: -2px;
`;

const Card = styled.div`
  background: ${(props) => `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: contain;
  box-shadow: 0 0 30px 5px rgb(0 0 0 / 10%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  margin-top: 5px;
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
    transform: translateY(0);
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
    color: #d1de35;
    transition: 3s ease-in-out;
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
                        quality: 100
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
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  );
}
