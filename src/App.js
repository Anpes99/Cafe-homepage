import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import { useRef } from "react";
import Footer from "./components/Footer";

function App() {
  const ref = useRef();

  return (
    <div ref={ref} className="App w-full">
      <Header />
      <Intro />
      <Section1 />
      <Section2 bodyRef={ref} />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default App;
