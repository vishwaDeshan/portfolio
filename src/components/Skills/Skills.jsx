import React from "react";
import "./Skills.css";
import react from "../../../public/img/react.png";
import express from "../../../public/img/express.png";
import html_5 from "../../../public/img/html.png";
import css_3 from "../../../public/img/css.png";
import javaScript from "../../../public/img/javascript.png";
import node from "../../../public/img/node.png";
import redux from "../../../public/img/redux.png";
import java from "../../../public/img/java.png";
import mongdb from "../../../public/img/mongodb.png";

const Skills = () => {
  return (
    <div className="section skill-section">
      <div className="container">
        <div className="left">
          <h1 className="Contact-title">Technologies I'm skilled at</h1>
          <span className="desc">
            <i>
              I have been working with advanced tools and techniques in
              frontend, backend, and database development. Whether you require a
              straightforward website or a sophisticated web application, I
              possess the necessary skills, expertise, and determination to turn
              your ideas into reality. The latest technologies I have been
              proficient in....
            </i>{" "}
          </span>
        </div>
        <div className="right">
          <div class="row">
            <div class="column">
              <img src={html_5}/>
              <span className="name">HTML</span>
            </div>
            <div class="column">
              <img src={css_3}/>
              <span className="name">CSS</span>
            </div>
            <div class="column">
              <img src={javaScript}/>
              <span className="name">JavaScript</span>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <img src={react}/>
              <span className="name">ReactJS</span>
            </div>
            <div class="column">
              <img src={mongdb}/>
              <span className="name">MongoDB</span>
            </div>
            <div class="column">
              <img src={node}/>
              <span className="name">NodeJS</span>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <img src={express}/>
              <span className="name">ExpressJS</span>
            </div>
            <div class="column">
              <img src={java}/>
              <span className="name">Java</span>
            </div>
            <div class="column">
              <img src={redux}/>
              <span className="name">Redux</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
