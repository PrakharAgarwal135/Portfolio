import React from "react";
import eduquest from "../../assets/eduquest.png";
import campquest from "../../assets/campquest1.png";
import gemini from "../../assets/gemini.png";
import ProjectCard from "./ProjectCard";

export default function Project() {
  // projects data
  const works = [
    {
      title: "EduQuest",
      gitLink: "https://github.com/PrakharAgarwal135/EduQuest",
      liveLink: "https://edu-quest-theta.vercel.app/",
      about:
        "EduQuest is a dynamic and user-friendly ED.TECH platform that transforms how students access educational resources and tools. It provides a seamless and interactive learning experience for STUDENTS, making education more accessible and engaging. Also it empowers INSTRUCTORS to showcase their expertise and connect with learners across the globe.",
      stack: [
        "react",
        "tailwindcss",
        "Swiper",
        "Razorpay",
        "Node.js",
        "Express.js",
        "Mongoose",
        "JWT",
        "MongoDB",
      ],
      img: eduquest,
    },
    {
      title: "CampQuest",
      gitLink: "https://github.com/PrakharAgarwal135/CampQuest",
      liveLink: "https://campquest-c1yx.onrender.com/",
      about:
        "CampQuest is an interactive platform that brings outdoor adventure enthusiasts together, offering a digital space to DISCOVER, CREATE, SHARE and REVIEW campgrounds. It provides a comprehensive catalog of camping spots, reviews, and user-generated content to help individuals plan their perfect getaway.",
      stack: [
        "HTML5",
        "Bootstrap",
        "Javascript",
        "EJS",
        "Maptiler",
        "Node.js",
        "Express.js",
        "Passport.js",
        "Sessions",
        "MongoDB",
      ],
      img: campquest,
    },
    {
      title: "Gemini Clone",
      gitLink: "https://github.com/PrakharAgarwal135/GeminiClone",
      liveLink: "https://gemini121.netlify.app/",
      about:
        "A chatbot that mimics the Google Gemini chatbot using the Gemini API. It provides real-time conversations and smart replies. Built with smooth and responsive user experience.",
      stack: ["Gemini API", "Axios", "JavaScript", "HTML5", "CSS3"],
      img: gemini,
    },
  ];

  return (
    <section className="flex flex-col gap-6 md:gap-10 pt-[110px]" id="projects">
      <div className="uppercase text-5xl md:text-4xl xl:text-5xl font-bold text-[#b1b9c1]">
        Projects
      </div>

      {works.map((work, index) => (
        <ProjectCard
          key={index}
          img={work.img}
          title={work.title}
          gita={work.gitLink}
          livea={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}
    </section>
  );
}
