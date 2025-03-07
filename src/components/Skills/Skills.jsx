import React from "react";
import "./Skills.css";
import react from "../../../public/img/react.png";
import sass from "../../../public/img/sass.png";
import node from "../../../public/img/node.png";
import redux from "../../../public/img/redux.png";
import mongdb from "../../../public/img/mongodb.png";
import angular from "../../../public/img/angular.png";
import ngrx from "../../../public/img/ngrx.png";
import dotnet from "../../../public/img/dotnet.png";
import blazor from "../../../public/img/blazor.png";
import azure from "../../../public/img/azure.png";
import mysql from "../../../public/img/mysql.png";

const Skills = () => {
  return (
    <div className="section skill-section">
      <div className="container skill-container">
        <div className="left">
          <h1 className="Contact-title">Technologies I'm skilled at</h1>
          <span className="desc">
              I have been working with advanced tools and techniques in
              frontend, backend, and database development. Whether you require a
              straightforward website or a sophisticated web application, I
              possess the necessary skills, expertise, and determination to turn
              your ideas into reality. The latest technologies I have been
              proficient in...{" "}
          </span>
        </div>
        <div className="right">
          <div class="row">
            <div class="column">
              <img src={angular} />
              <span className="name">Angular</span>
            </div>
            <div class="column">
              <img src={blazor} />
              <span className="name">Blazor</span>
            </div>
            <div class="column">
              <img src={react} />
              <span className="name">React</span>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <img src={ngrx} />
              <span className="name">NGRX</span>
            </div>
            <div class="column">
              <img src={dotnet} />
              <span className="name">ASP .NET</span>
            </div>
            <div class="column">
              <img src={node} />
              <span className="name">NodeJS</span>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <img src={mongdb} />
              <span className="name">MongoDB</span>
            </div>
            <div class="column">
              <img src={mysql} />
              <span className="name">My SQL</span>
            </div>
            <div class="column">
              <img src={azure} />
              <span className="name">Azure</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
