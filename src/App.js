"use client"

import { useState, useEffect } from "react"
import "./App.css"

// Icon components (thay thế lucide-react)
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m4 4 16 0 0 16-16 0z" />
    <path d="m4 4 8 8 8-8" />
  </svg>
)

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const CodeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16,18 22,12 16,6" />
    <polyline points="8,6 2,12 8,18" />
  </svg>
)

const DatabaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
)

const GlobeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const ServerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="4" rx="1" />
    <rect x="2" y="9" width="20" height="4" rx="1" />
    <rect x="2" y="15" width="20" height="4" rx="1" />
    <line x1="6" y1="5" x2="6.01" y2="5" />
    <line x1="6" y1="11" x2="6.01" y2="11" />
    <line x1="6" y1="17" x2="6.01" y2="17" />
  </svg>
)

const SmartphoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
)

const MonitorIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
)

const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6,9 12,15 18,9" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const DownloadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7,10 12,15 17,10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

function App() {
  const [typedText, setTypedText] = useState("")
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)
  const fullText = "Full-Stack Developer"

  const skills = [
    { name: "PHP/Laravel/BotbleCMS", level: 95, icon: <CodeIcon /> },
    { name: "Wordpress", level: 80, icon: <CodeIcon /> },
    { name: "JavaScript/TypeScript", level: 95, icon: <CodeIcon /> },
    { name: "React/Vue/Next.js", level: 70, icon: <GlobeIcon /> },
    { name: "Node.js/Nest.js", level: 95, icon: <ServerIcon /> },
    { name: "Database (SQL/NoSQL)", level: 85, icon: <DatabaseIcon /> },
    { name: "Golang", level: 90, icon: <CodeIcon /> },
    { name: "HTML/CSS", level: 95, icon: <CodeIcon /> },
    { name: "Linux Server", level: 85, icon: <GlobeIcon /> },
    { name: "Docker", level: 90, icon: <CodeIcon /> },
    { name: "Prometheus/Grafana", level: 90, icon: <GlobeIcon /> },
    { name: "AWS Service", level: 90, icon: <GlobeIcon /> },
    { name: "Redis", level: 80, icon: <GlobeIcon /> },
    { name: "Kafka", level: 80, icon: <GlobeIcon /> },
  ]

  const projects = [
    {
      title: "Fill Google Form",
      description: "This website automates survey form submissions with features like ratio-based increases, integration with Google Sheets, and data encryption for SPSS analysis.",
      tech: ["PHP", "Laravel", "Mysql", "Golang"],
      image: "https://via.placeholder.com/300x200/06b6d4/ffffff?text=E-Commerce",
      demo: "https://fillgoogleform.info/",
    },
    {
      title: "Proxy Selling Website",
      description: "This website is a proxy marketplace that interacts with VPS server APIs to create and sell proxies.",
      tech: ["Golang", "Next.js", "Nest.js", "Postgres"],
      image: "https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Task+Manager",
      demo: "https://next.minproxy.vn/",
    },
    {
      title: "Bot Crawl Data",
      description: "This bot crawls data from one website and automatically inserts it into another website's database.",
      tech: ["Node.js", "Puppeteer", "Mysql"],
      image: "https://via.placeholder.com/300x200/ec4899/ffffff?text=AI+ChatBot",
      demo: "",
    },
  ]

  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Freelancer",
      period: "2024 - Present",
      description: "I work on a diverse range of projects, primarily using Golang and JavaScript. I also work on Upwork: https://www.upwork.com/freelancers/~018e5fd7e4b512fe79?mp_source=share",
    },
    {
      title: "Middle FullStack Developer",
      company: "FPT Company",
      period: "2022 - 2024",
      description: "I manage and develop the company's CRM system, and I also focus on developing additional websites for students.",
    },
    {
      title: "Junior FullStack Developer",
      company: "VISUAL WEBER COMPANY LIMITED",
      period: "2021 - 2022",
      description: "My open-source contributions primarily focus on e-commerce websites. These projects typically use Botble CMS (developed with Laravel) for the back-end, and HTML, CSS, and Vue.js for the front-end.",
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typedText.length < fullText.length) {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }
    }, 150)
    return () => clearTimeout(timer)
  }, [typedText, fullText])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [skills.length])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo">{"CV Fullstack Developer"}</div>
            <div className="nav-menu">
              <button onClick={() => scrollToSection("about")} className="nav-link">
                Introduction
              </button>
              <button onClick={() => scrollToSection("skills")} className="nav-link">
                Skills
              </button>
              <button onClick={() => scrollToSection("experience")} className="nav-link">
                Experience
              </button>
              <button onClick={() => scrollToSection("projects")} className="nav-link">
                Projects
              </button>
              <button onClick={() => scrollToSection("contact")} className="nav-link">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <div className="hero-avatar">
            <div className="avatar-wrapper">
              <div className="avatar-inner">
                <MonitorIcon />
              </div>
            </div>
          </div>

          <h1 className="hero-title">NGUYEN QUOC VIET</h1>

          <div className="hero-subtitle">
            <span className="typed-text">
              {typedText}
              <span className="cursor">|</span>
            </span>
          </div>

          <p className="hero-description">
            Passionate about creating groundbreaking technology solutions, specializing in modern web and mobile application development.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection("projects")}>
              Projects
            </button>
            <a href="./CV.pdf" download="nguyen-quoc-viet-cv.pdf" className="btn btn-secondary">
              <DownloadIcon />
              Download CV
            </a>
          </div>

          <div className="scroll-indicator">
            <ChevronDownIcon />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">INTRODUCTION</h2>

          <div className="about-grid">
            <div className="about-content">
              <p className="about-text">
                I have over 3 years of experience in web programming, working on a diverse range of website types, including e-commerce platforms, CRM systems, landing pages, mini-games, Tool Crawl Data, and quiz tests. I'm passionate about technology and constantly learning the latest trends.
              </p>
              <p className="about-text">
                I have deep expertise in a range of programming languages and frameworks. For back-end development, I'm proficient in PHP (Laravel, BotbleCMS, WordPress), JavaScript (Node.js, NestJS, Next.js, React.js, Vue.js), and Go (Golang). On the front-end, I have a solid grasp of HTML and CSS fundamentals, along with UX/UI principles and SEO best practices for HTML tags. When it comes to databases, I've worked extensively with MySQL, PostgreSQL, and MongoDB.
              </p>
              <p className="about-text">
                Beyond development, I'm proficient in server management with Ubuntu and Linux. I can handle project maintenance and management using tools like Docker, Prometheus, and Grafana. I also have experience working with various other stacks, including AWS services and the ELK stack.
              </p>

              <div className="about-info">
                <div className="info-item">
                  <MapPinIcon />
                  <span>Ho Chi Minh, Vietnam</span>
                </div>
                <div className="info-item">
                  <MailIcon />
                  <span>nguyenquocviet231203@gmail.com</span>
                </div>
                <div className="info-item">
                  <PhoneIcon />
                  <span>+84793617910</span>
                </div>
                <div className="info-item">
                  <CodeIcon />
                  <span>3+ years of experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">SKILLS</h2>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={skill.name} className="skill-card">
                <div className="skill-header">
                  <div className="skill-info">
                    <div className="skill-icon-wrapper">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-progress">
                  <div
                    className="skill-progress-bar"
                    style={{
                      width: currentSkillIndex === index ? `${skill.level}%` : "0%",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
                <div className="timeline-content">
                  <div className="experience-card">
                    <h3 className="experience-title">{exp.title}</h3>
                    <div className="experience-company">
                      {exp.company} • {exp.period}
                    </div>
                    <p className="experience-description">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title">Outstanding Projects</h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                {/* <div className="project-image">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} />
                  <div className="project-overlay"></div>
                </div> */}

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.demo ? <a target="_blank" href={project.demo} className="project-link">
                      <ExternalLinkIcon />
                      URL Website
                    </a> : ""}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>

          <p className="contact-description">
            Ready for exciting projects! Get in touch to discuss collaboration opportunities.
          </p>

          <div className="contact-buttons">
            <a href="mailto:nguyenquocviet231203@gmail.com">
              <button className="btn btn-primary">
                <MailIcon />
                Email
              </button>
            </a>
            <a href="https://github.com/quocviet130403">
              <button className="btn btn-outline">
                <GithubIcon />
                GitHub
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">© 2025 NGUYEN QUOC VIET</p>
        </div>
      </footer>
    </div>
  )
}

export default App
