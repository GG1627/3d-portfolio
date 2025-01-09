import React, { useEffect } from "react";
import gsap from "gsap";
import "./WelcomeScreen.css";

function WelcomeScreen() {
  useEffect(() => {
    function startLoader() {
      let counterElement = document.querySelector(".counter");
      let currentValue = 0;

      function updateCounter() {
        const increment = Math.floor(Math.random() * 7) + 1;
        currentValue += increment;

        if (currentValue > 100) currentValue = 100;
        //
        else if (counterElement) {
          counterElement.textContent = String(currentValue);
        }
        //
        else if (currentValue < 100) {
          const delay = Math.floor(Math.random() * 200) + 400;
          setTimeout(updateCounter, delay);
        }
        //
        else {
          setTimeout(startAnimations, 2000); // Wait 2 seconds before starting animations
        }
      }

      updateCounter();
    }

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

    startLoader();
  }, []);

  return (
    <div className="screen">
      <h1 className="counter">0</h1>

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
