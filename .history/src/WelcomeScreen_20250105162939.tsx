import React, { useEffect, useState } from "react";
import gsap from "gsap";
import "./WelcomeScreen.css";

function WelcomeScreen() {
  const [counter, setCounter] = useState(0);
  const [isCounterFinished, setIsCounterFinished] = useState(false);

  useEffect(() => {
    function startLoader() {
      // Only update the counter if it hasn't reached 100 yet
      if (counter < 100) {
        const increment = Math.floor(Math.random() * 5) + 1; // Random increment between 1-5
        setCounter((prevCounter) => {
          const newValue = prevCounter + increment;
          if (newValue >= 100) {
            setIsCounterFinished(true);
            return 100;
          }
          return newValue;
        });

        // Random interval between 300ms and 800ms
        const delay = Math.floor(Math.random() * 500) + 300;
        setTimeout(startLoader, delay); // Recursive call with random delay
      }
    }

    startLoader(); // Start counter updates
  }, [counter]);

  useEffect(() => {
    if (isCounterFinished) {
      setTimeout(() => {
        startAnimations();
      }, 2000);
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
  }

  return (
    <div className="screen">
      <h1 className="counter">{counter}</h1>

      <div className="overlay">
        {[...Array(10)].map((_, i) => (
          <div className="bar" key={i}></div>
        ))}
      </div>

      <div className="container">
        <nav>
          <div>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div>
            <a href="#">Playground</a>
          </div>
        </nav>
        <div className="header">
          {"fla.u.".split("").map((char, i) => (
            <div className="h1" key={i}>
              {char}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreen;
