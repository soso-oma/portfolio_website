import React from "react";
import profilePic from "../assets/profilepic.jpeg";

function About() {
  return (
    <div className="container about-page">
      {/* About Me Section */}
      <h1 className="page-title">About Me</h1>
      <div className="about-content">
        {/* Profile Picture */}
        <img
          src={profilePic}
          alt="Anyim Mmesomachukwu Ozioma"
          className="about-pic"
        />

        {/* Intro */}
        <div className="about-text">
          <p>
            Hi, I’m <strong>Mmesomachukwu Ozioma Anyim</strong>, a junior front-end web developer passionate about creating impactful digital solutions.
          </p>

          <p>
            My journey in web development started with a curiosity for how websites work, which evolved into a career where I build modern, scalable applications using the latest technologies. I enjoy solving problems and bringing ideas to life. My values include precision, creativity, strategic thinking, and delivering user-focused solutions.
          </p>

          <p>
            I approach each project with a focus on understanding the requirements, planning the solution, developing with clean and efficient code, and testing thoroughly before deployment. I believe in clear communication and continuous improvement. 
          </p>

          <p>
            In my free time, I enjoy listening to music, which refreshes and inspires me to build beautiful websites.
          </p>

          <p>
            I’m currently open to full-time, remote, and freelance opportunities where I can contribute to impactful projects and grow as a developer.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <h2 className="skills-title">Skills</h2>
      <ul className="skills-list">
        <li>
          <strong>Frontend:</strong> HTML, CSS, JavaScript, React, Tailwind
        </li>
        <li>
          <strong>Backend:</strong> Node.js, Express
        </li>
        <li>
          <strong>Databases:</strong> MongoDB, PostgreSQL
        </li>
        <li>
          <strong>Authentication:</strong> JWT, Google OAuth, bcrypt
        </li>
        <li> <strong>Other Tools:</strong> Git, GitHub, Cloudinary
        </li>
      </ul>

      {/* project button */}
      <div className="cta-container">
        <a href="/projects" className="cta-button">
          View My Projects
        </a>
      </div>
    </div>
  );
}

export default About;
