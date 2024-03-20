import Landing from "./pages/Landing"
import About from "./pages/About";
import StudioPortraits from "./pages/StudioPortraits";
import OutdoorPortraits from "./pages/OutdoorPortraits";
import Live from "./pages/Live";
import Nightlife from "./pages/Nightlife";
import Hero from "./pages/Hero";
import End from "./pages/End";
import Home from "./pages/Home";
import { useEffect, useRef, useState } from "react";
import Gallery from "./pages/Gallery";
import Header from "./pages/Header";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import MainFooter from './pages/MainFooter'
import ImageGrid from "./pages/ImageGrid";
import Layout from "./pages/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactScreen from "./pages/ContactScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll("[data-reveal]");
    const scrollReveal = function () {
      for (let i = 0; i < revealElements.length; i++) {
        const elementIsInScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15;

        if (elementIsInScreen) {
          revealElements[i].classList.add("revealed");
        } else {
          revealElements[i].classList.remove("revealed");
        }
      }
    }
    scrollReveal();
  }, [])
  return (
    <>
      <main className="App overflow-x-hidden">
        {loading ? (<div className={`${loading ? 'h-screen w-screen overflow-hidden' : 'overflow-hidden'}`}>
          <AnimatePresence> <Loader /></AnimatePresence>
        </div>) : !loading && (
          <>
            <Header />
            <Layout>
              <Home />
              <Landing />
              <Gallery />
              <About />
              <StudioPortraits />
              <ImageGrid />
              <OutdoorPortraits />
              <Live />
              <Nightlife />
              <ContactScreen />
              <Hero />
              <End />
            </Layout>
            <MainFooter />
          </>
        )}
      </main>
    </>
  )
}

export default App
