import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

const techIcons = {
  Reactjs: "fab fa-react",
  Redux: "fas fa-code-branch", // Redux doesn't have an official icon, using a branching icon
  "Vue 3": "fab fa-vuejs", // Vue 3
  "Node.js": "fab fa-node",
  Express: "fas fa-server", // Express.js is a backend framework
  "Express.js": "fas fa-server",
  MongoDB: "fas fa-database", // MongoDB as a database
  Socketio: "fas fa-broadcast-tower", // Placeholder for Socket.io
  "Socket.io": "fas fa-broadcast-tower",
  CSS: "fab fa-css3-alt",
  HTML: "fab fa-html5",
  Javascript: "fab fa-js",
  "Vanilla Javascript": "fab fa-js",
  TypeScript: "fab fa-js", // No official TypeScript icon in FontAwesome
  GraphQL: "fas fa-project-diagram", // GraphQL as an API placeholder
  MySql: "fas fa-database",
  D3: "fas fa-chart-line", // Placeholder for D3.js (data visualization)
  "D3.js": "fas fa-chart-line",
  Bootstrap: "fab fa-bootstrap",
  Firebase: "fas fa-fire",
  Java: "fab fa-java",
  Spring: "fas fa-seedling", // Spring green
  "Spring Boot": "fas fa-seedling",
};

const techColors = {
  Reactjs: "#61dafb", // React
  Redux: "#764abc", // Redux purple
  "Vue 3": "#42b883", // Vue 3 green
  "Node.js": "#68a063", // Node.js green
  Express: "#000000", // Express black
  "Express.js": "#000000", // Express.js black
  MongoDB: "#47a248", // MongoDB green
  Socketio: "#010101", // Socket.io black
  CSS: "#2965f1", // CSS blue
  HTML: "#f06528", // HTML5 orange
  Javascript: "#f7df1e", // JavaScript yellow
  "Vanilla Javascript": "#f7df1e", // JavaScript yellow
  TypeScript: "#3178c6", // TypeScript blue
  GraphQL: "#e535ab", // GraphQL pink
  MySql: "#00758f", // MySQL blue
  D3: "#f9a03c", // D3.js orange
  "D3.js": "#f9a03c", // Alternative for D3.js
  Bootstrap: "#7952b3", // Bootstrap purple
  AWS: "#ff9900", // AWS orange
  Java: "#007396", // Java blue
  Spring: "#6db33f", // Spring green
  "Spring Boot": "#6db33f", // Spring Boot green
  Hibernate: "#59666c", // Hibernate grey
  JUnit: "#25a162", // JUnit green
  "C++": "#00599c", // C++ blue
  Python: "#306998", // Python blue
  Firebase: "#ffca28"
};

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <div id="opensource">
      <Fade bottom duration={1000} distance="20px">
        <div className="main" id="projects">
          <div>
            <h1 className="skills-heading">{bigProjects.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode project-subtitle"
                  : "subTitle project-subtitle"
              }
            >
              {bigProjects.subtitle}
            </p>

            <div className="projects-container">
              {bigProjects.projects.map((project, i) => {
                return (
                  <div
                    key={i}
                    className={
                      isDark
                        ? "dark-mode project-card project-card-dark"
                        : "project-card project-card-light"
                    }
                  >
                    {project.image ? (
                      <div className="project-image">
                        <img
                          src={project.image}
                          alt={project.projectName}
                          className="card-image"
                        ></img>
                      </div>
                    ) : null}
                    <div className="project-detail">
                      <h5
                        className={
                          isDark ? "dark-mode card-title" : "card-title"
                        }
                      >
                        {project.projectName}
                      </h5>
                      <p
                        className={
                          isDark ? "dark-mode card-subtitle" : "card-subtitle"
                        }
                      >
                        {project.projectDesc}
                      </p>

                      <p
                        className={
                          isDark ? "dark-mode card-subtitle" : "card-subtitle"
                        }
                      >
                        {project.tech}
                      </p>

                      <div className="tech-stack-icons">
                        {project.tech &&
                          project.tech.split(", ").map((tech, index) => (
                            <i
                              key={index}
                              className={techIcons[tech] || "fas fa-code"} // Default to "fas fa-code" if no icon is found
                              style={{
                                fontSize: "1.2rem",
                                margin: "0 0.5rem",
                                color: techColors[tech] || "#000" // Default icon color
                              }}
                              title={tech} // Tooltip for tech name
                            ></i>
                          ))}
                      </div>
                      {project.footerLink ? (
                        <div className="project-card-footer">
                          {project.footerLink.map((link, i) => {
                            return (
                              <span
                                key={i}
                                className={
                                  isDark
                                    ? "dark-mode project-tag"
                                    : "project-tag"
                                }
                                onClick={() => openUrlInNewTab(link.url)}
                              >
                                {link.name}
                              </span>
                            );
                          })}
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
