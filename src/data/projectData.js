// MyBlog images
import mybloghome from "../assets/projects/mybloghome.png";

// MyJournal images
import myjournalhome from "../assets/projects/MyJournalHomePage.png";

// Portfolio image
import portfolio from "../assets/projects/portfolio.png";

const projects = [
  {
    title: "MyBlog",
    description:
      "A feature-rich blogging platform that enables users to create, edit, and delete posts, upload images, like and comment on posts, follow other users, and receive activity notifications. Includes powerful search functionality for posts and users, Google OAuth integration for quick sign-in, and a fully responsive design optimized for all devices.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Google OAuth 2.0",
      "Axios",
      "Multer",
      "Cloudinary",
      "React Router",
      "Tailwind",
    ],
    image: mybloghome,
    liveLink: "https://myblog-qokl.onrender.com",
    githubLink: "https://github.com/soso-oma/MyBlog",
  
  },
  {
    title: "MyJournal",
    description:
      "A secure personal journaling web application that allows users to create, view, and manage private journal entries. Features session-based authentication, an intuitive dashboard, and a clean EJS-powered UI for a smooth writing experience.",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "Express-Session",
      "CSS3"
    ],
    image: myjournalhome,
    liveLink: "https://myjournal-app-kygs.onrender.com",
    githubLink: "https://github.com/soso-oma/myjournal_app"
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive personal portfolio website built to showcase my skills, projects, and resume. Features a clean design, dedicated project pages, and a downloadable resume in PDF format.",
    tech: ["React.js", "Vite", "JavaScript (ES6+)", "CSS3", "HTML5"],
    image: portfolio,
    liveLink: "https://myportfolio.com",
    githubLink: "https://github.com/username/myportfolio"
  }
];

export default projects;
