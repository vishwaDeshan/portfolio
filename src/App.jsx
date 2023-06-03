import styled from "styled-components";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Who from "./components/Who/Who";
import './App.css'
import Skills from "./components/Skills/Skills";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container className="gradient__bg">
      <Hero />
      <Who />
      <Skills/>
      <Contact />
    </Container>
  );
}

export default App;
