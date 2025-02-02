import React, {useState, createRef} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

const techIconss = {
  React: "fab fa-react",
  "Node.js": "fab fa-node",
  GraphQL: "fas fa-project-diagram",
  JavaScript: "fab fa-js",
  TypeScript: "fab fa-js",
  HTML: "fab fa-html5",
  CSS: "fab fa-css3-alt",
  Python: "fab fa-python"
};

const techIcons = {
  React: "fab fa-react",
  JavaScript: "fab fa-js",
  Flask: "fas fa-flask", // Placeholder for Flask
  SQL: "fas fa-database",
  HTML: "fab fa-html5",
  CSS: "fab fa-css3-alt",
  AWS: "fab fa-aws",
  Java: "fab fa-java",
  Spring: "fas fa-seedling", // Placeholder for Spring
  Hibernate: "fas fa-database", // Placeholder for Hibernate
  Junit: "fas fa-vial", // Placeholder for JUnit
  "C++": "fas fa-file-code", // Placeholder for C++
  Python: "fab fa-python"
};

const techColors = {
  React: "#61dafb", // React's official color
  JavaScript: "#f7df1e", // JavaScript's yellow
  Flask: "#000000", // Flask is black/white
  SQL: "#00758f", // General SQL blue
  HTML: "#f06528", // HTML5 orange
  CSS: "#2965f1", // CSS3 blue
  AWS: "#ff9900", // AWS orange
  Java: "#007396", // Java's official blue
  Spring: "#6db33f", // Spring green
  Hibernate: "#59666c", // Hibernate's brand color
  Junit: "#25a162", // Green for JUnit
  "C++": "#00599c", // C++ blue
  Python: "#306998" // Python blue
};

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>

        {/* Add techStack display */}

        <p
          className={
            isDark
              ? "experience-text-tech dark-mode-text"
              : "experience-text-tech"
          }
        >
          <strong>Tech Stack: </strong> {cardInfo.tech}
        </p>

        {/* Render Tech Stack Icons */}
        <div className="tech-stack-icons">
          {cardInfo.tech &&
            cardInfo.tech.split(", ").map((tech, index) => (
              <i
                key={index}
                className={techIcons[tech] || "fas fa-code"} // Default to "fas fa-code" if no icon is found
                style={{
                  fontSize: "1.5rem",
                  margin: "0 0.5rem",
                  color: techColors[tech] || "#000" // Default to black if no color is defined
                }}
                title={tech} // Tooltip for tech name
              ></i>
            ))}
        </div>

        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}
