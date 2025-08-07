import React from "react";
import projects from "../data/projectData";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="container projects-section">
      <h1 className="section-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
