import React from "react";
import "./Projects.css";
import { FaGithub, FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import {
  SiMongodb,
  SiRedux,
  SiKicad,
  SiSocketdotio,
  SiBlender,
  SiAngular,
  SiDotnet,
  SiSass,
} from "react-icons/si";

const Projects = () => {
  return (
    <div className="project-section">
      <h2>Projects</h2>
      <div class="project-containers" style={{ marginTop: "-3px" }}>
        <div class="top-row">
          <div class="div1">
            <div className="project-title">
              <b>Zaptern - Intern Opportunity Management Portal</b>
              <span class="github-icon">
                <a
                  href="https://github.com/vishwaDeshan/Zaptern-SOMP-Frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub style={{ color: "white" }} />
                </a>
              </span>
            </div>
            <div className="project-description">
              An internship management system designed to streamline the process
              of managing internships. It uses clean architecture with the CQRS
              pattern, along with ASP.NET for the backend and NgRx for state
              management in Angular.
            </div>
            <div className="tech">
              <SiAngular size={30} />
              <FaBootstrap size={30} />
              <SiDotnet size={30} />
              <SiSass size={30} />
            </div>
          </div>
          <div class="div2">
            <div className="project-title">
              <b>EduMor ~ Learning Management System </b>
              <span class="github-icon">
                <a
                  href="https://github.com/vishwaDeshan/EduMor-Learning-Management-System"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub style={{ color: "white" }} />
                </a>
              </span>
            </div>
            <div className="project-description">
              Hasthiya IT was the lead developer for our Level 2 project, an LMS
              to assist people in Sri Lanka with competitive exam preparation.
              The system includes web and mobile apps using the MERN stack and
              Flutter. I worked as the project's group leader.
            </div>
            <div className="tech">
              <FaReact size={30} />
              <FaNodeJs size={30} />
              <SiMongodb size={30} />
              <SiRedux size={30} />
            </div>
          </div>
        </div>
        <div class="top-row">
          <div class="div1">
            <div className="project-title">
              <b>Real Time Sharing White Board</b>
              <span class="github-icon" url>
                <a
                  href="https://github.com/vishwaDeshan/Real-Time-Whiteboard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub style={{ color: "white" }} />
                </a>
              </span>
            </div>
            <div
              className="project-description div3-desc"
              style={{ fontSize: "20px" }}
            >
              This project is a real-time collaborative whiteboard built with
              the MERN stack and Socket.IO. It enables multiple users to draw,
              add media, and interact on a shared canvas with instant updates.
            </div>
            <div className="tech">
              <FaReact size={30} />
              <FaNodeJs size={30} />
              <SiMongodb size={30} />
              <SiSocketdotio size={30} />
            </div>
          </div>
          <div class="div2">
            <div className="project-title">
              <b>Safe Zone Maker</b>
              <span class="github-icon">
                <a
                  href="https://github.com/vishwaDeshan/Safe-Zone-Maker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub style={{ color: "white" }} />
                </a>
              </span>
            </div>
            <div className="project-description">
              A Covid-19 safety system that only permits non-infected customers
              into public places. Built with an Atmega32 microcontroller,
              sensors, and programmed in C language. I worked as the leader for
              this project.
            </div>
            <div className="tech">
              <SiKicad size={30} />
              <SiBlender size={30} />
            </div>
          </div>
        </div>
      </div>
      <div className="explore-more-button">
        <button type="button">
          <a
            href="https://github.com/vishwaDeshan?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore more projects
            <div className="icon">
              <FaGithub style={{ color: "white" }} size={30} />
            </div>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Projects;
