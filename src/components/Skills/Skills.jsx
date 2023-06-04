import React from "react";
import './skills.css'
import react from '../../../public/img/react.png'
import express from '../../../public/img/express.png'
import html_5 from '../../../public/img/html.png'
import css from '../../../public/img/css.png'
import javaScript from '../../../public/img/javascript.png'
import node from '../../../public/img/node.png'
import redux from '../../../public/img/redux.png'
import java from '../../../public/img/java.png'

const Skills = () => {
  return (
    <div className="section skill-section">
      <div className="container">
        <div className="left">
          <h1 className="Contact-title">Technologies I'm skilled at</h1>
          <p className="desc"><i>I have been working with advanced tools and techniques in
          frontend, backend, and database development. Whether you require a
          straightforward website or a sophisticated web application, I possess
          the necessary skills, expertise, and determination to turn your ideas
          into reality. The latest technologies I
          have been proficient in...</i> </p>
        </div>
        <div className="right">
         <div className="html">
          <div className="icon">
            <html_5/>
          </div>
          <div className="name">

          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
