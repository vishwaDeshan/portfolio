import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import "./Hero.css";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter
} from "react-icons/fa";


const Hero = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="left">
          <h2 className="subtitle">
            <i>&lt; Hello World /&gt;</i>
          </h2>
          <h1 className="title">
            <sup>I'm </sup>Vishwa Waweliyadda
          </h1>
          <hr  class="hr-tag"/>
          <span className="hero-desc"><i>A passionate Information Technology major at the
            University of Moratuwa, Sri Lanka, with a focus on applying new
            technologies to address real-world challenges...</i>
          </span>
          <p className="desc">
            <a href="https://www.linkedin.com/in/vishwa-waweliyadda-ab72b7246/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon-large"/></a>
            <a href="https://github.com/vishwaDeshan" target="_blank" rel="noopener noreferrer"><FaGithub className="icon-large"/></a>
            <a href="https://twitter.com/VishwaDeshan98" target="_blank" rel="noopener noreferrer"><FaTwitter className="icon-large"/></a>
            <a href="https://www.instagram.com/vishwa_desh_98/?fbclid=IwAR2GUCXnI4lTBh2TxcqUtYSTN0Vq-QYhoj9A1ugmnT0EycFDBQOp3ls2UHk" target="_blank" rel="noopener noreferrer"><FaInstagram className="icon-large"/></a>
          </p>
        </div>
        <div className="right">
          <Canvas className="sphere">
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 1500, 1000]} scale={1.65} >
                <MeshDistortMaterial
                  color="#43008F"
                  attach="material"
                  distort={0.3}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <img className="img" src="./img/me.png" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
