import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import ReactPaginate from 'react-paginate'
import "./BlogRoll.css"

class BlogRollTemplate extends React.Component {
  
  constructor() {
    super();
    this.state = {
      pageNumber: 0
    }
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const blogs = posts.slice(0, posts.length); 
    const blogsPerPage = 4;
    const pageVisited = this.state.pageNumber * blogsPerPage;

    const displayBlogs = blogs.slice(pageVisited, pageVisited + blogsPerPage)
    .map(({ node: post }) => {
      return (
          <div className="is-parent column is-6" key={post.id}>
          <article
            className={`blog-list-item tile is-child box notification ${
              post.frontmatter.featuredpost ? 'is-featured' : ''
            }`}
          >
            <header>
              {post.frontmatter.featuredimage ? (
                <div className="featured-thumbnail">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      width:
                        post.frontmatter.featuredimage.childImageSharp
                          .gatsbyImageData.width,
                      height:
                        post.frontmatter.featuredimage.childImageSharp
                          .gatsbyImageData.height,
                    }}
                  />
                </div>
              ) : null}
              <p className="post-meta">
                <Link
                  className="title has-text-primary is-size-4"
                  to={post.fields.slug}
                >
                  {post.frontmatter.title}
                </Link>
                <span> &bull; </span>
                <span className="subtitle is-size-5 is-block">
                  {post.frontmatter.date}
                </span>
              </p>
            </header>
            <p>
              {post.excerpt}
              <br />
              <br />
              <Link className="button" to={post.fields.slug}>
                Keep Reading →
              </Link>
            </p>
          </article>
        </div>
      )
    })

    const pageCount = Math.ceil(blogs.length / blogsPerPage)
    
    const changePage = ({selected}) => {
      this.setState({
       pageNumber: selected
      })
    }


    return (
      <div className="columns is-multiline box notification">
        {displayBlogs}
        <ReactPaginate 
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBTNS"}
        previousLinkClassName = {"PreviousBTN"}
        nextLinkClassName= {"NextBTN"}
        disabledClassName = {"disabled"}
        activeClassName = {"paginationActive"}
        subContainerClassName={'pages pagination'}
        />
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


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
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 120
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
