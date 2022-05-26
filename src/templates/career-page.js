import React from "react";
import "../components/Career.sass";
import Layout from "../components/Layout";

// eslint-disable-next-line
const CareerPageTemplate = ({ location }) => {
  const position = location.state;
  return (
    <Layout>
      <div>
        <div>{position.title}</div>
        {position.requirements.map((el, index) => {
          return <div key={index}>{el.must}</div>;
        })}
        {position.advantages.map((el, index) => {
          return <div key={index}>{el.advantage}</div>;
        })}
      </div>
    </Layout>
  );
};
export default CareerPageTemplate;
