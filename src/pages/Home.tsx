import React, { useRef, useEffect } from 'react';
import hero from "../assets/hero-shape.svg";
import pixelzuid from "../assets/pixelzuid1.svg"
import TextLoop from "react-text-loop";

const Home = () => {
  const letterRef = useRef(null);



  useEffect(() => {
    const letterBoxes = document.querySelectorAll("[data-letter-effect]");

    let activeLetterBoxIndex = 0;
    let lastActiveLetterBoxIndex = 0;
    let totalLetterBoxDelay = 0;


    const setLetterEffect = function () {

      // loop through all letter boxes
      for (let i = 0; i < letterBoxes.length; i++) {
        // set initial animation delay
        let letterAnimationDelay = 0;

        // get all character from the current letter box
        const letters = letterBoxes[i].textContent.trim();
        // remove all character from the current letter box
        letterBoxes[i].textContent = "";

        // loop through all letters
        for (let j = 0; j < letters.length; j++) {

          // create a span
          const span = document.createElement("span");

          // set animation delay on span
          span.style.animationDelay = `${letterAnimationDelay}s`;

          // set the "in" class on the span, if current letter box is active
          // otherwise class is "out"
          if (i === activeLetterBoxIndex) {
            span.classList.add("in");
          } else {
            span.classList.add("out");
          }

          // pass current letter into span
          span.textContent = letters[j];

          // add space class on span, when current letter contain space
          if (letters[j] === " ") span.classList.add("space");

          // pass the span on current letter box
          letterBoxes[i].appendChild(span);

          // skip letterAnimationDelay when loop is in the last index
          if (j >= letters.length - 1) break;
          // otherwise update
          letterAnimationDelay += 0.05;

        }

        // get total delay of active letter box
        if (i === activeLetterBoxIndex) {
          totalLetterBoxDelay = Number(letterAnimationDelay.toFixed(2));
        }

        // add active class on last active letter box
        if (i === lastActiveLetterBoxIndex) {
          letterBoxes[i].classList.add("active");
        } else {
          letterBoxes[i].classList.remove("active");
        }

      }

      setTimeout(function () {
        lastActiveLetterBoxIndex = activeLetterBoxIndex;

        // update activeLetterBoxIndex based on total letter boxes
        activeLetterBoxIndex >= letterBoxes.length - 1 ? activeLetterBoxIndex = 0 : activeLetterBoxIndex++;

        setLetterEffect();
      }, (totalLetterBoxDelay * 1000) + 3000);

    }

    setLetterEffect()
  }, []);



  return (
    <section className="section hero" id="home" aria-label="home">
      <div className="container animate-slowfade">
        <div data-aos="zoom-in" data-aos-duration="2000" className="bg-primary">
          <img src={pixelzuid}  alt="logo" className="hero-banner w-[120px] h-[60px] object-contain md:w-[320px] md:h-[320px]" />
        </div>
        <div className="hero-content">
          <h1  data-aos="zoom-in" data-aos-duration="1500" className="font-acumin text-4xl md:text-9xl hero-title ">Nkosinati Sopangisa</h1>
          <div data-aos="zoom-in" data-aos-duration="3000" className="wrapper mt-4">
            <div className="font-sans text-2xl md:text-5xl mt-10">
              <p className="strong font-sans text-3xl md:text-5xl" ref={letterRef} data-letter-effect>Photographer</p>
              <p className="strong font-sans text-3xl md:text-5xl" ref={letterRef} data-letter-effect>Videographer</p>
              <p className="strong font-sans text-3xl md:text-5xl" ref={letterRef} data-letter-effect>Cameraman</p>
              <p className="strong font-sans text-3xl md:text-5xl" ref={letterRef} data-letter-effect>Graphic Designer</p>
              <p className="strong font-sans text-3xl md:text-5xl" ref={letterRef} data-letter-effect>Content Creator</p>
            </div>
          </div>
          <p data-aos="zoom-in" data-aos-duration="3000" className="hidden md:block hero-text">10+ Years Of Experience</p>
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-duration="3000" className="hidden md:block">
        <img src={hero} width="311" height="389" alt="" className="shape w-[100px] h-[60px]" />
      </div>
  </section>
  )
}

export default Home
