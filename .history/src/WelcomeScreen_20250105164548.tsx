import React, { useEffect, useState } from "react";
import gsap from "gsap";
import "./WelcomeScreen.css";

function WelcomeScreen() {
  const [counter, setCounter] = useState(0);
  const [isCounterFinished, setIsCounterFinished] = useState(false);

  useEffect(() => {
    // Use setInterval to control the speed of counter updates
    const interval = setInterval(() => {
      if (counter < 100) {
        const increment = Math.floor(Math.random() * 7) + 1; // Random increment between 1-5
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

    gsap.to(".bar", {
      duration: 2.5,
      height: 0,
      stagger: { amount: 0.5 },
      ease: "power4.inOut",
    });

    gsap.to(".button", {
      duration: 4,
      y: "-50vh",
      stagger: { amount: 0.5 },
      ease: "power4.inOut",
    });
  }

  return (
    <div className="screen">
      <h1 className="counter">{counter}</h1>

      <div className="overlay">
        {[...Array(10)].map((_, i) => (
          <div className="bar" key={i}></div>
        ))}
      </div>

      <button className="button">PRESS ME</button>
    </div>
  );
}

export default WelcomeScreen;
