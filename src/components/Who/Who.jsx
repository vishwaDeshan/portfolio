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
          <h1 className="Who-Title">About</h1>
          <div className="Who-WhatWeDo"></div>
          <p className="Who-Desc">
            <i>
              Hi, I'm Vishwa Waweliyadda, an IT undergrad at the University of
              Moratuwa passionate about innovation. With strong critical
              thinking, collaboration, and adaptability skills, I aim to
              positively impact the tech industry. I enjoy analyzing complex
              problems and working collaboratively to achieve great results. I
              prioritize adaptability and continuously learn new skills to stay
              current in the ever-evolving IT world. I'm excited about my
              journey in IT and the opportunities it presents for me to innovate
              and excel..
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Who;
