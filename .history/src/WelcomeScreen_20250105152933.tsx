import React, { useEffect } from "react";
import gsap from "gsap";
import "./WelcomeScreen.css";

function WelcomeScreen() {
  useEffect(() => {
    function startLoader() {
      let counterElement = document.querySelector(".counter");
      let currentValue = 0;

      function updateCounter() {
        if (currentValue === 100) return;

        currentValue += Math.floor(Math.random() * 10) + 1;

        if (currentValue > 100) currentValue = 100;

        if (counterElement) {
          counterElement.textContent = String(currentValue);
        }

        const delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
      }

      updateCounter();
    }

    startLoader();

    // GSAP animations
    const counterAnimation = gsap.to(".counter", {
      duration: 0.25,
      delay: 3.5,
      opacity: 0,
    });

    const barAnimation = gsap.to(".bar", {
      duration: 1.5,
      delay: 3.5,
      height: 0,
      stagger: { amount: 0.5 },
      ease: "power4.inOut",
    });

    const headerAnimation = gsap.to(".h1", {
      duration: 1.5,
      delay: 4,
      y: 700,
      stagger: { amount: 0.5 },
      ease: "power4.inOut",
    });

    // Cleanup animations
    return () => {
      counterAnimation.kill();
      barAnimation.kill();
      headerAnimation.kill();
    };
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
