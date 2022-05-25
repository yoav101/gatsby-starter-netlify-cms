// import React from "react";
// import PropTypes from "prop-types";
// import { graphql } from "gatsby";
// import Layout from "../components/Layout";
// import Career from "../components/Career";
// import "../components/Career.sass";

// // eslint-disable-next-line
// export const CareerPageTemplate = () => {
//   return (
//     <div>
//       <div className="CareerContainer">
//         <div className="clientCareerContainer">
//           <Career />
//         </div>
//       </div>
//     </div>
//   );
// };

// // CareerPageTemplate.propTypes = {
// //   title: PropTypes.string,
// //   intro: PropTypes.shape({
// //     blurbs: PropTypes.array,
// //   }),
// // };

// const CareerPage = ({ data }) => {
//   const { frontmatter } = data.markdownRemark;
//   debugger;
//   return (
//     <Layout>
//       <CareerPageTemplate />
//     </Layout>
//   );
// };

// CareerPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// };

// export default CareerPage;

// // export const CareerPageQuery = graphql`
// //   query CareerPage {
// //     markdownRemark(frontmatter: { templateKey: { eq: "career-page" } }) {
// //       frontmatter {
// //         image {
// //           childImageSharp {
// //             gatsbyImageData(quality: 75, layout: FULL_WIDTH)
// //           }
// //         }
// //         title
// //         positions {
// //           position
// //         }
// //       }
// //     }
// //   }
// // `;
