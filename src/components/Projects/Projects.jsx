import React from "react";
import "./Projects.css";
import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiRedux,
  SiKicad,
  SiSocketdotio,
  SiBlender,
} from "react-icons/si";

const Projects = () => {
  return (
    <div className="project-section">
      <h2>Projects</h2>
      <div class="project-containers">
        <div class="top-row">
          <div class="div1">
            <div className="project-title">
              <b>
                <i>EduMor </i> ~ Learning Management System{" "}
              </b>
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
              <FaReact size={30}/>
              <FaNodeJs size={30}/>
              <SiMongodb size={30}/>
              <SiRedux size={30}/>
            </div>
          </div>
          <div class="div2">
            <div className="project-title">
              <b>
                <i>Safe Zone Maker</i>
              </b>
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
              <SiKicad size={30}/>
              <SiBlender size={30}/>
            </div>
          </div>
        </div>
        <div class="bottom-row">
          <div class="div3">
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
            <div className="project-description div3-desc" style={{ fontSize: "20px" }}>
              This project is aimed at building a real-time sharing whiteboard.
              It is developed using the MERN stack along with Socket.IO, which enables real-time
              communication between multiple users. The whiteboard allows
              multiple users to collaborate on a shared canvas, in real-time.
              Users can draw and add different types of media to the canvas,
              which is then immediately visible to all other participants.
            </div>
            <div className="tech">
              <FaReact size={30}/>
              <FaNodeJs size={30}/>
              <SiMongodb size={30}/>
              <SiSocketdotio size={30}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
