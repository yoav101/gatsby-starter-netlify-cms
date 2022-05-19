import * as React from "react";
import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

const BlogIndexPage = () => {
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
            Blog
          </h1>
          <section className="section" style={{ padding: "0rem 1rem" }}>
            <div className="container">
              <div className="content">
                <BlogRoll />
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default BlogIndexPage;
