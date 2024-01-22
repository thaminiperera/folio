import React from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";

function about() {
  return (
    <Layout>
      <div className="container">
        <h1>About Me</h1>
        <div className="about-container">
          <p>Hi! My name is Thamini Perera. </p>
          <p>
            I am a fourth year CS undergraduate at University of Sri
            Jayawardenepura. My main interests lie in the fields of web
            development and artificial intelligence.
          </p>
          <p>
            When I am not in programmer-mode, I am nose-deep in a book or
            bopping to pop music.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default about;
