import styled from "styled-components";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Who from "./components/Who/Who";
import "./App.css";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;


  @media (max-width: 768px) {
    height: 100%;
    scroll-snap-type: none;
    scroll-behavior: auto;
    scroll-padding-top: 1px;
    justify-content:ceneter;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container className="gradient__bg">
      <Hero />
      <Who />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;
