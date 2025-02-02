import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  const skillColors = {
    "html-5": "#f06528",
    css3: "#2965f1",
    sass: "#cf649a",
    JavaScript: "#f7df1e",
    reactjs: "#61dafb",
    nodejs: "#68a063",
    Vuejs: "#42b883",
    swift: "#f05138",
    npm: "#cb3837",
    "sql-database": "#00758f",
    aws: "#ff9900",
    firebase: "#ffca28",
    python: "#306998",
    docker: "#2496ed"
  };

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i
                  className={skills.fontAwesomeClassname}
                  style={{color: skillColors[skills.skillName] || "#000"}}
                ></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
