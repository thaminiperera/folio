import React from "react";
import "../styles/globals.css";
import { Link } from "gatsby";

function Project({ name, description, url, updatedAt, readmeContent, topics }) {
  return (
    <Link
      to={url}
      className="project-container"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="project-details-duo">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="topics-cards">
          {topics.map((topic, index) => (
            <p key={index} className="topic">
              {topic}
            </p>
          ))}
        </div>
        <p>Last Update : {new Date(updatedAt).toLocaleDateString()}</p>
      </div>
    </Link>
  );
}

export default Project;
