import React from "react";
import Layout from "../components/Layout/Layout";

const HomePage = () => {
  return (
    <div>
      <Layout>
        <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
          <div className="text-center">
            <h1 className="display-4">Welcome to</h1>
            <h2 className="display-2 font-weight-bold text-primary">Blackcoffer</h2>
            <p className="lead">Your Destination for Innovation</p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
