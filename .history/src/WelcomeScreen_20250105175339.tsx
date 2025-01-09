import { useEffect, useState } from "react";
import gsap from "gsap";
import "./WelcomeScreen.css";
import App from "./App";

function WelcomeScreen() {
  const [counter, setCounter] = useState(0);
  const [isCounterFinished, setIsCounterFinished] = useState(false);

  useEffect(() => {
    // Use setInterval to control the speed of counter updates
    const interval = setInterval(() => {
      if (counter < 100) {
        const increment = Math.floor(Math.random() * 8) + 1;
        setCounter((prevCounter) => {
          const newValue = prevCounter + increment;
          if (newValue >= 100) {
            setIsCounterFinished(true);
            return 100;
          }
          return newValue;
        });
      } else {
        clearInterval(interval); // Clear interval when counter reaches 100
      }
    }, Math.floor(Math.random() * 400) + 300); // Random interval between 300ms and 800ms

    return () => clearInterval(interval); // Clean up the interval when the component unmounts
  }, [counter]);

  useEffect(() => {
    if (isCounterFinished) {
      setTimeout(() => {
        startAnimations();
      }, 700);
    }
  }, [isCounterFinished]);

  // Animation function triggered after counter reaches 100
  function startAnimations() {
    gsap.to(".counter", {
      duration: 0.3,
      opacity: 0,
    });

    gsap.to(".bar1", {
      duration: 2.5,
      height: 0,
      stagger: { amount: 0.5 },
      ease: "power4.inOut",
    });

    gsap.to(".button", {
      duration: 4,
      y: "-55vh",
      stagger: { amount: 0.5 },
      ease: "power4.inOut",
    });
  }

  function handleButtonClick() {
    gsap.to(".bar2", {
      duration: 1.75,
      opacity: 0,
    });
    gsap.to(".button", {
      duration: 1.75,
      opacity: 0,
      onComplete: () => {
        // Disable the button after it fades out
        const buttonElement = document.querySelector(".button");
        if (buttonElement) {
          // Cast to HTMLElement to access the 'style' property
          (buttonElement as HTMLElement).style.pointerEvents = "none"; // Make button unclickable
          (buttonElement as HTMLElement).style.visibility = "hidden"; // Hide the button completely
        }
      },
    });
  }

  return (
    <div className="screen">
      <h1 className="counter">{counter}</h1>
      <div className="overlay1">
        {[...Array(10)].map((_, i) => (
          <div className="bar1" key={i}></div>
        ))}
      </div>
      <div className="overlay2">
        {[...Array(10)].map((_, i) => (
          <div className="bar2" key={i}></div>
        ))}
      </div>
      <button onClick={handleButtonClick} className="button">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>START</span>
      </button>
    </div>
  );
}

export default WelcomeScreen;
