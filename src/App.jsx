import { useState, useEffect, useRef } from "react";
import {
  FaDownload, FaGithub, FaLinkedin, FaReact, FaNodeJs, FaJava,
  FaAndroid, FaGitAlt, FaLinux, FaDatabase, FaEnvelope, FaPhone
} from "react-icons/fa";
import {
  SiTailwindcss, SiJavascript, SiHtml5, SiCss3,
  SiMongodb, SiMysql, SiPostgresql, SiPhp, SiCodeigniter
} from "react-icons/si";
import Navbar from "./navbar";

import resume from './assets/resume.pdf';
import { FaWebAwesome } from "react-icons/fa6";

/* ===================
   Theme Constants
   =================== */
const PRIMARY_GRADIENT = "from-[#ff00d4] to-[#00ddff]";
const PRIMARY_TEXT_GRADIENT = `text-transparent bg-clip-text bg-gradient-to-r ${PRIMARY_GRADIENT}`;
const PRIMARY_BG_GRADIENT = `bg-gradient-to-r ${PRIMARY_GRADIENT}`;

/* ===================
   Portfolio Data
   =================== */
const portfolioData = {
  name: "Mohammed Iqram Inamdar",
  titles: ["Full Stack Developer", "React.js Developer", "Node.js Developer", "Java Developer"],
  objective:
    "Passionate about building scalable, user-friendly applications. Skilled in full-stack development and always eager to explore new technologies. Currently working full-time at Indea Design Systems Pvt. Ltd.",
  resume: resume,
  github: "https://github.com/Mohammed-Sameer-Inamdar",
  linkedin: "http://www.linkedin.com/in/mohammed-iqram-inamdar-312193199",
  portfolio: "https://mohammed-iqram-inamdar.github.io/portfolio/",
  contact: {
    email: "mohammediqraminamdar@gmail.com",
    phone: "+91 88840 28716"
  },
  skills: [
    {
      title: "Frontend",
      items: [
        { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
        { icon: <SiHtml5 className="text-orange-500" />, name: "HTML" },
        { icon: <SiCss3 className="text-blue-500" />, name: "CSS" },
        { icon: <FaReact className="text-cyan-400" />, name: "React" },
        { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" }
      ]
    },
    {
      title: "Backend",
      items: [
        { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
        { icon: <FaJava className="text-red-500" />, name: "Java" },
        { icon: <SiPhp className="text-indigo-400" />, name: "PHP" },
        { icon: <SiCodeigniter className="text-red-400" />, name: "CodeIgniter" }
      ]
    },
    {
      title: "Mobile",
      items: [
        { icon: <FaAndroid className="text-green-400" />, name: "Android Studio" },
        { icon: <FaReact className="text-cyan-400" />, name: "React Native" }
      ]
    },
    {
      title: "Databases",
      items: [
        { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
        { icon: <SiMysql className="text-blue-500" />, name: "MySQL" },
        { icon: <SiPostgresql className="text-indigo-500" />, name: "PostgreSQL" },
        { icon: <FaDatabase className="text-gray-300" />, name: "MS SQL" }
      ]
    },
    {
      title: "Tools",
      items: [
        { icon: <FaGitAlt className="text-orange-500" />, name: "Git" },
        { icon: <FaLinux className="text-yellow-500" />, name: "Linux" }
      ]
    }
  ],
  projects: [
    {
      title: "Repfabric CRM Integration",
      description: "I contributed to the development of the Repfabric project, a comprehensive customer relationship management (CRM) system built using JavaServer Faces (JSF). The primary objective of this project was to streamline sales processes, enhance customer interaction, and improve overall sales management efficiency.",
      github: null,
      demo: null,
      featured: true
    },
    {
      title: "Hospitality Management System",
      description: "A comprehensive hospitality management system built using React, Node.js, Express.js, and MongoDB. Features user authentication, reservation management.",
      github: "https://github.com/Mohammed-Sameer-Inamdar/hospitality",
      demo: null
    },
    {
      title: "Dynamic Form Builder",
      description: "React-based drag-and-drop form creation tool allowing custom field types, sections, and real-time preview. Integrated with APIs for saving and retrieving form layouts.",
      github: "https://github.com/Mohammed-Sameer-Inamdar/dynamicForms",
      demo: null
    },
    {
      title: "Social Media",
      description: "A social media platform built using React, Node.js, Express.js, and MongoDB. Features user authentication, profile creation, and real-time chat functionality.",
      github: "https://github.com/Mohammed-Sameer-Inamdar/social-medai",
      demo: null
    },
    {
      title: "Task Management App",
      description: "React + RTK Query powered app for managing tasks with filters, sorting, authentication, and optimized performance using memoization techniques.",
      github: "https://github.com/Mohammed-iqr-Inamdar/taskManager",
      demo: null
    },
    {
      title: "Portfolio Website",
      description: "Modern personal portfolio with responsive design, animations, and interactive UI built using React, Tailwind CSS, and Vite.",
      github: "https://github.com/MohammedIqram/portfolio",
      demo: "https://MohammedIqram.github.io/portfolio/"
    },
    {
      title: "Know Your Rights",
      description: "CodeIgniter powered app for understanding and complying with legal documents, ensuring compliance with laws and regulations. Providing references to the relevant laws and regulations.",
      github: "https://github.com/Mohammed-Sameer-Inamdar/know_your_rights",
      demo: null
    }
  ],
  journey: [
    // EXPERIENCE
    {
      type: "experience",
      title: "Software Developer",
      company: "Indea Design Systems Pvt. Ltd",
      period: "Jan 2022 – June 2025",
      description:
        "Collaborated on CRM and hospitality projects using JSF, React js, Node.js, and Java. Focused on performance optimization, API integration, and scalable solutions."
    },
    {
      type: "experience",
      title: "Junior Software Developer (Trainee)",
      company: "Rooman Technologies",
      period: "Oct 2020 – Mar 2020",
      description:
        "Completed comprehensive Java training focusing on OOP, Data Structures, and software development best practices."
    },

    // EDUCATION
    {
      type: "Education",
      title: "B.E. (ECE)",
      company: "B.L.D.E.A.’s V.P. Dr. P.G. Halakatti College of Engineering and Technology, VTU University",
      period: "2015 – 2019",
      description: "Graduated with 6.7 CGPA"
    },
    {
      type: "Education",
      title: "PUC (Science)",
      company: "Secab P.U. College for Boys Vijayapur",
      period: "2013 – 2015",
      description: "Scored 78% (Distinction)"
    },
    {
      type: "Education",
      title: "SSLC (10th)",
      company: "Iqra Urdu High School Vijayapur",
      period: "2012 – 2013",
      description: "Scored 79.84%"
    }
  ]
};

/* ===================
   Scroll Animation Hook
   =================== */
function useScrollAnimation() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

/* Typing Animation Hook */
function useTypingEffect(words, typingSpeed = 100, pause = 1500) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (index === words.length) setIndex(0);

    if (subIndex === words[index]?.length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(words[index]?.substring(0, subIndex));
    }, deleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, typingSpeed, pause]);

  return text;
}

/* ===================
   Main Component
   =================== */
export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const typedText = useTypingEffect(portfolioData.titles);

  useEffect(() => {
    const sections = document.querySelectorAll("section, header");
    const handleScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // a little more offset
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      // Fix for Contact
      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 10) {
        current = "contact";
      }

      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white scroll-smooth">

      {/* Navbar */}
      <Navbar activeSection={activeSection} PRIMARY_TEXT_GRADIENT={PRIMARY_TEXT_GRADIENT} />

      {/* Hero */}
      <FadeSection id="home">
        <h1 className={`text-4xl md:text-6xl font-extrabold ${PRIMARY_TEXT_GRADIENT} text-center drop-shadow-lg`}>
          {portfolioData.name}
        </h1>
        <p className="mt-3 text-lg md:text-xl text-[#00ddff] font-semibold text-center min-h-[32px]">
          {typedText}
          <span className="border-r-2 border-[#00ddff] animate-pulse ml-1 inline-block h-6 align-middle"></span>
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-center text-gray-400 leading-relaxed">
          {portfolioData.objective}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={portfolioData.resume}
            download
            className={`inline-flex items-center px-6 py-3 rounded-full ${PRIMARY_BG_GRADIENT} text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300`}
          >
            <FaDownload className="mr-2" /> Download Resume
          </a>
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg hover:scale-110"
          >
            <FaGithub size={22} />
          </a>
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg hover:scale-110"
          >
            <FaLinkedin size={22} />
          </a>
          {/* <a
            href={portfolioData.portfolio}
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg hover:scale-110"
          >
            <FaWebAwesome size={22} />
          </a> */}
        </div>
      </FadeSection>

      {/* Skills */}
      <FadeSection id="skills">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.skills.map((group, idx) => (
            <SkillCard key={idx} title={group.title} skills={group.items} />
          ))}
        </div>
      </FadeSection>

      {/* Projects */}
      <FadeSection id="projects">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.projects.map((p, idx) => (
            <div
              key={idx}
              className={`bg-gray-800 p-6 rounded-xl shadow-lg transition transform hover:-translate-y-2 ${p.featured
                ? "border-2 border-[#00ddff] hover:shadow-[#00ddff]/40"
                : "hover:shadow-[#ff00d4]/40"
                }`}
            >
              <h3 className={`text-xl font-semibold mb-2 ${PRIMARY_TEXT_GRADIENT}`}>
                {p.title}
              </h3>
              <p className="text-gray-300 mb-4">{p.description}</p>

              <div className="flex gap-3">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`px-4 py-2 rounded-lg ${PRIMARY_BG_GRADIENT} text-white font-semibold hover:opacity-90 transition`}
                  >
                    GitHub
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-lg bg-gray-700 text-white font-semibold hover:bg-gray-600 transition"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </FadeSection>

      {/* Journey */}
      <FadeSection id="journey">
        <h2 className="text-3xl font-bold mb-6 text-center">My Journey</h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff00d4] to-[#00ddff]"></div>

          <div className="flex flex-col gap-12">
            {portfolioData.journey.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              const isEducation = item.type === "education";

              // Gradient colors
              const dotGrad = isEducation
                ? "from-[#ff9d00] to-[#fff700]"
                : "from-[#ff00d4] to-[#00ddff]";

              const lineGrad = isLeft
                ? `bg-gradient-to-l ${dotGrad}`
                : `bg-gradient-to-r ${dotGrad}`;

              const glowClass = isEducation
                ? "hover:shadow-[0_0_20px_#ff9d00]"
                : "hover:shadow-[0_0_20px_#ff00d4]";

              return (
                <div key={idx} className="relative w-full md:min-h-[6rem]">

                  {/* Horizontal connector (starts from dot center) */}
                  <div
                    className={`absolute top-1/2 -translate-y-[1px] hidden md:block h-[2px] w-10 ${lineGrad} ${isLeft ? "right-1/2" : "left-1/2"
                      }`}
                  ></div>
                  {/* Center Dot */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-gray-900 bg-gradient-to-r ${dotGrad}`}
                  ></div>

                  {/* Card */}
                  <div
                    className={`md:w-1/2 ${isLeft ? "md:pr-10 md:mr-auto" : "md:pl-10 md:ml-auto"} w-full`}
                  >
                    <div
                      className={`bg-gray-800 p-6 rounded-xl shadow-lg transition transform hover:-translate-y-1 ${glowClass}`}
                    >
                      <h3 className={`text-xl font-semibold ${isEducation ? "text-[#ff00d4]" : "text-[#00ddff]"}`}>{item.title}</h3>
                      <p className="text-white">
                        {item.company} | {item.period}
                      </p>
                      <p className="mt-2 text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </FadeSection>
      {/* Contact */}
      <FadeSection id="contact">
        <h2 className={`text-3xl font-bold mb-4 text-center ${PRIMARY_TEXT_GRADIENT}`}>
          Get in Touch
        </h2>
        <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-[#ff00d4]/40 transform hover:-translate-y-2 transition">
          <p className="text-gray-300 mb-6 text-center leading-relaxed">
            Open to connecting with professionals, recruiters, and industry peers.
            Let's discuss how I can contribute to your team.
          </p>
          <div className="space-y-4 break-words break-all">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="flex items-center gap-3 text-lg text-gray-300 hover:text-[#00ddff] transition"
            >
              <FaEnvelope className="text-[#00ddff]" /> {portfolioData.contact.email}
            </a>
            <a
              href={`tel:${portfolioData.contact.phone}`}
              className="flex items-center gap-3 text-lg text-gray-300 hover:text-[#00ddff] transition"
            >
              <FaPhone className="text-[#00ddff]" /> {portfolioData.contact.phone}
            </a>
          </div>
          <div className="mt-6 text-center">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className={`inline-block px-8 py-3 ${PRIMARY_BG_GRADIENT} rounded-full text-white font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl`}
            >
              Contact Me
            </a>
          </div>
        </div>
      </FadeSection>

      <footer className="py-4 text-center text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
      </footer>
    </div>
  );
}

/* FadeSection wrapper */
function FadeSection({ id, children }) {
  const [ref, visible] = useScrollAnimation();
  return (
    <section id={id} ref={ref} className={`px-6 md:px-20 py-12 transition-all duration-700 ease-out transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      {children}
    </section>
  );
}

/* Skill Card */
function SkillCard({ title, skills }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-[#ff00d4]/40 transform hover:-translate-y-2 transition">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((s, idx) => (
          <div key={idx} className="flex items-center gap-2">
            {s.icon} <span className="text-gray-300">{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
