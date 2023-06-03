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
          <h2 className="subtitle">
            <i>&lt; Hello World /&gt;</i>
          </h2>
          <h1 className="title">
            <sup>I'm </sup>Vishwa Waweliyadda{" "}
          </h1>
          <hr />
          <span><i>I am a passionate Information Technology major at the
            University of Moratuwa, Sri Lanka, with a focus on applying new
            technologies to address real-world challenges...</i>
          </span>
          <p className="desc">
            <SocialIcon url="https://www.linkedin.com/in/vishwa-waweliyadda-ab72b7246/" />
            <SocialIcon url="https://github.com/vishwaDeshan" />
            <SocialIcon url="https://twitter.com/VishwaDeshan98" />
            <SocialIcon url="https://www.instagram.com/vishwa_desh_98/?fbclid=IwAR2GUCXnI4lTBh2TxcqUtYSTN0Vq-QYhoj9A1ugmnT0EycFDBQOp3ls2UHk" />
          </p>
        </div>
        <div className="right">
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 1500, 1000]} scale={1.65}>
                <MeshDistortMaterial
                  color="#012348"
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
