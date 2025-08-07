import React from 'react';
import profilePic from '../assets/profile.jpg';

function Home() {
  return (
    <div className="container">
      <img
        src={profilePic}
        alt="Anyim Mmesomachukwu Ozioma"
        className="profile-pic"
      />
      <h1 className="name">Anyim Mmesomachukwu Ozioma</h1>
      <h2 className="title">Front-End Web Developer</h2>
      <p className="description">
        Crafting seamless, high‑performance web applications where functionality
        meets exceptional design. Specializing in building dynamic, responsive,
        and user‑focused solutions with clean code and outstanding user
        experiences.
      </p>
      <a href="/projects" className="cta-button">
        View My Work
      </a>
    </div>
  );
}

export default Home;
