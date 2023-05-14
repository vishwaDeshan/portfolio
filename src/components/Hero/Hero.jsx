import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { SocialIcon } from "react-social-icons";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="left">
          <h2 className="subtitle">Hello World!</h2>
          <h1 className="title">Vishwa Waweliyadda </h1>
          <p className="desc">
            <SocialIcon url="https://linkedin.com/in/jaketrent" />
            <SocialIcon url="https://github.com/in/jaketrent" />
            <SocialIcon url="https://twitter.com/in/jaketrent" />
            <SocialIcon url="https://instagram.com/in/jaketrent" />
          </p>
        </div>
        <div className="right">
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 1500, 1000]} scale={1.8}>
                <MeshDistortMaterial
                  color="#012348"
                  attach="material"
                  distort={0.2}
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
