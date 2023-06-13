import Landing from "./pages/Landing"
import './App.css';
import About from "./pages/About";
import StudioPortraits from "./pages/StudioPortraits";
import OutdoorPortraits from "./pages/OutdoorPortraits";
import Live from "./pages/Live";
import Nightlife from "./pages/Nightlife";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";

function App() {
  return (
    <div className="">
      <Landing />
      <About />
      <StudioPortraits />
      <OutdoorPortraits />
      <Live />
      <Nightlife />
      <Contact />
      <Hero />
    </div>
  )
}

export default App
