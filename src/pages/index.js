import * as React from "react";
import { graphql } from "gatsby";

import Project from "../components/Project.js";
import "../styles/globals.css";
import Layout from "../components/Layout.js";

const Home = ({ data }) => {
  const repositories = data.github.viewer.repositories.nodes;

  return (
    <Layout>
      <div className="container">
        <h1>Projects</h1>
        <div className="project-cards">
          {repositories
            .filter((repo) => !repo.isPrivate && repo.name !== "thaminiperera")
            .map((repo) => (
              <Project
                key={repo.id}
                name={repo.name}
                description={repo.description}
                url={repo.url}
                updatedAt={repo.updatedAt}
                readmeContent={repo.object ? repo.object.text : null}
                topics={repo.repositoryTopics.nodes.map(
                  (topic) => topic.topic.name
                )}
              />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    github {
      viewer {
        repositories(
          orderBy: { field: UPDATED_AT, direction: DESC }
          first: 50
        ) {
          nodes {
            description
            id
            url
            updatedAt
            name
            isPrivate
            repositoryTopics(first: 10) {
              nodes {
                topic {
                  name
                }
              }
            }
            object(expression: "master:README.md") {
              ... on GitHub_Blob {
                text
              }
            }
          }
        }
      }
    }
  }
`;

export default Home;
