import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "../Cube/Cube";
import "./Who.css";

const Who = () => {
  return (
    <div className="Who-Section">
      <div className="Who-Container">
        <div className="Who-Left">
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </div>
        <div className="Who-Right">
          <h1 className="Who-Title">Who am I</h1>
          <div className="Who-WhatWeDo"></div>
          <p className="Who-Desc">
            <i>
              I'm <b>Vishwa Waweliyadda</b>, an undergrate at the University
              of Moratuwa majoring in Information Technology, I am eager to
              excel in the field of software engineering and contribute to the
              development of innovative and impactful solutions. I am seeking an
              opportunity to apply theoretical knowledge into practice and make
              meaningful contributions to the industry.
            </i>
          </p>
          <span className="resume">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1kSB6gh__Kd1GyGFwOb_Q7prVYw8scLaN/view"
            >
              View Resume
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Who;
