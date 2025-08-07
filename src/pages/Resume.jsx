import React from "react";

export default function Resume() {
  const resumePath = "/resume.pdf";

  return (
    <section className="container resume-section">
      <h1 className="section-title">My Resume</h1>
      <p>Download or view my resume below.</p>

      <div className="resume-buttons">
        <a href={resumePath} download className="btn">
          Download Resume
        </a>
        <a href={resumePath} target="_blank" rel="noopener noreferrer" className="btn">
          View in New Tab
        </a>
      </div>

      <div className="resume-preview">
        <embed src={resumePath} type="application/pdf" width="100%" height="800px" />
      </div>
    </section>
  );
}
