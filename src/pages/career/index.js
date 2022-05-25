import * as React from "react";
import Layout from "../../components/Layout";
import Career from "../../components/Career";

const CareerIndexPage = () => {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "3rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "baseline",
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              padding: "1rem",
            }}
          >
            Career
          </h1>
          <section className="section" style={{ padding: "0rem 1rem" }}>
            <div className="container">
              <div className="content">
                <Career />
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default CareerIndexPage;
