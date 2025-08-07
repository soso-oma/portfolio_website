import React from "react";

export default function ProjectCard({ title, description, image, tech, liveLink, githubLink }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="tech-stack">
        {tech.map((t, i) => (
          <span key={i} className="tech-badge">{t}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
}
